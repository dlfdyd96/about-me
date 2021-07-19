import { createStore } from "vuex";

export interface PortfolioI {
  image: string;
  title: string;
  contents: string;
}
export interface RootState {
  portFolioItems: PortfolioI[];
}

export default createStore<RootState>({
  state: {
    portFolioItems: [
      {
        title: "임베디드 소프트웨어 경진대회",
        image: "test1.jpeg",
        contents:
          "안녕하세요<p>다음줄입니다.<p>fdajskfdsahjklfshadjkfshdakjfhsdjkalfdshajlkfshajkdlfsadhlkjfdsahljkfadshjklfdsahjklfdashjklfdashkjhfkjdsalhjkldfsahjkldfsahjkl",
      },
      {
        title: "대경권 알고리즘 경진 경진대회",
        image: "test2.jpeg",
        contents: "안녕하세요<p>다음줄입니다.",
      },
      {
        title: "테스트 경진대회1",
        image: "test3.jpeg",
        contents: "안녕하세요<p>다음줄입니다.",
      },
      {
        title: "Hack Day 2",
        image: "test4.jpeg",
        contents: "안녕하세요<p>다음줄입니다.",
      },
      {
        title: "how baby ",
        image: "test4.jpeg",
        contents: "안녕하세요<p>다음줄입니다.",
      },
      {
        title: "Test 입니다.",
        image: "test5.jpeg",
        contents: "안녕하세요<p>다음줄입니다.",
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
