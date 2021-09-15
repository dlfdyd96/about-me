# 포트폴리오

포트폴리오 홈페이지를 `vue3` + `TypeScript` + `tailwindcss` 로 제작하고 github.io 페이지에 업로드 합니다.

## Category

- Home
- Resume
- Portfolio
- Read Book

<hr>

## # Home

- [x] 내 닉네임 그런거 없소용
- [x] 반갑습니다 & 일본어 & 영어
  - [tailwind Carousel](https://devdojo.com/tnylea/creating-a-slider-with-tailwind-css)
- [x] 날짜, 시간

## # Resume

- [x] 간단한 자기소개
  - [ ] 피드백: 좀 더 전문스럽게 3줄 정도로 수정할 것.
- [x] Detail
  - [ ] velog 블로그 추가
- [x] Experience
- [x] Activities
- [x] Education

## # Portfolio

- [ ] Weedle
- [ ] Weedle Academy
- [ ] Hnmcorp OAuth2.0 API Server
- [ ] 알고리즘 동아리 첼린지 사이트
- [ ] 임베디드 소프트웨어 경진대회
- [ ] 제 17회 대경권 알고리즘 경진 경진대회
- [ ] 명예옷장
<!-- - [ ] NestJS Community -->

## # Read Book

TODO: 읽은 책들을 정리할 예정입니다.

- [ ] `/views/ReadBook.vue`
- [ ] Component
  - [ ] 책
  ```ts
  export interface BookItem {
    image: string; // 책 이미지
    title: string; // 책 제목
    link: string; // github 로 연결
    date: string; // 책 읽은 날짜? 흠..
  }
  ```
