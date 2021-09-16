import { createStore } from "vuex";

export interface BookI {
  thumbnail: string;
  image: string;
  title: string;
  date: string;
  contents: string;
}
export interface PortfolioI {
  thumbnail: string;
  image: string;
  title: string;
  date: string;
  contents: string;
}
export interface RootState {
  portFolioItems: PortfolioI[];
  bookItems: BookI[];
}

export default createStore<RootState>({
  state: {
    portFolioItems: [
      //       {
      //         title: "Weedle",
      //         image: "test5.jpeg",
      //         date: "2020-11 ~ 2021-04",
      //         contents: `
      // <p>
      // <p>
      // ## gdgd
      // ### gdgd
      // gdgd
      // - d
      // - d
      // 1. d
      // 2. f
      // 2. dd

      // <hr>

      //         `,
      //       },
      {
        title: "Weedle Academy",
        thumbnail: "weedle_academy/weedle_academy_logo.jpeg",
        image: "weedle_academy/azure_media_service_diagram.png",
        date: "2020-11 ~ 2021-04",
        contents: `
# 사용 기술 스택
<input checked="" disabled="" type="checkbox"> Tool
- NestJS, TypeORM, SocketIO

<input checked="" disabled="" type="checkbox"> Database
- MySQL, Azure Cosmos DB, Redis

<input checked="" disabled="" type="checkbox"> DevOps
- Docker, Azure Media Service

<input checked="" disabled="" type="checkbox"> Infra
- Azure App Service, Azure Application Gateway

<p>
<hr>
<p>

# 프로젝트 개요
'한국동물병원협회와 함께하는 위들아카데미'는 반려동물 전문가와 반려인이 함께 만들어가는 **실시간 반려동물 교육 플랫폼**입니다.
'한국동물병원협회와 함께하는 위들아카데미'는 매월 관절, 피부, 치아, 비뇨기, 호흡기, 응급질환, 비만, 행동학 등 다양한 분야의 반려동물 전문가와 반려동물을 키우면서 필요한 정보와 전문적인 지식을 반려인의 눈높이에서 소통하며 전달합니다.
<br>
<hr>
<br>

# 나의 역할
### 1. 회원 관리 및 관련 API (회원가입, Admin API, 조회 등)
JSON Web Token과 NestJS Guard 기능을 사용하여 회원들의 Authentication / Authorization 인증 기능을 구현하였습니다.
- Sample link : <U>[NestJS Auth](https://velog.io/@1yongs_/series/NestJS-Auth)</U>

<br>

### 2. Azure Media Service SDK의 Live Streaming 커스텀 모듈 개발
라이브 송출을 위해 다양한 라이브러리와 플랫폼을 테스트하였고, Azure Media Service를 선택하였습니다. 
서비스에 맞게 Microsoft Azure의 [\`@azure/arm-mediaservices\`](https://www.npmjs.com/package/@azure/arm-mediaservices) package를 사용하여 Live Streaming 서비스 모듈 개발하였습니다.

<br>

### 3. Redis Pub/Sub + Socket.IO 스케일 아웃 환경에서의 채팅 모듈 개발
Azure의 App Service라는 PaaS 리소스를 사용하여 서버를 스케일 아웃하여 분산처리가 가능하도록 배포하였지만, Socket 통신에서 채팅이 모든 서버에 공유되지 못했습니다. 
해결방법을 마련하던 중 Redis의 publish/subscribe 기능을 사용하면 채팅을 모든 서버에 공유된다는 점을 알게 되었습니다. 
\`socket.io\`와 \`Redis\` 두 가지 플랫폼을 연결해주는 Adapter 를 사용하여 요청 수에 따라 서버가 증가하여도 모든 서버에서 사용자는 메시지를 공유할 수 있는 기능을 개발하였습니다.
- Sample link : <U>[Redis + Socket.IO + NestJS Chat App](https://velog.io/@1yongs_/Redis-Clustering-NestJS-Chat-App)</U>

<br>

### 4. Sendgrid 회원 메일 발송 모듈 개발
회원에게 메일을 발송하는 기능을 NestJS에서 제공하는 아키텍쳐적 기능들을 적극적으로 사용하여 메일 발송 모듈을 개발하였습니다.
NestJS의 Dynamic Module 기능을 이용하여 서비스에 맞는 모듈을 커스텀하여 개발하였습니다.
- Sample link : <U>[NestJS 메일 발송 Dynamic Module](https://velog.io/@1yongs_/NestJS-%EB%A9%94%EC%9D%BC-%EB%B0%9C%EC%86%A1-Dynamic-Module)</U>


<br>
<hr>
<br>

# More (link)
- WebSite : <U>[위들아카데미](https://www.weedle.tv)</U>

`,
      },
      // {
      //   title: "Hnmcorp OAuth2.0 API Server",
      //   image: "test4.jpeg",
      //   date: "2020-11 ~ 2021-04",
      //   contents: `
      //     안녕하세요
      //     <p>
      //     다음줄입니다.
      //   `,
      // },
      // {
      // //   title: "알고리즘 동아리 첼린지 사이트",
      // //   image: "test4.jpeg",
      // //   date: "2020-06 ~ 2020-08",
      // //   contents: `
      // //     안녕하세요
      // //     <p>
      // //     다음줄입니다.
      // //   `,
      // // },
      // // {
      // //   title: "임베디드 소프트웨어 경진대회",
      // //   image: "test1.jpeg",
      // //   date: "2019-09 ~ 2019-12",
      // //   contents: `
      // //     안녕하세요
      // //     <p>
      // //     다음줄입니다.
      // //   `,
      // // },
      {
        title: "명예 옷장",
        thumbnail: "hornor/thumbnail.jpeg",
        image: "hornor/main.png",
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
- Articles : <U>[금오공대 스승과 제자의 명예나눔 실천, '명예 옷장' 사회공헌 프로젝트 눈길](http://news.imaeil.com/Economy/2018122013554904987)</U>
- Repository : <U>[dlfdyd96/honor-front](https://github.com/dlfdyd96/honor-front)</U>




          
        `,
      },
    ],
    bookItems: [
      {
        contents: "test contest",
        date: new Date().toISOString(),
        title: "hi",
        image: "test2.jpeg",
        thumbnail: "test1.jpeg",
      },
      {
        contents: "test contest",
        date: new Date().toISOString(),
        title: "hi",
        image: "test2.jpeg",
        thumbnail: "test1.jpeg",
      },
      {
        contents: "test contest",
        date: new Date().toISOString(),
        title: "hi",
        image: "test2.jpeg",
        thumbnail: "test1.jpeg",
      },
      {
        contents: "test contest",
        date: new Date().toISOString(),
        title: "hi",
        image: "test2.jpeg",
        thumbnail: "test1.jpeg",
      },
    ],
  },
  mutations: {
    findPortfolioById(state: RootState, index: number) {
      // console.log(state.portFolioItems[index]);
      return state.portFolioItems[index];
    },
    findBookById(state: RootState, index: number) {
      return state.bookItems[index];
    },
  },
  actions: {},
  modules: {},
});
