<template>
  <div class="text-sm sm:text-base md:text-lg lg:text-xl">
    <div class="grid grid-cols-1 lg:grid-cols-2 py-4">
      <div class="mb-2" v-for="(value, key) in myInfo" :key="key">
        <div class="grid grid-cols-5">
          <div class="col-span-2">
            <!-- icon -->
            <span
              ><i
                class="capitalize mr-2 font-black text-green-500"
                :class="value.icon"
              ></i
            ></span>
            <!-- title -->
            <span class="capitalize mr-4 font-black text-green-500">{{
              value.title
            }}</span>
          </div>
          <div class="col-span-3">
            <!-- description -->
            <span v-for="(item, index) in value.items" :key="index">
              <a
                class="font-medium underline"
                v-if="item.href"
                :href="item.href"
                target="_blank"
                >{{ item.description }}</a
              >
              <span class="font-medium" v-else>{{ item.description }}</span>
              <span
                v-if="value.items.length > 1 && value.items.length != index + 1"
                class="mr-1"
                >,
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

interface InfoItemI {
  title: string;
  icon: string;
  items: DescriptionItemI[];
  href?: string;
}

interface DescriptionItemI {
  description: string;
  href?: string;
}

interface InfoI {
  birth: InfoItemI;
  residence: InfoItemI;
  address: InfoItemI;
  e_mail: InfoItemI;
  github: InfoItemI;
  employee: InfoItemI;
}

export default defineComponent({
  name: "Detail",
  setup() {
    const myInfo = ref<InfoI>({
      // age: new Date().getFullYear() - new Date("1996").getFullYear() + 1,
      birth: {
        title: `Birth`,
        icon: `fas fa-birthday-cake`,
        items: [
          {
            description: "Oct 18th, 1996",
          },
        ],
      },
      residence: {
        title: `Blog`,
        icon: `fas fa-newspaper`,
        items: [
          {
            description: `日用\`s Blog`,
            href: "https://dlfdyd96.tistory.com/",
          },
          {
            description: `velog`,
            href: "https://velog.io/@1yongs_",
          },
        ],
      },
      address: {
        title: `Address`,
        icon: `fas fa-map-marker-alt`,
        items: [
          {
            description: `Gwanak-gu, Seoul`,
          },
        ],
      },
      e_mail: {
        title: `E-Mail`,
        icon: `fas fa-paper-plane`,
        items: [
          {
            description: `1yongs_@naver.com`,
          },
        ],
      },
      github: {
        title: `github`,
        icon: `fab fa-github`,
        items: [
          {
            description: `https://github.com/dlfdyd96`,
            href: "https://github.com/dlfdyd96",
          },
        ],
      },
      employee: {
        title: `Employee`,
        icon: `fas fa-building`,
        items: [
          {
            description: `Health And Medicine Corp.`,
            href: "https://hnmcorp.kr/",
          },
        ],
      },
    });

    return { myInfo };
  },
});
</script>
