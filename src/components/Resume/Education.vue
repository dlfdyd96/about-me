<template>
  <div>
    <div class="text-2xl font-black">{{ title }}</div>
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
            <p class="md:col-start-3 md:col-span-6 xl:col-span-7 ml-9 md:ml-0">
              {{ item.content }}
            </p>
            <!-- </a> -->
          </div>
        </article>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

interface ItemI {
  date: string;
  title: string;
  content: string;
}

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    const items = ref<ItemI[]>([
      {
        title: `Tailwind CSS v2.2`,
        date: `Jun 18, 2021`,
        content:
          "Over the last few weeks, we've been having a ton of fun dumping\
              new and exciting features into Tailwind. Now feels like the right\
              time to cut a release, so here it is — Tailwind CSS v2.2! We've\
              built-in a new high-performance CLI tool, added before and after\
              pseudo-element support, introduced new sibling selector variants,\
              the ability to style highlighted text, and tons more.",
      },
      {
        title: "Tailwind CSS v2.1",
        date: "Apr 6, 2021",
        content:
          "We just released Tailwind CSS v2.1 which brings the new JIT engine\
              to core, adds first-class CSS filter support, and more!",
      },
      {
        title: "Just-In-Time: The Next Generation of Tailwind CSS",
        date: "Mar 16, 2021",
        content:
          "One of the hardest constraints we've had to deal with as we've\
              improved Tailwind CSS over the years is the generated file size in\
              development. With enough customizations to your config file, the\
              generated CSS can reach 10mb or more, and there's only so much CSS\
              that build tools and even the browser itself will comfortably\
              tolerate.",
      },
      {
        title: "Welcoming James McDonald to Tailwind Labs",
        date: "Mar 9, 2021",
        content:
          "Many years ago I got a message from Steve that said something like\
              \"Have I ever shared this guy's Dribbble profile with you before?\
              Been following him forever, some of my absolute favorite work I've\
              ever found.\" That person was James McDonald, and today we're\
              totally over the moon to share that James is joining our team\
              full-time.",
      },
      {
        title: '"Tailwind CSS: From Zero to Production" on YouTube',
        date: "Feb 17, 2021",
        content:
          "Today we're excited to release Tailwind CSS: From Zero to\
              Production, a new screencast series that teaches you everything\
              you need to know to get up and running with Tailwind CSS v2.0 from\
              scratch.",
      },
      {
        title: "Welcoming David Luhr to Tailwind Labs",
        date: "Feb 1, 2021",
        content:
          "We started working with David Luhr last summer on a\
              project-by-project basis to help us develop a Figma version of\
              Tailwind UI (almost ready!), as well as to leverage his\
              accessibility expertise when building Tailwind UI templates,\
              ensuring we were following best practices and delivering markup\
              that would work for everyone, no matter what tools they use to\
              browse the web. Today we're excited to share that David has joined\
              the team full-time!",
      },
      {
        title: "Multi-line truncation with @tailwindcss/line-clamp",
        date: "Jan 25, 2021",
        content:
          "Imagine you're implementing a beautiful design you or someone on\
              your team carefully crafted in Figma. You've nailed all the\
              different layouts at each breakpoint, perfected the whitespace and\
              typography, and the photography you're using is really bringing\
              the design to life.",
      },
      {
        title: "Tailwind CSS v2.0",
        date: "Nov 19, 2020",
        content:
          "Today we're finally releasing Tailwind CSS v2.0, including an\
              all-new color palette, dark mode support, and tons more!",
      },
    ]);

    return { items };
  },
});
</script>
