---
layout: post
author: "JINHO SON"
title:  "Tax Assistant PH"
subtitle: "A tax-filing prep helper for freelancers in the Philippines"
description: "Tax Assistant PH helps Filipino freelancers prepare their tax filing — a prep aid, not official tax advice. A side project by JINHO SON."
type: "Side Project"
projects: true
text: true
portfolio: true
post-header: true
header-img: "https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?auto=format&fit=crop&w=1600&q=80"
role-title: "Planning · Design · Development (solo)"
role-specific: "Web App · Tax Calculation · Filing Prep"
team: "Solo development"
platforms: "Web"
date: "Mar 2026 - Present"
order: 8
---

# Overview

## Complicated tax-filing prep, all in one place

When you work as a freelancer or sole proprietor in the Philippines, you have to handle your own BIR (Bureau of Internal Revenue) tax filing—and keeping up with everything on your own, from choosing a taxation method to quarterly deadlines and filing forms, is no easy task.

**Tax Assistant PH** is a tool that helps freelancers and self-employed individuals organize their day-to-day tax tasks and prepare their filings.

> This tool is a **support tool** that helps with tax calculations, and it is not official tax advice. The final filing and review are up to you or a tax professional (CPA).

# What it does for you

- **Tax calculator** — Shows the 8% flat rate and the graduated rate, the two taxation methods, side by side for comparison. (For reference.)
- **Income · expense tracking** — Records income and expenses along with receipt numbers, and converts foreign-currency income into pesos to keep it organized.
- **BIR deadline calendar** — Automatically surfaces quarterly and annual filing deadlines, and, if you like, sends you an email reminder in advance.
- **Filing form helper** — Walks you through commonly used BIR filing forms step by step, fills in a draft with your recorded data, and lets you download it as a PDF.
- **Reports** — Lets you generate a quarterly profit-and-loss summary, a CSV, and a quarterly PDF for submission to a professional.

# What I focused on most while building it

- **Something you can follow on your own** — I kept the flow as simple as possible so that even people unfamiliar with tax terms and procedures can follow along step by step and prepare.
- **Not missing things** — Since the most common difficulty is "missing a deadline," I paid special attention to deadline reminders.
- **"Organizing," not "judging"** — Rather than declaring what's correct, it gathers the necessary information and presents it for comparison, leaving the choice to the user (or a professional).

# Stack

- **Front**: Next.js (App Router), React, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Supabase (Postgres + Auth + Storage)
- **Email**: Brevo (deadline reminders)
- **Documents**: PDF generation (jsPDF)
- **Other**: Forms · validation (react-hook-form, zod), charts (recharts)
- **Key screens**: Tax calculator, income/expense tracking, deadline calendar, filing form helper, reports

# Now, and what's next

I'm refining it with the goal of cutting down the time freelancers spend preparing their tax filings.

To take a look for yourself, head here: **[t-assist-seven.vercel.app](https://t-assist-seven.vercel.app){:target="_blank" rel="noopener"}**
