---
layout: post
author: "JINHO SON"
title:  "Trabuild"
subtitle: "From quote to final payment — one tool for small repair & construction pros in the Philippines"
description: "Trabuild is one tool for small repair and construction pros in the Philippines — from quote to progress photos to payment record. A side project by JINHO SON."
type: "Side Project"
projects: true
text: true
portfolio: true
post-header: true
header-img: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=1600&q=80"
role-title: "Planning · Design · Development (solo)"
role-specific: "Web App · Contractor Tool"
team: "Solo development"
platforms: "Web"
date: "Jun 2026 - Present"
order: 10
---

# Overview

## It all lives in one Messenger thread — until it doesn't

I can't speak for the big companies in the Philippines, but watching solo repair and construction workers — and people offering services on their own — I kept seeing the same thing: the whole job runs through a single Messenger thread. Quotes, approvals, payments, all tangled together. And sooner or later that leads to misunderstandings down the line — "How much was it again?" or "Wait, that part's extra."

So I built **Trabuild**. The worker just sends the customer one link, and they can see everything: **quotation → approval → progress photos → payment record**. It doesn't handle the money for you — it's there to help you keep a clear record and proof. Right now it's a **free beta**.

It starts with repair and construction, but really, anyone who quotes per job — freelancers included — should be able to use it. (The name comes from "trabaho," Tagalog for *work*, plus "build.")

# What it does

- **One customer share link** — A single read-only link with the quote, progress photos, and remaining balance that opens anywhere, including Messenger, where most customers already are.
- **Quotations** — Build a quote with line items and live totals; the customer approves it online (a typed name works as a lightweight confirmation), and you can download it as a PDF.
- **Progress updates** — Post dated updates with photos, and choose what each customer can and can't see.
- **Payment ledger** — Record downpayments, partial payments, and balances (GCash, Maya, Cash, Bank) and see at a glance what's still owed. *(It records payments for your own tracking — it doesn't process or hold any money.)*
- **Extra-work requests** — Customers can request add-ons from the share page, and you accept or decline — so changes are agreed in writing instead of lost in a chat.
- **Material costs & maintenance reminders** — Track spending per job, and set recurring follow-ups (like a quarterly aircon cleaning) to bring repeat customers back.

# What I cared about most while building it

- **Fewer misunderstandings** — Keeping the approval, the photos, and the payment record together in one place means there's always something clear to point back to.
- **Built for how they already work** — Filipino pros practically live on Messenger, so everything centers on one share link the customer can open without installing anything. English by default, with a Tagalog toggle.
- **Lean on purpose** — I left out the heavy stuff and kept it to the essentials a one-person business actually needs day to day.

# Stack

- **Front**: Next.js (App Router), React, TypeScript, Tailwind CSS
- **Backend**: Supabase (Auth · Postgres · Storage)
- **Documents**: PDF generation (@react-pdf/renderer) for quotations
- **i18n**: English by default · Tagalog toggle
- **Key screens**: owner dashboard, project hub (quote · progress photos · payment ledger · material costs · reminders), read-only customer share page

# Now, and next

It's still early, so it needs real-world testing. I'll be gathering feedback from people actually using it and updating as I go.

You can try it here: **[built-ph.vercel.app](https://built-ph.vercel.app){:target="_blank" rel="noopener"}**
