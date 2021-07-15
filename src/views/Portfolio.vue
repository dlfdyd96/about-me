<template>
  <div>
    <div class="my-5 mx-2 sm:m-10">
      <div class="text-4xl font-black px-4 pb-4">Portfolio</div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
        <div v-for="(item, index) in items" :key="index">
          <!-- {{ index }} -->
          <Thumbnail :image="item.image" :title="item.title" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Thumbnail from "@/components/Portfolio/Thumbnail.vue";

interface ItemI {
  image: string;
  title: string;
}
export default defineComponent({
  name: "Portfolio",
  components: {
    Thumbnail,
  },
  setup() {
    const items = ref<ItemI[]>([
      {
        image: "test1.jpeg",
        title: "Test 입니다.",
      },
      {
        image: "logo.png",
        title: "??",
      },
      {
        image: "test1.jpeg",
        title: "Test2 입니다.",
      },
      {
        image: "test1.jpeg",
        title: "Testsdfsd 입니다.",
      },
    ]);
    return { items };
  },
});
</script>

<style></style>
