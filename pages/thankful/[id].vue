<script setup lang="ts">
import TotoThankfulComponents from "~/components/Thankful/TotoThankfulComponents.vue";

const route = useRoute()
const id = route.params.id
</script>

<template>
  <div class="outerContainer">
    <div class="innerContainer">
      <TotoThankfulComponents :id="id" v-if="id != null"></TotoThankfulComponents>
    </div>
  </div>
</template>

<style scoped>
.outerContainer {
  @apply hero min-h-screen transform-gpu subpixel-antialiased bg-[url('https://unsplash.com/photos/I0-lZJ2BBCU/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8c3VyYW5hcmVlJTIwdW5pdmVyc2l0eSUyMG9mJTIwdGVjaG5vbG9neXxlbnwwfHx8fDE3MjQ0OTAxNzF8MA&force=true&w=1920')]
}
.innerContainer {
  @apply hero-content text-center
}
</style>