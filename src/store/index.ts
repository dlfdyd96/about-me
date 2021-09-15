import { createStore } from "vuex";

export interface PortfolioI {
  image: string;
  title: string;
  date: string;
  contents: string;
}
export interface RootState {
  portFolioItems: PortfolioI[];
}

export default createStore<RootState>({
  state: {
    portFolioItems: [
      {
        title: "Weedle",
        image: "test5.jpeg",
        date: "2020-11 ~ 2021-04",
        contents: `
<p>
<p>
## gdgd
### gdgd
gdgd
- d
- d 
1. d
2. f
2. dd

<hr>

        `,
      },
      {
        title: "Weedle Academy",
        image: "test4.jpeg",
        date: "2020-11 ~ 2021-04",
        contents: `
          안녕하세요
          <p>
          다음줄입니다.
        `,
      },
      {
        title: "Hnmcorp OAuth2.0 API Server",
        image: "test4.jpeg",
        date: "2020-11 ~ 2021-04",
        contents: `
          안녕하세요
          <p>
          다음줄입니다.
        `,
      },
      {
        title: "알고리즘 동아리 첼린지 사이트",
        image: "test4.jpeg",
        date: "2020-06 ~ 2020-08",
        contents: `
          안녕하세요
          <p>
          다음줄입니다.
        `,
      },
      {
        title: "임베디드 소프트웨어 경진대회",
        image: "test1.jpeg",
        date: "2019-09 ~ 2019-12",
        contents: `
          안녕하세요
          <p>
          다음줄입니다.
        `,
      },
      {
        title: "제 17회 대경권 알고리즘 경진 경진대회",
        image: "test2.jpeg",
        date: "2019-05",
        contents: `
          안녕하세요
          <p>
          다음줄입니다.
        `,
      },
      {
        title: "명예 옷장",
        image: "test3.jpeg",
        date: "2018-09 ~ 2018-12",
        contents: `
# 사용 기술 스택
<input checked="" disabled="" type="checkbox"> Vue.js
<input checked="" disabled="" type="checkbox"> Vuex
<input checked="" disabled="" type="checkbox"> Vue Router
<input checked="" disabled="" type="checkbox"> Axios

<p>
<hr>
<br>

# 프로젝트 개요
명예 옷장은 금오공대 사회공헌 프로젝트팀인 블루치즈팀이 기획한 것으로, 스승의 추억이 담긴 옷을 기부받아 제자들이 저렴하게 구매하고, 그로 인해 발생한 수익을 다시 지역사회에 기부하는 내용을 담고 있다.
<br>
<hr>
<br>

# 나의 역할
명예 옷장은 오프라인 스토어 뿐만 아니라 웹을 통해 조회, 운영할 수 있도록 개발팀 중 웹 프론트엔드 역할로 참가하였다.
 
백엔드와 프론트엔드의 **협업**과 **관심사 분리**를 위해 \`Vue.js\` 웹 프론트엔드 프레임워크를 사용하여 상품목록과 구매가 가능한 웹 페이지를 개발하였다.

#  

<br>

# 프로젝트 후기
### 1. Vue.js를 선택한 이유
React.js와 Vue.js 가 가장 인기 있는 웹 프론트엔드 프레임워크이지만 처음 접하는 프로젝트로 진입벽이 그나마 낮은 \`Vue.js\`를 선택하였고, Vue.js의 다양한 생태계를 경험하고자 기술 스택을 선택하였다.

<br>

### 2. 첫 협업 프로젝트
프로젝트를 진행하면서 개발 지식에 대한 부족한 점이 많다고 느꼈다. Back-End의 역할이나 인증 및 인가와 같은 기술에 대해 정확하게 알지 못하여 프로젝트를 진행하는 와중에 많이 답답한 감정을 느꼈다.
아쉬움이 많이 남아 "명예 옷장" 프로젝트를 마치고, 부족했던 부분을 메우기 위해 Node.js MVC에 대해 공부를 하였고, Youtube 클론 코딩을 통해 MVC 패턴, 인증/인가, 파일 저장, 인프라 관리 등 다양한 기술 스택들을 경험하고 배움으로써 성장할 수 있었다.

<br>

### 3. 뿌듯함
스승님과 제자들의 끈을 프로젝트에서 연결할 수 있어서 좋았으며, 이를 다시 지역사회에 기여하는 활동을 통해 좋은 추억을 만든 것 같다.

<br>
<hr>
<br>

# More (link)
- Articles : [금오공대 스승과 제자의 명예나눔 실천, '명예 옷장' 사회공헌 프로젝트 눈길](http://news.imaeil.com/Economy/2018122013554904987)
- Repository : [dlfdyd96/honor-front](https://github.com/dlfdyd96/honor-front)




          
        `,
      },
    ],
  },
  mutations: {
    findPortfolioById(state: RootState, index: number) {
      // console.log(state.portFolioItems[index]);
      return state.portFolioItems[index];
    },
  },
  actions: {},
  modules: {},
});
