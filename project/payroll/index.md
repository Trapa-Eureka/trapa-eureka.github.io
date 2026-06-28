---
layout: post
author: "JINHO SON"
title:  "Lite Payroll PH"
subtitle: "Lightweight payroll management for small and mid-sized businesses in the Philippines"
description: "Lite Payroll PH is lightweight payroll for small and mid-sized businesses in the Philippines — a prep helper, not professional accounting advice."
type: "Side Project"
projects: true
text: true
portfolio: true
post-header: true
header-img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1600&q=80"
role-title: "Planning · Design · Development (solo)"
role-specific: "Web app · Automated payroll calculation"
team: "Solo development"
platforms: "Web"
date: "Mar 2026 - Present"
order: 7
---

# Overview

## Payroll calculation comes around every month — automated

Every month, small and mid-sized businesses in the Philippines have to calculate statutory deductions like SSS, PhilHealth, Pag-IBIG, and income tax (BIR) one by one when paying their employees. The rate tables change often, and the more employees there are, the more error-prone and time-consuming it becomes to manage in Excel.

**Lite Payroll PH** handles these repetitive calculations automatically in the cloud, helping small business owners who can't afford a dedicated accountant reduce the time and mistakes involved in payroll work.

> This tool is meant to **help** with payroll calculation and is not a substitute for professional tax or accounting advice. Responsibility for final filing and payment rests with the user.

# What it does for you

- **Automatic statutory deduction calculation** — It automatically calculates SSS, PhilHealth, Pag-IBIG, and withholding tax based on the rate tables currently in effect. (When rates change, users are advised to verify.)
- **Pay Run management** — It organizes everything into a flow where you generate each pay period at once, review it, and then finalize.
- **Payslips** — Download them as PDF or send them directly to employees' email.
- **Government submission forms** — It automatically generates the standard submission forms that are used often.
- **Employee management** — Register and edit employees, bulk-register via CSV, and view individual payroll history.
- **Permission separation · reports** — Split permissions into owner / admin / viewer, and download monthly and cumulative reports.

# What I focused on most while building it

- **I focused most on accuracy** — In an area where even a single field being off can throw a filing out of line, I put the most effort into the calculation logic and the review flow (generate → review → finalize). The user reviews and finalizes the final figures.
- **The reality of small businesses** — Built for the scale of 5 to a few dozen people who can't afford to keep an accountant, I kept it lightweight so it can be used right in the browser without any installation.
- **Protecting sensitive information** — Sensitive information such as employees' government IDs is stored encrypted, and access permissions are kept separate.

# Stack

- **Front**: Next.js (App Router), React, TypeScript, Tailwind CSS, Radix UI
- **Backend**: Supabase (Postgres + authentication + RLS)
- **Email**: Brevo (sending payslips)
- **Documents**: PDF generation (@react-pdf/renderer), Excel (xlsx)
- **Other**: rate limiting (Upstash), forms · validation (react-hook-form, zod)
- **Main screens**: employee management, Pay Run, payslips, government forms, reports

# Now, and what's next

I'm refining it with the goal of reducing the time small businesses spend on payroll calculation.

To take a look for yourself, head here: **[t-assist-bfh6.vercel.app](https://t-assist-bfh6.vercel.app){:target="_blank" rel="noopener"}**
