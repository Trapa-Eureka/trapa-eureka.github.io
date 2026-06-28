---
layout: post
author: "JINHO SON"
title:  "BentaAI"
subtitle: "Marketing copy for Filipino sellers, in the local voice"
description: "BentaAI writes marketing copy for Filipino sellers in a natural Taglish voice — product captions and promos in seconds. A side project by JINHO SON."
type: "Side Project"
projects: true
text: true
portfolio: true
post-header: true
header-img: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=1600&q=80"
role-title: "Planning · Design · Development (solo)"
role-specific: "Web App · AI Content Generation"
team: "Solo development"
platforms: "Web"
date: "Jun 2026 - Present"
order: 4
---

# Overview

## In a Filipino seller's voice, fast

Online sellers in the Philippines post almost every day to Facebook Marketplace, TikTok Shop, and live selling. But when they actually use a global AI writing tool, it produces "grammatically correct English" without capturing **the voice** that local regulars respond to. Filipino sellers actually write in **Taglish**, a mix of English and Tagalog, layered with emojis and a seller's own distinctive voice.

**BentaAI** is a tool that creates marketing posts (captions · hashtags · CTAs) *in that local voice* in just a few minutes. The name Benta means "to sell" in Tagalog. It's a remake of a caption generator originally built in Korea, rebuilt for the Philippine market.

# What it does for you

- **Copy in the local voice** — Choose from English · Taglish · Tagalog, and it creates captions · hashtags · CTAs with emojis and in the voice that local sellers actually use.
- **Platform-specific formats** — It adapts to the different formats of each channel, like Facebook · Marketplace, TikTok Shop, Instagram, and live selling (teasers · recaps).
- **Local sale calendar** — It reflects the right timing, including paydays (the 15th and 30th), the 9.9–12.12 sales, and the Filipino Christmas season, said to be the longest in the world.
- **Set your brand voice once** — Set up your brand name · product · tone once, and every post afterward comes out consistently in the same voice.

# How to use it

1. Set up your brand once — name, product, voice.
2. Choose your goal (sales · branding · promo) and platform.
3. Generate → refine → post. Captions · hashtags · CTAs appear in just seconds.

It doesn't post to your page automatically. The seller reviews the result and posts it themselves.

# What I focused on most while building it

- I saw the core as the **'local voice'** that global tools fail to capture. A single line of Taglish that regulars respond to works better than grammatically perfect English.
- I made the interface English by default but switchable to Tagalog, so local sellers can use it comfortably.
- I kept the brand's voice intact while taking care **not to infringe on other brands' copyrights**.

# Stack

- **Front**: Next.js (App Router), React, Tailwind CSS, TypeScript
- **AI**: Claude API (Anthropic) — streaming generation
- **Auth · DB**: Supabase (authentication, Postgres)
- **i18n**: English by default · Tagalog switch UI
- **Main screens**: Content generator, brand setup, my content, dashboard

# Now, and next

It's currently open as a **free beta**. I'm in the process of adding more platform formats and content flows, with the goal of cutting down the time sellers spend wondering "what should I post today?"

To try it yourself, go here: **[ai-marketing-taupe.vercel.app](https://ai-marketing-taupe.vercel.app){:target="_blank" rel="noopener"}**
