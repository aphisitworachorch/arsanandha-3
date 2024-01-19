<script setup>
import {useHead} from "nuxt/app";

useHead({
  title: "Insider"
})
definePageMeta({
  middleware: ['auth'],
  layout: 'insider'
});

</script>
<template>
  <div class="outerContainer bgCon">
    <div class="innerContainer">
      <InsiderMyselfPageComponents></InsiderMyselfPageComponents>
    </div>
  </div>
</template>
<script>

import InsiderMyselfPageComponents from "~/components/Insiders/InsiderMyselfPageComponents.vue";

export default {
  name: "me",
  components: {InsiderMyselfPageComponents}
}
</script>
<style scoped>
.outerContainer {
  @apply hero min-h-screen transform-gpu subpixel-antialiased
}
.innerContainer {
  @apply hero-content text-center
}
body, html {
  height: 100%;
}
.bgCon{
  background-image: url("/pics/AP-WEB-BG.webp");
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>