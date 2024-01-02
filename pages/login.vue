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
  name: "about",
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
  background-image: url("https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>