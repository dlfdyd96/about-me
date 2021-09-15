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
# gdgd
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
          <strong>프로젝트 요약</strong>
          <p>
          명예옷장은 금오공대 사회공헌 프로젝트팀인 블루치즈팀이 기획한 것으로, 스승의 추억이 담긴 옷을 기부받아 제자들이 저렴하게 구매하고, 그로 인해 발생한 수익을 다시 지역사회에 기부하는 내용을 담고 있습니다.
          <p>
          
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
