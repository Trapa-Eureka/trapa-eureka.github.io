---
layout: post
author: "JINHO SON"
title:  "Tax Assistant PH"
subtitle: "필리핀 프리랜서를 위한 세금 신고 준비 도우미"
type: "Side Project"
projects: true
text: true
portfolio: true
post-header: true
header-img: "https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?auto=format&fit=crop&w=1600&q=80"
role-title: "기획 · 디자인 · 개발 (1인)"
role-specific: "웹 앱 · 세금 계산 · 신고 준비"
team: "1인 개발"
platforms: "Web"
date: "Mar 2026 - Present"
order: 8
---

# Overview

## 복잡한 세금 신고 준비, 한곳에서

필리핀에서 프리랜서나 1인 사업자로 일하면 BIR(국세청) 세금 신고를 스스로 챙겨야 하는데, 과세 방식 선택부터 분기별 마감일, 신고 서식까지 혼자 따라가기가 만만치 않다.

**Tax Assistant PH**는 프리랜서 · 자영업자가 일상적인 세금 업무를 정리하고 신고를 준비하도록 돕는 도구다.

> 이 도구는 세금 계산을 **돕는 보조 도구**이며, 공식 세무 자문이 아니다. 최종 신고와 검토는 본인 또는 세무 전문가(CPA)의 몫이다.

# 무엇을 해주나

- **세금 계산기** — 8% 단일세율과 누진세, 두 과세 방식을 나란히 비교해 보여준다. (참고용)
- **소득 · 지출 기록** — 영수증 번호와 함께 소득 · 지출을 기록하고, 외화 수입은 페소로 환산해 정리한다.
- **BIR 마감일 캘린더** — 분기 · 연간 신고 마감일을 자동으로 띄우고, 원하면 이메일로 미리 알려준다.
- **신고 서식 도우미** — 자주 쓰는 BIR 신고 양식을 단계별로 안내하고, 기록한 데이터로 초안을 채워 PDF로 내려받을 수 있다.
- **리포트** — 분기별 손익 요약과 CSV, 그리고 전문가 제출용 분기 PDF를 만들 수 있다.

# 만들면서 가장 신경 쓴 것

- **혼자서도 따라갈 수 있게** — 세금 용어와 절차가 낯선 사람도 단계별로 따라가며 준비하도록, 흐름을 최대한 단순하게 만들었다.
- **놓치지 않게** — 가장 흔한 어려움이 '마감일을 놓치는 것'이라, 마감 알림에 특히 신경 썼다.
- **"판단"이 아니라 "정리"** — 무엇이 옳다고 단정해 주는 게 아니라, 필요한 정보를 모아 비교해 보여주고 선택은 사용자(또는 전문가)가 하도록 했다.

# Stack

- **Front**: Next.js (App Router), React, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Supabase (Postgres + 인증 + Storage)
- **이메일**: Brevo (마감 알림)
- **문서**: PDF 생성(jsPDF)
- **그 외**: 폼 · 검증(react-hook-form, zod), 차트(recharts)
- **주요 화면**: 세금 계산기, 소득/지출 기록, 마감일 캘린더, 신고 서식 도우미, 리포트

# 지금, 그리고 다음

프리랜서가 세금 신고 준비에 쏟는 시간을 줄이는 걸 목표로 다듬어 가는 중이다.

직접 둘러보려면 여기에서: **[t-assist-seven.vercel.app](https://t-assist-seven.vercel.app){:target="_blank" rel="noopener"}**
