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

## 공개된 가격 데이터를, 지도 위에서

한국에서 기름 넣을 때면 오피넷을 켜서 근처 주유소 가격을 지도와 리스트로 비교하곤 했다. 제 2의 고향인 필리핀에서도 가격을 한눈에 지도로 볼 수 있으면 편하겠다고 생각한 게 시작이었다.

필리핀에서는 에너지부(DOE, Department of Energy)가 매주 권역별 연료 가격을 "Price Monitoring of Liquid Fuels" 자료로 공개한다. 다만 형식이 PDF이고, 주유소별 실시간 값이 아니라 도시 · 브랜드 단위의 가격 범위라, 일반 사용자가 바로 비교하기엔 조금 번거롭다. 그래서 이 **공개 자료를 지도 위에 얹어, 누구나 더 쉽게 볼 수 있게** 만들어보기로 한 개인 토이 프로젝트다.

화면은 줌을 당기면 도시 · 지자체별 가격 칩이 뜨고, 더 들어가면 주유소 핀(브랜드 뱃지 + DOE 가격 범위)과 하단 상세 시트가 뜨는, 오피넷 스타일의 UX를 목표로 잡았다.

# 까다로웠던 부분

대부분의 난이도는 화면이 아니라 **데이터를 다루는 쪽**에 있었다.

## 1. PDF에서 표 읽어내기

DOE 주간 자료는 7개 권역(NCR, Visayas, Mindanao, South Luzon의 IV-A/IV-B/V, 그리고 North Luzon)으로 나뉘어 있다. North Luzon 자료는 스캔 이미지 형태라, `tesseract` OCR로 글자 박스를 읽어 좌표 기반으로 표를 다시 구성했다.

`pdfplumber`로 표를 정확히 읽어내기 위해 처리한 것들:

- 두 줄로 쌓인 헤더(OVERALL / RANGE)와 컬럼이 밀리는 현상 → 대시(–) 글리프 위치를 기준점으로 정렬
- province 라벨이 그룹마다 한 번만 표시되는 경우 → 가장 가까운 라벨로 행을 귀속
- 추출 과정에서 지명 글자가 섞이는 경우 → GeoNames 지명 목록과 대조해 보정
- 전체 범위는 위치로 읽지 않고 브랜드별 범위에서 다시 계산

## 2. 주유소가 어디에 있는지

가격표에는 좌표가 없으니 위치는 따로 구해야 했다. OpenStreetMap Overpass로 `amenity=fuel`을 전국에서 받아 약 **10,800개** 주유소를 모으고 브랜드를 분류했다. DOE 권역의 중심 좌표는 오프라인 GeoNames 필리핀 가제티어로 지오코딩하고, 각 주유소는 가장 가까운 권역(≤ 60km)에 붙였다.

## 3. 사용자 제보로 보완하기

DOE 자료는 도시 · 브랜드 단위의 가격 범위라, 특정 주유소의 현재 값까지는 담겨 있지 않다. 그래서 사용자가 직접 본 가격을 제보할 수 있는 **Report 버튼**을 넣었다. 최근(7일 이내) 제보가 있으면 참고용으로 함께 보여주고, 이상치는 걸러낸다.

# 가격을 고르는 순서

한 주유소의 가격은 가진 데이터 중 가장 구체적인 것부터 골라 보여준다.

1. 도시 · 지자체 × 브랜드 범위 (DOE)
2. 권역 전체 범위
3. 도(province) 전체 브랜드 범위
4. 전국 브랜드 범위

그리고 하단 시트에 **값의 출처 레벨과 기준 주차**를 함께 표시해, 사용자가 어떤 데이터를 보고 있는지 확인할 수 있게 했다.

# 매주, 알아서 갱신되도록

데이터가 주 단위로 바뀌니 갱신도 자동이어야 했다. 매주 정해진 시간에 예약 작업이 돌면서 최신 자료를 가져와 데이터 파일을 다시 빌드하고, 그 결과가 배포로 이어지도록 구성했다.

이 갱신 작업은 GitHub Actions 대신 로컬 환경에서 예약 실행되도록 구성했다.

# Stack

- **Front**: Next.js 15 (App Router), React 19, TypeScript
- **Map**: MapLibre GL
- **Data pipeline**: Python — `pdfplumber`, `tesseract` OCR, Overpass, GeoNames
- **Storage**: Supabase
- **그 외**: Sentry(에러 추적), web-push(가격 알림), Vercel Analytics, GSAP
- **주요 화면**: 지역별 가격 페이지, 연료별 최저가, 권역별 가격 추이, 요약 뷰

# 아직 남은 것들

- OCR로 읽은 North Luzon 일부 지역명이 인접 지역으로 잘못 매칭될 수 있다. (가격 행 자체는 정확)
- 제보 데이터의 검수와 남용 방지 장치를 계속 보강하고 있다.
- 일부 권역은 좌표를 못 찾아 지도에서 제외됐다.

다음 목표는 리스트 뷰, 즐겨찾기, 가격 알림, 제보 검수 / 이상치 필터, 그리고 정식 배포다.

직접 둘러보려면 여기에서: **[oil-price-sigma.vercel.app](https://oil-price-sigma.vercel.app)**
