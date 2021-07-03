<template>
  <div class="home">
    <div class="h-screen flex">
      <HelloWorld
        myName="Il Yong Hwang"
        msg="Hello World! Welcome to my Portfolio site."
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/Home/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
});
</script>
