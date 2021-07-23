<template>
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
            <p
              v-for="content in item.content"
              :key="content"
              class="md:col-start-3 md:col-span-6 xl:col-span-7 ml-9 md:ml-0"
            >
              {{ content }}
            </p>
            <!-- </a> -->
          </div>
        </article>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export interface TimelineItemI {
  date: string;
  title: string;
  content: string[];
}

export default defineComponent({
  props: {
    items: {
      type: Object as () => TimelineItemI,
      required: true,
    },
  },
});
</script>
