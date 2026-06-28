---
layout: post
title:  "What It Takes to Turn PDF Tables into Clean Data"
subtitle: "The unglamorous data engineering behind a recent side project — and why it was the hard part"
type: "Development"
blog: true
text: true
author: "JINHO SON"
post-header: true
header-img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1600&q=80"
order: 5
---

# The map was the easy part

A while back I built a map that plots a nationwide dataset — one value per location, the whole picture at a glance. When people see it, they assume the map itself was the hard part. It wasn't. Drawing pins and chips on a map is a solved problem. The part that took most of my time, and that I rewrote the most, was the unglamorous work that happens *before* anything reaches the screen: getting clean, reliable numbers out of the source files and onto the right spot on the map.

This is a write-up of that work — the cause, the process, and the result. The aim was simple and practical: turn a stack of PDF reports into something you can glance at on a map. The hard part was a purely technical one, and it's a problem almost every developer meets sooner or later.

# The cause: a PDF is a layout, not a dataset

The source data is published as PDF reports. And here's the thing every developer who has ever parsed a PDF already knows: **a PDF describes how a page should *look*, not what the data *means*.** Turning a PDF table back into clean rows of structured data is a classic, genuinely hard problem — the same story whether you're working with invoices, bank statements, research papers, or any other PDF anywhere.

Mine had all the usual suspects:

- **Several files, each with its own table layout.**
- **Headers that don't repeat.** A table starts with a stacked two-line header, then continues onto the next page with no header at all — so a naive parser reads those continuation rows as if the columns meant something entirely different.
- **Labels printed once per group.** A grouping label appears once at the top of a block and is visually implied for every row beneath it.
- **One source arrives as a scanned image.** No text to extract at all — just a picture of a table.
- **And then geocoding.** Even once you have clean "place → value" rows, a value means nothing on a map until the place name becomes coordinates. The names didn't always match a place database: truncated names, alternate spellings, and — from the scanned source — characters mangled by OCR.

Any one of these is a minor nuisance. Together, across files that shift slightly each week, they're a moving target.

# The process: parse defensively, then verify

I'm keeping the actual heuristics private, but the principles I kept returning to were these.

**1. Assume the input is imperfect, and carry context forward.**
The parser doesn't trust each page in isolation. When a page arrives with no header, it carries the previous header forward instead of guessing. When a value looks structurally wrong, it's recomputed from the parts I *do* trust rather than read blindly from a column that may have drifted. Rows that are clearly template noise get dropped, not displayed.

> The turning point was a bug I came to call the "region collapse" — a whole region's rows quietly folding into nothing because of those header-less continuation pages. The fix wasn't clever; it was teaching the parser to *remember* the header. But it reset how I thought about the job: treat every page as untrusted input.

**2. For the scanned source, OCR — then parse the OCR.**
The image-only source needed a separate path: turn the page into text-with-positions first, then run logic built specifically for its quirks. It's the most fragile link in the chain, and I treat it that way — the values still come from the correct table row even when a label reads imperfectly.

**3. Geocode offline, then sanity-check the result.**
Place names resolve against a local place database with a normalization layer, so truncated and misspelled names still land. But the lesson that stuck was this: **don't trust a coordinate just because you got one.** My favorite bug here was a place that geocoded *cleanly* — to a point hundreds of kilometers away, in completely the wrong spot, its chip floating off where no road exists. Now an obviously-wrong placement gets caught and corrected instead of silently shipped.

**4. Make it one button, and make it observable.**
All of this lives behind a single rebuild step, refreshed on a schedule so each new file flows through the exact same path. When something breaks, I can see *which* source and *which* row broke — so a file that would once have cost me an evening becomes a small, localized fix.

# The result

- Coverage went from "several sources silently dropping out" to **near-complete** — including the scanned source that produces no text at all, plus a handful of places that had been quietly falling out of geocoding.
- Places land **where they actually are.** The wrong-place mis-locations are gone.
- A small, honest residual — a few places out of a few hundred — still can't be matched reliably, so they're **deliberately left out rather than shown wrong**, and the app carries a quiet note about what's covered and how fresh the data is.

The biggest takeaway is unglamorous: **real-world data is always messier than it looks, and a parser is never truly "finished."** The durable win wasn't a perfect parser — it was making the pipeline re-runnable and observable, so the *inevitable* next surprise is a ten-minute fix instead of a lost evening.

This grew out of [a recent side project](/project/oil-price/) — you can see the finished map there.
