<template>
  <div>
    <div class="text-2xl font-black">{{ title }}</div>
    <div>
      <ul class="bg-gray-50 rounded-3xl p-2 sm:p-5 xl:p-6">
        <li v-for="(item, index) in items" :key="index">
          <article>
            <!-- <a
            href="https://blog.tailwindcss.com/tailwindcss-2-2"
            class="
              grid
              md:grid-cols-8
              xl:grid-cols-9
              items-start
              rounded-xl
              p-3
              sm:p-5
              xl:p-6
              overflow-hidden
              hover:bg-white
            "
          > -->
            <div
              class="
                grid
                md:grid-cols-8
                xl:grid-cols-9
                items-start
                rounded-xl
                p-3
                sm:p-5
                xl:p-6
                overflow-hidden
              "
            >
              <h3
                class="
                  font-semibold
                  text-gray-900
                  md:col-start-3 md:col-span-6
                  xl:col-start-3 xl:col-span-7
                  mb-1
                  ml-9
                  md:ml-0
                "
              >
                {{ item.title }}
              </h3>
              <time
                datetime="2021-06-17T19:00:00.000Z"
                class="
                  md:col-start-1 md:col-span-2
                  row-start-1
                  md:row-end-3
                  flex
                  items-center
                  font-medium
                  mb-1
                  md:mb-0
                "
              >
                <!-- 첫번째 -->
                <svg
                  viewBox="0 0 12 12"
                  class="w-3 h-3 mr-6 overflow-visible text-green-400"
                  :class="index == 0 ? 'text-green-500' : 'text-gray-300'"
                >
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    fill="currentColor"
                    :class="index == 0 ? 'text-green-500' : 'text-gray-300'"
                  ></circle>
                  <circle
                    v-if="index === 0"
                    cx="6"
                    cy="6"
                    r="11"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  ></circle>
                  <path
                    v-if="index !== 0"
                    d="M 6 -6 V -30"
                    fill="none"
                    stroke-width="2"
                    stroke="currentColor"
                    class="text-gray-200"
                  ></path>
                  <path
                    d="M 6 18 V 500"
                    fill="none"
                    stroke-width="2"
                    stroke="currentColor"
                    class="text-gray-200"
                  ></path>
                </svg>
                {{ item.date }}
              </time>
              <div
                class="
                  md:col-start-3 md:col-span-6
                  xl:col-span-7
                  ml-9
                  md:ml-0
                  flex flex-wrap
                "
              >
                <div
                  v-for="(item, index) in item.skills"
                  :key="index"
                  class="bg-gray-200 p-1 px-2 m-1 rounded-md text-xs"
                >
                  {{ item }}
                </div>
              </div>
              <div
                v-for="content in item.contents"
                :key="content"
                class="
                  md:col-start-3 md:col-span-6
                  xl:col-span-7
                  ml-9
                  md:ml-0
                  font-bold
                  my-2
                "
              >
                {{ content.title }}
                <div
                  v-for="item in content.content"
                  :key="item"
                  class="font-medium pl-2"
                >
                  - {{ item }}
                </div>
              </div>
              <!-- </a> -->
            </div>
          </article>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { TimelineItemI } from "@/components/Resume/TimeLine.vue";

interface ContentI {
  title: string;
  content: string[];
}

interface ExperienceItem {
  title: string;
  date: string;
  skills?: string[];
  contents?: ContentI[];
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
        title: `헬스앤메디슨 BackEnd Developer`,
        date: `Oct 12, 2020 ~ `,
        skills: ["NestJS", "TypeScript", "Azure", "MySQL", "CosmosDB", "Redis"],
        contents: [
          {
            title: "실시간 라이브 강의 웨비나 개발 2020-11 ~ 2021-02",
            content: [
              "NestJS 프레임워크를 사용한 API Server 개발",
              "Redis PUB/SUB을 적용한 socket.io 채팅 기능 개발",
              "Azure Media Service 의 라이브 송출 기능의 NestJS 커스텀 모듈 기능을 개발",
            ],
          },
          {
            title: "OAuth2.0 서버 개발 2020-10 ~ 2020-12",
            content: ["핼스엔메디슨 OAuth 2.0 API 인증 서버 개발"],
          },
          {
            title: "Microsoft Azure Infra 2020-10 ~ 2021-07",
            content: [
              "Microsoft Azure를 사용한 서비스 Infra 구축 및 유지보수",
              "Microsoft Azure AZ-900 Certification",
            ],
          },
          {
            title: "반려동물 산책 어플 Weedle 2020-10 ~ 2021-07",
            content: [
              "출고 서비스 Fassto API 연동 모듈 개발",
              "Azure SendGrid 메일 서비스 모듈 개발",
            ],
          },
        ],
      },
    ]);

    return { items };
  },
});
</script>
