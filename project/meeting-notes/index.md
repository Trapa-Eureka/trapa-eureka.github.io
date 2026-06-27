---
layout: post
author: "JINHO SON"
title:  "MeetingNotes"
subtitle: "회의록을 붙여넣으면, 결정과 할 일이 정리된다"
type: "Side Project"
projects: true
text: true
portfolio: true
post-header: true
header-img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80"
role-title: "기획 · 디자인 · 개발 (1인)"
role-specific: "웹 앱 · AI 요약/추출"
team: "1인 개발"
platforms: "Web (PWA)"
date: "Jun 2026 - Present"
order: 5
---

# Overview

## 회의는 끝났는데, 할 일은 어디에?

회의가 끝나고 나면 "누가, 무엇을, 언제까지" 하기로 했는지가 메모 어딘가에 흩어져 흐지부지되기 쉽다. 정작 중요한 건 회의 그 자체가 아니라 **끝나고 남는 할 일**인데 말이다.

**MeetingNotes**는 회의록(또는 전사한 내용)을 붙여넣기만 하면, AI가 **결정사항 · 담당자 · 마감일**을 자동으로 뽑아 깔끔한 할 일 목록으로 정리해 준다. 몇 초면 된다.

# 무엇을 해주나

- **붙여넣으면 끝** — 회의록이나 전사 내용을 그대로 붙여넣거나, .docx · .pdf · .txt 파일을 올리면 된다. 형식은 가리지 않는다.
- **결정 · 담당 · 마감 자동 정리** — 회의 내용에서 무엇이 정해졌고, 누가 맡고, 언제까지인지를 뽑아 한눈에 정리해 준다.
- **회의 유형에 맞춘 요약** — 회의 성격을 고르면 그에 맞게 요약의 결을 맞춰 준다.
- **묶고 · 내보내기** — 클라이언트 / 프로젝트별로 노트를 묶어 두고, 마크다운으로 복사하거나 CSV로 내려받아 쓰던 도구로 바로 가져갈 수 있다.
- **진행 체크** — 정리된 할 일을 완료 / 미완료로 표시하며 챙길 수 있다.

# 어떻게 쓰나

1. 회의록을 붙여넣거나 파일을 올린다.
2. (선택) 회의 유형과 클라이언트 / 프로젝트를 정한다.
3. "할 일 추출" — 결정사항과 할 일이 담당자 · 마감일과 함께 정리되어 나온다.

# 만들면서 가장 신경 쓴 것

- 회의용 도구는 많지만, 정작 끝나고 남는 **"그래서 뭘 해야 하지"**를 자동으로 챙겨주는 흐름에 집중했다.
- 쓰던 메모를 그대로 넣을 수 있도록, **입력 형식을 가리지 않는 것**을 우선했다.
- 결과를 마크다운 · CSV로 바로 빼낼 수 있게 해서, 다른 도구로 옮길 때의 마찰을 줄였다.

# Stack

- **Front**: Next.js (App Router), React, Tailwind CSS, TypeScript, PWA
- **AI**: Claude API (Anthropic) — 회의록에서 결정 · 담당 · 마감 추출
- **Auth · DB**: Supabase (인증, Postgres)
- **문서 입출력**: .docx · .pdf · .txt 가져오기, 마크다운 · CSV 내보내기
- **주요 화면**: 노트 입력 → 할 일 추출, 클라이언트 / 프로젝트별 정리, 진행 체크

# 지금, 그리고 다음

회의 후 정리에 드는 시간을 줄이는 걸 목표로, 더 매끄러운 흐름으로 다듬어 가는 중이다.

직접 써보려면 여기에서: **[meeting-notes-lemon-two.vercel.app](https://meeting-notes-lemon-two.vercel.app)**
