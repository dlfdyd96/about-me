<template>
  <div class="text-xl">
    <div v-for="(value, key) in myInfo" :key="key" class="mb-2">
      <span class="capitalize mr-4 font-black text-green-500">{{ key }}</span>
      <a
        class="font-medium"
        v-if="key === 'github'"
        href="https://github.com/dlfdyd96"
        target="_blank"
        >{{ value }}</a
      >
      <span class="font-medium" v-else>{{ value }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

interface InforI {
  age: number;
  residence: string;
  address: string;
  e_mail: string;
  github: string;
}

export default defineComponent({
  name: "Detail",
  setup() {
    const myInfo = ref<InforI>({
      age: new Date().getFullYear() - new Date("1996").getFullYear() + 1,
      residence: `Republic of Korea`,
      address: `Solbat-ro, Gwanak-gu, Seoul`,
      e_mail: `1yongs_@naver.com`,
      github: `https://github.com/dlfdyd96`,
    });

    return { myInfo };
  },
});
</script>
