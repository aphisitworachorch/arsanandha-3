<script setup>
import InsiderConfigurationComponents from "~/components/Insiders/InsiderConfigurationComponents.vue";
import {useHead} from "nuxt/app";
import InsiderBrewerCupViewTable from "~/components/Insiders/InsiderBrewerCupViewTable.vue";
useHead({
  title: "Configuration"
})
</script>
<template>
  <div class="outerContainer bgCon">
    <div class="innerContainer">
      <InsiderBrewerCupViewTable></InsiderBrewerCupViewTable>
    </div>
  </div>
</template>
<script>

import InsiderConfigurationComponents from "~/components/Insiders/InsiderConfigurationComponents.vue";

export default {
  name: "brew-list-view",
  components: {InsiderConfigurationComponents}
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