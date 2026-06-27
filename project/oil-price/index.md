---
layout: post
author: "JINHO SON"
title:  "PH Fuel Watch"
subtitle: "Fuel prices at gas stations across the Philippines, all on a single map"
type: "Side Project"
projects: true
text: true
portfolio: true
post-header: true
header-img: "https://images.unsplash.com/photo-1573108724029-4c46571d6490?auto=format&fit=crop&w=1600&q=80"
role-title: "Planning · Development · Deployment (solo)"
role-specific: "Next.js, TypeScript, MapLibre GL, Python"
team: "Solo development"
platforms: "Web (PWA)"
date: "Jun 2026 - Present"
order: 2
---

# Overview

## Putting public price data on a map

Back in Korea, whenever I filled up I would open Opinet to compare nearby gas station prices on a map and in a list. The project started when I thought it would be handy to see prices on a map at a glance in the Philippines too, my second home.

In the Philippines, the Department of Energy (DOE) publishes weekly fuel prices by region as the "Price Monitoring of Liquid Fuels" report. The catch is that it comes as a PDF, and rather than real-time per-station values it gives price ranges at the city · brand level, which makes it a bit cumbersome for an everyday user to compare directly. So this is a personal toy project where I set out to **put that public data on a map so anyone can see it more easily**.

For the screen, I aimed for an Opinet-style UX: zoom out and you get price chips by city · municipality, zoom in further and station pins appear (a brand badge + the DOE price range) along with a detail sheet at the bottom.

# The tricky parts

Most of the difficulty wasn't in the screen but on the **data-handling side**.

## 1. Reading tables out of PDFs

The weekly DOE report is split into 7 regions (NCR, Visayas, Mindanao, IV-A/IV-B/V in South Luzon, and North Luzon). The North Luzon report comes as a scanned image, so I used `tesseract` OCR to read the character boxes and reconstructed the table from their coordinates.

Things I handled to read the tables accurately with `pdfplumber`:

- Two-line stacked headers (OVERALL / RANGE) and columns drifting out of alignment → aligned using the position of the dash (–) glyph as a reference point
- Province labels shown only once per group → assigned each row to the nearest label
- Place-name characters getting mixed up during extraction → corrected against the GeoNames place-name list
- The overall range read not by position but recalculated from the per-brand ranges

## 2. Where the gas stations are

The price tables have no coordinates, so locations had to be obtained separately. I pulled `amenity=fuel` from across the country via OpenStreetMap Overpass, gathering about **10,800** gas stations and classifying them by brand. I geocoded the center coordinates of the DOE regions using the offline GeoNames Philippines gazetteer, and attached each station to its nearest region (≤ 60km).

## 3. Filling in the gaps with user reports

The DOE data is price ranges at the city · brand level, so it doesn't include the current value for a specific station. That's why I added a **Report button** that lets users submit prices they've seen themselves. If there's a recent report (within 7 days), it's shown alongside for reference, and outliers are filtered out.

# The order for picking a price

For a given station, the price is shown by picking the most specific data available.

1. City · municipality × brand range (DOE)
2. Region-wide range
3. Province-wide brand range
4. Nationwide brand range

And the bottom sheet also shows **the source level of the value and the reference week**, so users can confirm which data they're looking at.

# Updating itself every week

Since the data changes weekly, the updates had to be automatic too. I set it up so a scheduled job runs at a set time each week, fetches the latest report, rebuilds the data files, and feeds that result into deployment.

This update job is configured to run on a schedule in a local environment instead of GitHub Actions.

# Stack

- **Front**: Next.js 15 (App Router), React 19, TypeScript
- **Map**: MapLibre GL
- **Data pipeline**: Python — `pdfplumber`, `tesseract` OCR, Overpass, GeoNames
- **Storage**: Supabase
- **Others**: Sentry (error tracking), web-push (price alerts), Vercel Analytics, GSAP
- **Key screens**: prices by region page, lowest price by fuel, regional price trends, summary view

# What's still left

- Some place names in North Luzon read via OCR may be mismatched to a neighboring area. (The price rows themselves are accurate.)
- I'm continuing to strengthen the review of report data and the safeguards against abuse.
- Some regions were excluded from the map because their coordinates couldn't be found.

Next up are a list view, favorites, price alerts, report review / outlier filtering, and an official release.

To take a look for yourself, head over here: **[oil-price-sigma.vercel.app](https://oil-price-sigma.vercel.app){:target="_blank" rel="noopener"}**
