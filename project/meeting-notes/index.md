---
layout: post
author: "JINHO SON"
title:  "MeetingNotes"
subtitle: "Paste in your meeting notes, and decisions and to-dos get organized"
description: "Paste in messy meeting notes and get clean decisions and action items back. A small productivity side project by JINHO SON."
type: "Side Project"
projects: true
text: true
portfolio: true
post-header: true
header-img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80"
role-title: "Planning · Design · Development (Solo)"
role-specific: "Web App · AI Summarization/Extraction"
team: "Solo Development"
platforms: "Web (PWA)"
date: "Jun 2026 - Present"
order: 5
---

# Overview

## The meeting's over — but where did the to-dos go?

Once a meeting ends, "who's doing what, by when" tends to get scattered somewhere in your notes and fizzle out. What actually matters isn't the meeting itself, but **the to-dos that are left when it's over**.

**MeetingNotes** lets you simply paste in your meeting notes (or a transcript), and AI automatically extracts the **decisions · owners · deadlines** and organizes them into a clean to-do list. It takes just a few seconds.

# What it does for you

- **Just paste it in** — paste your meeting notes or transcript as-is, or upload a .docx · .pdf · .txt file. It's not picky about format.
- **Automatic decision · owner · deadline organization** — it pulls out what was decided, who's responsible, and by when from the meeting content, and lays it all out at a glance.
- **Summaries tailored to the meeting type** — pick the nature of the meeting, and the summary's tone is matched accordingly.
- **Group · export** — group notes by client / project, and copy them as Markdown or download them as CSV to bring straight into the tools you already use.
- **Progress tracking** — mark the organized to-dos as done / not done to keep on top of them.

# How to use it

1. Paste in your meeting notes or upload a file.
2. (Optional) Set the meeting type and client / project.
3. "Extract to-dos" — decisions and to-dos come out organized along with owners · deadlines.

# What I focused on most while building it

- There are plenty of meeting tools, but I focused on the flow that automatically takes care of the **"so what do I need to do?"** that's left over once it's over.
- I prioritized **not being picky about input format** so you can drop in the notes you already use, as-is.
- I made the results exportable straight to Markdown · CSV, reducing the friction of moving them into other tools.

# Stack

- **Front**: Next.js (App Router), React, Tailwind CSS, TypeScript, PWA
- **AI**: Claude API (Anthropic) — extracting decisions · owners · deadlines from meeting notes
- **Auth · DB**: Supabase (authentication, Postgres)
- **Document I/O**: importing .docx · .pdf · .txt, exporting Markdown · CSV
- **Key screens**: note input → to-do extraction, organization by client / project, progress tracking

# Now, and what's next

With the goal of cutting down the time spent organizing things after a meeting, I'm in the middle of refining it into a smoother flow.

To try it for yourself, head here: **[meeting-notes-lemon-two.vercel.app](https://meeting-notes-lemon-two.vercel.app){:target="_blank" rel="noopener"}**
