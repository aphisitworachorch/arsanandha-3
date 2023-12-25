<template>
  <div class="outerContainer">
    <div class="innerContainer">
    </div>
  </div>
</template>
<script setup>
import {useHead} from "nuxt/app";
import og from '../assets/jpg/arsanandhaOG.png';
import TotoKatakornViewProfile from "~/components/TotoKatakornViewProfile.vue";

useHead({
  title: "arsanandha.xyz",
  meta:[
    { hid: 'og-type', property: 'og:type', content: 'website' },
    { hid: 'og-title', property: 'og:title' ,content: '26'},
    { hid: 'og-desc', property: 'og:description', content: "26" },
    { hid: 'og-image', property: 'og:image',
      content: 'https://picsum.photos/1600/900?grayscale'
    },
    { hid: 'og-url', property: 'og:url', content: 'https://arsanandha.xyz/26' },
    { hid: 't-type', name: 'twitter:card', content: 'summary_large_image' },

  ]
})
</script>
<script>
export default {
  name: "birthday",
  beforeCreate() {
    console.log("26")
  }
}
</script>
<style scoped>
.outerContainer {
  @apply hero min-h-screen transform-gpu subpixel-antialiased bg-black
}
.innerContainer {
  @apply hero-content text-center
}
</style>