---
layout: post
author: "JINHO SON"
title:  "Bayni"
subtitle: "Safe secondhand trading with the neighbors right around you"
type: "Side Project"
projects: true
text: true
portfolio: true
post-header: true
header-img: "https://images.unsplash.com/photo-1513125370-3460ebe3401b?auto=format&fit=crop&w=1600&q=80"
role-title: "Planning · Design · Development · Launch (solo)"
role-specific: "Mobile app · Backend · AI features"
team: "Solo development"
platforms: "iOS (Android coming soon)"
date: "May 2026 - Present"
order: 3
---

# Overview

## Safely, with the people in your own neighborhood

In the Philippines, there's a local market culture called the "palengke." True to that name, **Bayni** isn't a nationwide marketplace far from where you live — it's a neighborhood secondhand app for **buying and selling used goods with the neighbors around you**. The name Bayni comes from "Bayan (community) + Niyo (your)" — *your neighborhood, your market*.

What people care about most in secondhand trading, in the end, is "safety" and "trust." So from the very beginning, Bayni set out to create an experience where you can trade *with nearby neighbors, in a way you can rely on*.

# What you can do

- **Listings near you** — Shows listings from nearby neighborhoods first, based on your location. Instead of wandering through nationwide listings, you can focus on items close enough that you can meet up right now.
- **AI safety check** — Helps you take another look at a listing before a deal, so you can trade with peace of mind.
- **Real-time chat** — Talk to the seller directly, decide where and when to meet, and see the item in person before trading.
- **Price reference helper** — When you're not sure how much to list something for, it suggests a price range you can use as a reference.
- **Personalized feed · neighborhood board** — Shows listings that match your interests, alongside a community space for sharing local news.

# Safety and trust first

This is the part Bayni put the most care into.

- **Meet in person, check, then trade** — Guides you to meet in a public place, see the item in person, and then make the deal.
- **Trust score (Suki Score)** — Reviews and ratings build up after deals to show a seller's trustworthiness. ("Suki" means a regular customer.)
- **Reporting** — If something feels off, you can report it right away.
- **Privacy first** — Your exact GPS location is never shared. Other users only see your neighborhood (barangay) and city name.

# What I thought about most while building it

Rather than packing in lots of features, I kept holding on to one question: **"How can trading with a stranger feel less anxious?"**

- I saw that **narrowing the scope to 'my own neighborhood'** rather than the whole country is itself the starting point for trust.
- I felt safety measures only matter if users can see them **at a glance, before a deal**.
- Since this is a location-based service, I made it a principle to keep **privacy as the default**.

# Stack

- **App**: React Native · Expo (Expo Router), TypeScript
- **State · data**: TanStack Query, Zustand
- **Maps · location**: React Native Maps, radius-based location search (PostGIS)
- **Backend**: Supabase — authentication (Google · Apple · OTP), Postgres, Storage, Realtime
- **AI**: listing review · price recommendation · recommended feed, and more (handled on the server)
- **Other**: push notifications, geocoding
- **Platform**: iOS (Android coming soon)

# Now, and next

I launched on iOS first, and an Android version is in the works. Going forward, I plan to keep refining a trading experience that's **safer and more neighborly**.

You can find more on the official website at **[bayni.app](https://bayni.app){:target="_blank" rel="noopener"}**.
