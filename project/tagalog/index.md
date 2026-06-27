---
layout: post
author: "JINHO SON"
title:  "Salita PH"
subtitle: "필리핀어(타갈로그)를 매일 조금씩, 재미있게"
type: "Side Project"
projects: true
text: true
portfolio: true
post-header: true
header-img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80"
role-title: "기획 · 디자인 · 개발 (1인)"
role-specific: "모바일 앱 · 언어 학습"
team: "1인 개발"
platforms: "iOS"
date: "2026 - Present"
order: 9
---

# Overview

## 필리핀어를, 매일 조금씩

필리핀에서 지내다 보면 영어만으로도 웬만큼 통하지만, 현지 사람들과 한 걸음 더 가까워지는 건 결국 그들의 언어 — 타갈로그(필리핀어)다. 그런데 막상 배우려고 하면 한국어를 쓰는 사람이 꾸준히 따라갈 만한 앱을 찾기가 어려웠다.

**Salita PH**는 그래서 만든 필리핀어 학습 앱이다. ("Salita"는 타갈로그로 "말 · 단어"라는 뜻.) 매일 조금씩 듣고, 말하고, 써 보며 자연스럽게 익히도록 돕는 게 목표다.

# 무엇을 할 수 있나

- **단계별 레슨** — 유닛으로 나뉜 레슨을 따라가며 표현과 문장을 차근차근 익힌다.
- **대화 롤플레이** — 주문하기 · 길 묻기처럼 실제 상황을 가정한 대화로 연습한다.
- **발음 연습** — 직접 말해 보고 점수와 피드백을 받아, 어느 부분을 더 다듬을지 알 수 있다.
- **표현 복습** — 배운 표현을 잊을 때쯤 다시 꺼내 복습하도록 챙겨준다.
- **쓰기 연습** — 듣고 받아쓰거나 직접 작문하며 손에 익힌다.
- **스킬 그래프** — 무엇을 익혔고 무엇이 남았는지 한눈에 보여준다.

# 만들면서 가장 신경 쓴 것

- **꾸준함이 핵심** — 언어는 '매일 조금씩'이 거의 전부라, 일일 목표 · 연속 학습 · 주간 리더보드처럼 다시 열고 싶게 만드는 장치에 공을 들였다.
- **눈으로만 끝내지 않게** — 읽기만 하면 입이 안 떨어진다. 듣기 · 발음 · 대화까지 한 앱 안에서 자연스럽게 이어지도록 했다.
- **부담 없이** — 하루 몇 분이면 되도록, 화면과 흐름을 가볍고 단순하게 유지했다.

# Stack

- **App**: React Native · Expo (Expo Router), TypeScript
- **스타일**: NativeWind (Tailwind), Reanimated(애니메이션)
- **상태 · 데이터**: Zustand, TanStack Query
- **Backend**: Supabase (인증 · 데이터)
- **오디오 · 음성**: expo-av, expo-speech (듣기 · 발음)
- **그 외**: 푸시 알림(학습 리마인더), 분석(PostHog), 에러 추적(Sentry)
- **주요 화면**: 레슨, 대화 롤플레이, 발음 연습, 표현 복습, 쓰기, 스킬 그래프

# 지금, 그리고 다음

매일 열고 싶은, 부담 없는 필리핀어 학습 경험을 목표로 다듬어 가는 중이다.

App Store에서 만나볼 수 있어요: **[Salita — Learn Tagalog](https://apps.apple.com/ph/app/salita-learn-tagalog/id6763545384){:target="_blank" rel="noopener"}**
