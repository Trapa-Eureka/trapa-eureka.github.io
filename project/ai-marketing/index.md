---
layout: post
author: "JINHO SON"
title:  "BentaAI"
subtitle: "필리핀 셀러를 위한, 현지 말투 그대로의 마케팅 카피"
type: "Side Project"
projects: true
text: true
portfolio: true
post-header: true
header-img: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=1600&q=80"
role-title: "기획 · 디자인 · 개발 (1인)"
role-specific: "웹 앱 · AI 콘텐츠 생성"
team: "1인 개발"
platforms: "Web"
date: "Jun 2026 - Present"
order: 4
---

# Overview

## 필리핀 셀러의 말투로, 빠르게

필리핀의 온라인 셀러들은 Facebook Marketplace, TikTok Shop, 라이브셀링에 거의 매일 글을 올린다. 그런데 막상 글로벌 AI 글쓰기 도구를 쓰면 "문법적으로 맞는 영어"는 나와도, 현지 단골들이 반응하는 **그 말투**는 잘 안 나온다. 필리핀 셀러들은 실제로는 영어와 타갈로그를 섞은 **Taglish**에 이모지, 셀러 특유의 말투를 얹어서 글을 쓴다.

**BentaAI**는 바로 그 *현지 말투 그대로* 마케팅 글(캡션 · 해시태그 · CTA)을 몇 분 만에 만들어 주는 도구다. 이름 Benta는 타갈로그로 "팔다(sell)"라는 뜻. 원래 한국에서 만들었던 캡션 생성기를, 필리핀 시장에 맞게 다시 만든 것이다.

# 무엇을 해주나

- **현지 말투 카피** — 영어 · Taglish · 타갈로그 중에서 골라, 이모지와 현지 셀러들이 실제로 쓰는 말투로 캡션 · 해시태그 · CTA를 만들어 준다.
- **플랫폼별 형식** — Facebook · Marketplace, TikTok Shop, Instagram, 라이브셀링(예고 · 요약)처럼 채널마다 다른 형식에 맞춰 준다.
- **현지 세일 캘린더** — 페이데이(15 · 30일), 9.9–12.12 세일, 그리고 세계에서 가장 길다는 필리핀 크리스마스 시즌까지 때에 맞춰 반영해 준다.
- **브랜드 보이스 한 번만** — 브랜드 이름 · 상품 · 톤을 한 번 설정해 두면, 이후 모든 글이 같은 보이스로 일관되게 나온다.

# 어떻게 쓰나

1. 브랜드를 한 번 설정한다 — 이름, 상품, 말투.
2. 목적(판매 · 브랜딩 · 프로모)과 플랫폼을 고른다.
3. 생성 → 다듬기 → 게시. 캡션 · 해시태그 · CTA가 몇 초 만에 나온다.

자동으로 페이지에 올려주는 건 아니다. 결과를 보고 셀러가 직접 게시한다.

# 만들면서 가장 신경 쓴 것

- 핵심은 글로벌 도구가 잘 못 잡는 **'현지 말투'**라고 봤다. 문법적으로 완벽한 영어보다, 단골이 반응하는 Taglish 한 줄이 더 잘 통한다.
- 인터페이스는 영어를 기본으로 하되 타갈로그로 전환할 수 있게 해서, 현지 셀러가 부담 없이 쓰도록 했다.
- 브랜드의 보이스는 지키되, **다른 브랜드의 저작권은 침해하지 않도록** 신경 썼다.

# Stack

- **Front**: Next.js (App Router), React, Tailwind CSS, TypeScript
- **AI**: Claude API (Anthropic) — 스트리밍 생성
- **Auth · DB**: Supabase (인증, Postgres)
- **i18n**: 영어 기본 · 타갈로그 전환 UI
- **주요 화면**: 콘텐츠 생성기, 브랜드 설정, 내 콘텐츠, 대시보드

# 지금, 그리고 다음

현재 **무료 베타**로 열려 있다. 더 많은 플랫폼 형식과 콘텐츠 흐름을 더해 가는 중이고, 셀러가 "오늘은 뭘 올리지?"로 고민하는 시간을 줄여주는 게 목표다.

직접 써보려면 여기에서: **[ai-marketing-taupe.vercel.app](https://ai-marketing-taupe.vercel.app)**
