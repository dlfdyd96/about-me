<template>
  <div>
    <div
      class="
        text-4xl text-center
        content-center
        flex
        items-center
        justify-center
        pb-10
      "
    >
      <span class="text-6xl p-4">[</span>
      {{ currentItem.title }}
      <span class="text-6xl p-4">]</span>
    </div>
    <div class="flex justify-center">
      <img
        class="object-cover object-center w-full max-w-screen-sm max-h-60 pb-10"
        ref="pic"
        :src="require(`@/assets/portfolio/${currentItem.image}`)"
        :style="{ filter: `brightness(80%)` }"
        alt="dd"
      />
    </div>
    <div class="flex justify-center">
      <div
        v-html="changeMarkdown"
        class="w-full max-w-screen-sm break-words"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Renderer, setOptions, parse } from "marked";

import { PortfolioI, RootState } from "@/store";
import { computed, defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const route = useRoute();
    const { state } = useStore<RootState>();

    const index: number = +route.params["id"];

    const currentItem = ref<PortfolioI>(state.portFolioItems[index]);

    const changeMarkdown = computed(() => {
      setOptions({
        renderer: new Renderer(),
        gfm: true,
        headerIds: false,
        breaks: true,
        pedantic: false,
        sanitize: true,
        smartLists: true,
        smartypants: false,
      });
      let changedText: string = parse(currentItem.value.contents);
      changedText = changedText.replaceAll("&lt;", "<");
      changedText = changedText.replaceAll("&gt;", ">");
      changedText = changedText.replaceAll("&quot;", '"');
      console.log(changedText);
      return changedText;
    });

    return { currentItem, changeMarkdown };
  },
});
</script>

<style scoped></style>
