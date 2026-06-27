---
layout: post
author: "JINHO SON"
title:  "Lite Payroll PH"
subtitle: "필리핀 중소기업을 위한 가벼운 급여 관리"
type: "Side Project"
projects: true
text: true
portfolio: true
post-header: true
header-img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1600&q=80"
role-title: "기획 · 디자인 · 개발 (1인)"
role-specific: "웹 앱 · 급여 자동 계산"
team: "1인 개발"
platforms: "Web"
date: "Mar 2026 - Present"
order: 7
---

# Overview

## 매달 돌아오는 급여 계산, 자동으로

필리핀의 중소기업은 매달 직원 급여를 줄 때 SSS · PhilHealth · Pag-IBIG · 소득세(BIR) 같은 법정 공제를 일일이 계산해야 한다. 요율 표가 자주 바뀌고 직원이 늘수록 Excel로 관리하기엔 실수가 잦고 시간도 오래 걸린다.

**Lite Payroll PH**는 이 반복 계산을 클라우드에서 자동으로 처리해, 회계 담당자를 따로 두기 어려운 소규모 사업주가 급여 업무에 드는 시간과 실수를 줄이도록 돕는 도구다.

> 이 도구는 급여 계산을 **돕는 용도**이며, 전문 세무 · 회계 자문을 대체하지 않는다. 최종 신고 · 납부의 책임은 사용자에게 있다.

# 무엇을 해주나

- **법정 공제 자동 계산** — 적용 중인 요율표를 기준으로 SSS · PhilHealth · Pag-IBIG · 원천세를 자동으로 계산한다. (요율이 바뀌면 사용자가 확인하는 것을 권장)
- **급여 주기(Pay Run) 관리** — 급여 기간별로 한 번에 생성하고, 검토한 뒤 확정하는 흐름으로 정리한다.
- **급여명세서** — PDF로 내려받거나 직원 이메일로 바로 보낼 수 있다.
- **정부 제출 양식** — 자주 쓰는 표준 제출 양식을 자동으로 만들어 준다.
- **직원 관리** — 직원 등록 · 수정, CSV 일괄 등록, 개인별 급여 이력 조회.
- **권한 분리 · 리포트** — 소유자 / 관리자 / 뷰어로 권한을 나누고, 월별 · 누계 리포트를 내려받는다.

# 만들면서 가장 신경 쓴 것

- **정확함에 가장 신경 썼다** — 한 칸만 틀려도 신고가 어긋나는 영역이라, 계산 로직과 검토 흐름(생성 → 검토 → 확정)에 가장 공을 들였다. 최종 수치는 사용자가 검토하고 확정한다.
- **작은 사업체의 현실** — 회계사를 둘 여력이 없는 5~수십 명 규모를 기준으로, 설치 없이 웹에서 바로 쓰도록 가볍게 만들었다.
- **민감정보 보호** — 직원의 정부 ID 같은 민감정보는 암호화해 보관하고, 접근 권한을 분리했다.

# Stack

- **Front**: Next.js (App Router), React, TypeScript, Tailwind CSS, Radix UI
- **Backend**: Supabase (Postgres + 인증 + RLS)
- **이메일**: Brevo (급여명세서 발송)
- **문서**: PDF 생성(@react-pdf/renderer), Excel(xlsx)
- **그 외**: 요청 제한(Upstash), 폼 · 검증(react-hook-form, zod)
- **주요 화면**: 직원 관리, 급여 주기(Pay Run), 급여명세서, 정부 양식, 리포트

# 지금, 그리고 다음

작은 사업체가 급여 계산에 쏟는 시간을 줄이는 걸 목표로 다듬어 가는 중이다.

직접 둘러보려면 여기에서: **[t-assist-bfh6.vercel.app](https://t-assist-bfh6.vercel.app){:target="_blank" rel="noopener"}**
