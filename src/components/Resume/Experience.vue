<template>
  <div>
    <!-- title -->
    <div class="text-2xl sm:text-3xl font-black mb-3 sm:mb-5">
      {{ title }}
    </div>

    <div>
      <div class="mb-7" v-for="(item, itemIndex) in items" :key="itemIndex">
        <div class="text-xl sm:text-2xl font-black mb-2 sm:mb-3">
          {{ item.title }}
        </div>
        <div class="text-lg sm:text-xl font-bold mb-2">
          {{ item.office }}
          <br class="sm:hidden" />
          <span class="text-base sm:text-lg font-medium text-gray-500"
            >({{ item.date }})</span
          >
        </div>
        <div class="mb-3 sm:mb-5">
          {{ item.description }}
        </div>
        <!-- Project -->
        <!-- <div class="text-lg sm:text-xl font-bold mb-2 sm:mb-3 mt-4 sm:mt-6">
          Project
        </div> -->
        <div
          class="mb-6"
          v-for="(contentItem, contentsIndex) in item.contents"
          :key="contentsIndex"
        >
          <div class="text-md sm:text-lg font-bold mb-1 sm:mb-2">
            Project {{ contentsIndex + 1 }}. {{ contentItem.title }}
            <br class="sm:hidden" />
            <span class="ml-2 text-base sm:text-md font-medium text-gray-500"
              >({{ contentItem.date }})</span
            >
          </div>
          <div
            class="ml-4 mb-1 sm:mb-2"
            v-for="(description, desIndex) in contentItem.description"
            :key="desIndex"
          >
            - {{ description }}
          </div>
          <div class="ml-4 flex flex-wrap">
            - skills :
            <div
              v-for="(skill, skillIndex) in contentItem.skills"
              :key="skillIndex"
              class="
                text-sm
                sm:text-base
                bg-green-400
                px-2
                mx-1
                text-white
                rounded-md
                mb-1
                sm:mb-2
              "
            >
              {{ skill }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

interface ContentI {
  title: string;
  date: string;
  description: string[]; // TODO: 성과도 포함할 것
  skills?: string[];
  href?: string; // TODO: 작업 사이트 링크 추가
}

/**
 * 1) 회사
 * 2) 부서/직함
 * 3) 기간
 * 4) 진행한 일
 * 4-0) 제목 (기간)
 * 4-1) 기간
 * 4-2) 사용한 기술
 * 4-3) 성과와 수치 중심의 결과
 */
interface ExperienceItem {
  title: string; // Back End Developer
  description?: string;
  office: string; // Health and Medicine Corp.
  date: string; // 2020.10.12 ~ (재직중)
  contents?: ContentI[]; // ["NestJS", "TypeScript", "Azure", "MySQL", "CosmosDB", "Redis"],
}

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    const items = ref<ExperienceItem[]>([
      {
        title: `Backend Software Engineer - 제품 팀`,
        description: `Backend core engineer.\nmaintaing multimedia service and developing phone call service`,
        office: `Channel Corp.`,
        data: `2022-01-03 ~ now`
      },
      {
        title: `Software Engineer - BackEnd Developer`,
        description: `헬스앤메디슨은 반려동물의 건강과 복지, 나아가 반려인의 행복과 비반려인의 공존을 위해 설립된 기술기반 펫케어 스타트업입니다.`,
        office: `Health and Medicine Corp.`,
        date: `2020-10-12 ~ 2021-09-30`,
        contents: [
          {
            title: "실시간 라이브 강의 웨비나 개발",
            description: [
              "NestJS 프레임워크를 사용한 API Server 개발",
              "Redis PUB/SUB을 적용한 socket.io 채팅 기능 개발",
              "Azure Media Service 의 라이브 송출 기능의 NestJS 커스텀 모듈 기능 개발",
            ],
            date: "2020-11 ~ 2021-04",
            skills: [
              "NestJS",
              "TypeScript",
              "TypeORM",
              "Azure App Service",
              "MySQL",
              "CosmosDB",
              "Redis",
            ],
          },
          {
            // TODO: OAuth에서 정확히 무엇을 하였는지 보여주자.
            title: "OAuth 2.0 API 인증 서버 개발",
            description: [
              `핼스엔메디슨 OAuth 2.0 API 인증 서버 개발`,
              `자체 구축 인증 서버를 통해 인증 받은 Token을 이용해 검증된 사용자에게만 리소스(API)를 제공`,
            ],
            date: "2020-11 ~ 2021-04",
            skills: ["NestJS", "TypeORM", "MySQL", "Azure App Servie", "JWT"],
          },

          {
            title: "반려견 산책 어플 Weedle API 서버 개발",
            description: [
              `Nice 본인확인서비스 모듈 개발`,
              `공지사항 팝업 API 서비스 개발`,
              `리워드 상품 배송에 대한 Fassto 물류 서비스 API 연동 개발`,
            ],
            date: "2021-04 ~ 2021-09",
            skills: [
              "NestJS",
              "TypeScript",
              "MySQL",
              "Nice인증모듈",
              "FasstoAPI모듈",
            ],
          },

          {
            title: "Devops",
            description: [
              `Microsoft Azure를 사용한 서비스 Infra 구축 및 유지보수`,
              `Elastic Search를 통한 error tracking`,
              `Azure App Service PaaS 를 통한 Auto Scaling server 운영`,
              `Azure Media Service 를 통한 실시간 스트리밍 서비스 운영`,
              `MS Azure Certificate AZ-900 취득 (2021-05)`,
            ],
            date: "2020-10 ~ 2021-09",
            skills: [
              "Azure",
              "Docker",
              "Media Service",
              "Jenkins",
              "Elastic Stack",
              "CosmosDB",
              "MySQL",
            ],
          },

          // {
          //   title: "Microsoft Azure Infra 2020-10 ~ 2021-07",
          //   content: [
          //     "Microsoft Azure를 사용한 서비스 Infra 구축 및 유지보수",
          //     "Microsoft Azure AZ-900 Certification",
          //   ],
          // },
          // {
          //   title: "반려동물 산책 어플 Weedle 2020-10 ~ 2021-07",
          //   content: [
          //     "출고 서비스 Fassto API 연동 모듈 개발",
          //     "Azure SendGrid 메일 서비스 모듈 개발",
          //   ],
          // },
        ],
      },
    ]);

    return { items };
  },
});
</script>
