---
layout: post
author: "JINHO SON"
title:  "PH Fuel Watch"
subtitle: "필리핀 전국 주유소 가격을 지도 한 장으로"
type: "Side Project"
projects: true
text: true
portfolio: true
post-header: true
header-img: "https://images.unsplash.com/photo-1573108724029-4c46571d6490?auto=format&fit=crop&w=1600&q=80"
role-title: "기획 · 개발 · 배포 (1인)"
role-specific: "Next.js, TypeScript, MapLibre GL, Python"
team: "1인 개발"
platforms: "Web (PWA)"
date: "Jun 2026 - Present"
order: 2
---

# Overview

## 한국엔 오피넷, 필리핀엔?

한국에서 기름 넣을 때면 오피넷을 켜서 근처 주유소 가격을 지도와 리스트로 비교한다. 그런데 제 2의 고향인 필리핀엔 그런 게 없었다.
더 정확히는 **필리핀에는 주유소별 실시간 가격을 제공하는 공식 데이터가 아예 없다.** 대신 에너지부(DOE, Department of Energy)가 매주 한 번 "Price Monitoring of Liquid Fuels"라는 이름의 **PDF**를 권역별로 뿌릴 뿐이다.

그래서 그 PDF들을 긁어다 지도 위에 얹어보기로 했다. 줌을 당기면 도시 · 지자체별 가격 칩이 뜨고, 더 들어가면 주유소 핀(브랜드 뱃지 + DOE 가격 밴드)과 하단 상세 시트가 뜨는, 오피넷 스타일의 UX를 목표로 잡았다.

# Problems

대부분의 난이도는 화면이 아니라 **데이터를 만드는 쪽**에 있었다.

## 1. 출처가 죄다 PDF, 그것도 지저분한 PDF

DOE 주간 PDF는 7개 권역(NCR, Visayas, Mindanao, South Luzon의 IV-A/IV-B/V, 그리고 North Luzon)으로 나뉘어 있고, 하필 North Luzon은 **스캔본**이라 표가 이미지다. 이건 `tesseract` OCR로 글자 박스를 뜯어내 좌표 기반으로 다시 표를 복원했다.

`pdfplumber`로 파싱하는 과정에서 만난 함정들:

- 두 줄로 쌓인 헤더(OVERALL / RANGE)와 컬럼이 밀리는 현상 → 대시(–) 글리프 위치를 기준점으로 잡아 정렬
- province 라벨이 그룹마다 딱 한 번만 찍혀 있음 → 가장 가까운 라벨로 행을 귀속
- 템플릿 잡텍스트가 진짜 지명 위에 겹쳐 찍혀 글자가 깨지는 문제 → GeoNames 후보 지명과 **디인터리빙**해서 복원 (예: `RBooxarasc Cayity` → `Roxas City`)
- 전체 범위(overall range)는 위치로 읽지 않고 브랜드별 밴드에서 다시 계산

## 2. 주유소가 어디에 있는지

가격표에는 좌표가 없으니 위치는 따로 구해야 했다. OpenStreetMap Overpass로 `amenity=fuel`을 전국에서 받아 약 **10,800개** 주유소를 모으고 브랜드를 분류했다. DOE 권역의 중심 좌표는 오프라인 GeoNames 필리핀 가제티어로 지오코딩하고, 각 주유소는 가장 가까운 권역(≤ 60km)에 붙였다.

## 3. 가격이 비면 사람한테 묻는다

PDF는 어디까지나 "도시 × 브랜드"의 가격 밴드(최소~최대)일 뿐, 그 주유소가 지금 얼마인지는 알 수 없다. 그래서 앱 안에 **Report 버튼**을 넣어 사용자가 실제 펌프 가격을 제보하게 했다. 7일 이내의 신선한 제보는 DOE 밴드보다 우선해서 핀과 상세 시트에 노출된다. (이상치 필터와 검증은 기본)

# 가격을 고르는 순서

한 주유소의 가격은 가진 데이터 중 가장 구체적인 것부터 골라 보여준다.

1. 도시 · 지자체 × 브랜드 밴드 (DOE)
2. 권역 전체 범위
3. 도(province) 전체 브랜드 밴드
4. 전국 브랜드 밴드

그리고 하단 시트에는 **지금 보는 값이 몇 번째 레벨의, 몇 주차 데이터인지**를 라벨로 함께 적어준다. 숫자만 던지면 못 믿을 테니까.

# 매주, 알아서 갱신되도록

데이터가 주 단위로 바뀌니 갱신도 자동이어야 했다. 매주 수요일 09:00에 launchd 작업이 돌면서 최신 PDF를 가져오고 → `public/data`를 다시 빌드하고 → 커밋하고 → 푸시한다. 이 푸시가 곧 Vercel 프로덕션 배포 트리거다.

재미있는 건 이걸 **GitHub Actions가 아니라 로컬 맥에서** 돌린다는 점이다. doe.gov.ph 앞단의 Cloudflare가 GitHub 호스티드 러너의 접근을 막아버려서, 어쩔 수 없이 내 컴퓨터가 매주 PDF를 받아오는 당번이 됐다.

# Stack

- **Front**: Next.js 15 (App Router), React 19, TypeScript
- **Map**: MapLibre GL
- **Data pipeline**: Python — `pdfplumber`, `tesseract` OCR, Overpass, GeoNames
- **Storage**: 파일 어댑터(프로토타입) → 배포 시 Supabase
- **그 외**: Sentry(에러 추적), web-push(가격 알림), Vercel Analytics, GSAP
- **주요 화면**: `[fuel]/[area]` SEO 페이지, 연료별 최저가(cheapest), 권역별 가격 추이(history), AI 요약 라우트, 관리자 페이지

# 아직 남은 것들

- OCR로 읽은 North Luzon 일부 도시가 인접 지역으로 오할당될 수 있다. (가격 행 자체는 정확)
- Report API에 인증이 없다. 프로토타입이라 IP당 rate limit만 걸어둔 상태.
- DOE 300개 권역 중 6개는 지오코딩 실패로 제외됐다.

다음 목표는 리스트 뷰, 즐겨찾기, 가격 알림, 제보 모더레이션/이상치 필터, 그리고 정식 배포다. [^1]


[^1]: Link - 프로젝트 링크는 정식 배포 후 업데이트 예정.
