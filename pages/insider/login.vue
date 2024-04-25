<script setup>
import {useHead} from "nuxt/app";

useHead({
  title: "Login"
})

</script>

<template>
  <div class="outerContainer bgCon">
    <div class="innerContainer">
      <InsidersLoginPageComponents></InsidersLoginPageComponents>
    </div>
  </div>
</template>
<script>

import InsidersLoginPageComponents from "~/components/Insiders/InsidersLoginPageComponents.vue";

export default {
  name: "login",
  components: {InsidersLoginPageComponents}
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
  background-image: url("https://archive.arsanandha.xyz/usertile32.jpg");
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>