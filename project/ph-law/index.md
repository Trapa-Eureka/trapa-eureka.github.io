---
layout: post
author: "JINHO SON"
title:  "PH-Law"
subtitle: "Search scattered Philippine legal information in one place"
description: "PH-Law helps you search scattered Philippine legal information in one place — an information-finding aid, not legal advice. A side project by JINHO SON."
type: "Side Project"
projects: true
text: true
portfolio: true
post-header: true
header-img: "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=1600&q=80"
role-title: "Planning · Design · Development (solo)"
role-specific: "Web App · Legal Search · AI Summaries"
team: "Solo development"
platforms: "Web (PWA)"
date: "Apr 2026 - Present"
order: 6
---

# Overview

## Scattered legal information, all in one place

Legal information in the Philippines is spread across many public sources, so when you actually need to find something, you end up bouncing from site to site and wandering for a while. And for the people who need this information most — small business owners, freelancers, and foreigners — that process is even more daunting.

**PH-Law** is a legal research tool that gathers public Philippine statutes · Supreme Court decisions · administrative rules · local ordinances so you can **search them in one place**. The goal is to make scattered public information easier to find and read.

> The information provided here is **for informational purposes only** and is not legal advice. For specific matters, you should consult a Philippine attorney.

# What it does

- **Unified search** — It combines precise keyword search with meaning-based (semantic) search, so you can find things by statute name · number · case number as well as by natural-language questions. As you type, autocomplete suggests titles.
- **Topic-based collections** — It organizes the key statutes and related cases by topic, such as Constitution · Civil Law · Criminal Law · Real Estate · Immigration · Foreign Investment.
- **Statute · case details** — On a single screen you can see the full text and article structure, a short summary (TL;DR), an amendment timeline showing the enactment → amendment → repeal flow, and citation relationships showing the cases that cited that statute.

# What I cared about most while building it

- **"Finding," not "judging"** — Rather than interpreting the law or drawing conclusions for you, I focused on helping you quickly find and read the public original texts.
- **Being clear about sources and limits** — Each piece of information is shown alongside its original text · basis, and I made it clear throughout the screens that this is "for informational purposes only and not legal advice."
- **Gathering scattered public information** — I saw the core value as making information that is already public but scattered easy to find in one place.

# Stack

- **Front**: Next.js (App Router), React, TypeScript, PWA
- **Search**: Full-text (Typesense) + semantic (pgvector) hybrid, combined with RRF
- **Embeddings**: Semantic embeddings (Voyage AI)
- **DB**: Supabase (Postgres + pgvector)
- **Data collection**: Python data collection · cleaning pipeline (multiple public legal sources)
- **AI**: Claude API (summaries)
- **Others**: Scheduler (Inngest), deployment (Vercel + Railway)
- **Key screens**: Unified search, topic-based collections, statute/case details (summary · amendment timeline · citation relationships)

# Now, and next

I'm refining it to make scattered public legal information easier and faster to find.

To take a look for yourself, head here: **[ph-law.vercel.app](https://ph-law.vercel.app){:target="_blank" rel="noopener"}**
