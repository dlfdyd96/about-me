<template>
  <div class="my-5 mx-2 sm:m-10">
    <div class="text-4xl font-black px-4 pb-4">Resume</div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
      <Education :title="'Education'" class="col-span-2 sm:col-span-2" />
      <DevelopSkills
        :title="'DevelopSkills'"
        class="col-span-2 sm:col-span-1"
      />
      <Knowledges :title="'Knowledges'" />
      <Experience :title="'Experience'" />

      <Awards :title="'Awards'" class="col-span-2" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Awards from "@/components/Resume/Awards.vue";
import DevelopSkills from "@/components/Resume/DevelopSkills.vue";
import Education from "@/components/Resume/Education.vue";
import Experience from "@/components/Resume/Experience.vue";
import Knowledges from "@/components/Resume/Knowledges.vue";

export default defineComponent({
  name: "Resume",
  components: { Awards, DevelopSkills, Education, Experience, Knowledges },
});
</script>

<style></style>
