---
layout: post
title:  "TypeScript 개념 (Concept of TS)"
subtitle: "개념적으로 이해해두면 좋은 내용정리"
type: "Learning & Study"
blog: true
text: true
author: "JINHO SON"
post-header: true
header-img: "https://images.unsplash.com/photo-1585076641399-5c06d1b3365f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
order: 4
---

- TypeSCript는 Typed언어 : 초기 설정때 어떤 종류의 변수와 데이터 인지 미리 설정이 필요
- 인터넷에 검색해보면(구글신) tsconfig.json에 추가 할 수 있는 옵션에 관한 문서나 파일이 존재할 것 이므로 찾아볼것
- Node.js는 TS언어를 이해하지 못하기에 일반적인 JS 코드로 컴파일 하는 작업이 필요한데 어떤 버전의 JS로 컴파일 할것인지 설정도 가능
- object를 넘기고 싶을때(return 할때?) : TS가 해당 object를 이해할 수 있게 해야할 것. 해당 object가 올바른 type인지 아닌지도 분별하게끔 해주어야 함(검수하는 코드도?). 그러니까 function에 object를 전달하는데 전달받은 function은 전달받은 object로 그 안에서 무엇인가를 수행하고 있음(interface...??)
- 근데 일반적인 JS에서는 interface가 없으니 TS상에서 interface대신 class를 넣어주는 것도 가능. 단 ts에서 class 선언을 할때 해당 class가 어떤 속성을 가져야 하는지 선언해야 한다. 권한까지도.
- constructor라는 method는 class가 시작할때마다 호출 된다.
- class 사용시 해당 변수에 private을 설정해주면 해당 변수를 보호해 준다. 즉 노출되지 않는다. (속성 보호)