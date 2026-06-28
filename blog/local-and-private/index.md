---
layout: post
title:  "Showing What's Nearby Without Exposing Where You Are"
subtitle: "The hardest part of building Bayni wasn't the marketplace — it was location: keeping a feed local while keeping each person's exact spot private"
description: "How I built a location feed that feels local without exposing anyone's exact spot — area resolution, privacy by design, and killing async races."
type: "Development"
blog: true
text: true
author: "JINHO SON"
post-header: true
header-img: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1600&q=80"
order: 6
---

# The feature that looks simple

[Bayni](/project/market-ph/) is a neighborhood marketplace: you open it and see things for sale near you, posted by people in your own community. "Near you" sounds like a one-line feature — sort by distance, done. It wasn't. Location turned out to be the part I rewrote the most and worried about the longest, because two things people expect from it quietly pull in opposite directions:

- **"Show me what's close."** That needs to know where you are.
- **"Don't tell strangers where I live."** That needs to *not* reveal where you are.

A secondhand trade usually ends with two neighbors meeting in person, often close to home. So getting this right wasn't a nice-to-have — it was the difference between an app that feels neighborly and one that feels exposing.

This is the story of that problem — the cause, the process, and where it landed. I'm keeping the implementation details private; what's worth sharing is the *shape* of the problem and the decisions it forced.

# The cause: a GPS dot isn't a neighborhood

Two hard realities sit underneath "near me."

**1. A raw location reading is not a place.** A phone hands you a pair of coordinates. People, though, think in neighborhoods — *this barangay, that city.* Turning the first into the second *reliably* — across a country where address and boundary data can be patchy — is genuinely messy. A reading lands just over the line into the next area; or it resolves to something too coarse to be useful; or, now and then, it resolves to nothing at all. Lean on a single way of looking it up and you quietly inherit all of its blind spots.

**2. The thing that makes "near me" work is the very thing you have to protect.** To rank listings by distance, you need a precise point. But a precise point is exactly the piece of information a person most deserves to keep to themselves. So the real question was never "how do I compute distance." It was: *how do I use a precise location to rank what's nearby while making sure that precise location never reaches anyone else?*

# The process: resolve carefully, reveal nothing

I'm keeping the internals private, but the principles were these.

**1. Treat turning a point into an area as best-effort, with a fallback and a graceful floor.**
Instead of trusting one lookup, I reconcile more than one and degrade gracefully: if the nicest answer — a specific neighborhood name — isn't available, fall back to a coarser-but-correct one like the city; and if even that fails, keep the person moving instead of dead-ending them. An early, painful bug taught me this: when the area lookup errored, it could take the *entire* location step down with it. Now a failed lookup degrades to "we at least know roughly where you are" rather than breaking the screen.

**2. Separate "what's used for the math" from "what's shown to people."**
The precise point earns its keep in exactly one place — deciding what's near you — and then it stays there. What other users ever see is an approximate area label, never the dot. Drawing that line clearly, and enforcing it in one central place rather than trusting every screen to remember, was the single most important decision in the whole feature.

**3. Give people honest control over their own location.**
Let someone set or adjust their area by hand, look at a different neighborhood when they want to, and actually understand what's shared. "Local by default" shouldn't mean "trapped wherever the GPS thinks you are."

**4. Kill the races.**
Location is asynchronous — you ask, and the answer comes back a moment later. A whole class of my nastiest bugs came from answers arriving *after* the user had already moved on: a result writing itself into the wrong place, a stale reading overwriting a fresh one. The fix was discipline rather than cleverness — every in-flight lookup can be cancelled, and a late answer that no longer matches the current state is dropped, not applied.

# The result

- The feed feels genuinely local without anyone broadcasting their address: the exact position is used only to rank, and only an approximate area name is ever public.
- Area resolution holds up on messy, real-world input — when the best answer isn't there, you still land somewhere *correct* instead of nowhere.
- The flaky, hard-to-reproduce failures — the ones that came from timing, not logic — are gone, because late and orphaned location answers are now ignored by design.

The lesson I'll carry: with location, **the engineering and the ethics are the same problem.** What made the feature trustworthy wasn't a clever distance calculation — it was being deliberate about what a precise point is allowed to touch, and making sure it touches nothing else.

This grew out of building [Bayni](/project/market-ph/), a neighborhood marketplace for the Philippines — you can read more about it there.
