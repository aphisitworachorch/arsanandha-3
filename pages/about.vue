<template>
  <div class="hero min-h-screen">
    <div class="hero-content text-center">
      <TotoAboutComponents></TotoAboutComponents>
    </div>
  </div>
</template>
<script setup>
import {useHead} from "nuxt/app";
import og from '../assets/jpg/arsanandhaOG.png';

useHead({
  title: "About me",
  meta:[
    { hid: 'og-type', property: 'og:type', content: 'website' },
    { hid: 'og-title', property: 'og:title' ,content: 'About Arsanandha'},
    { hid: 'og-desc', property: 'og:description', content: 'My Profile' },
    { hid: 'og-image', property: 'og:image',
      content: new URL(og, import.meta.url).href
    },
    { hid: 'og-url', property: 'og:url', content: 'https://arsanandha.xyz' },
    { hid: 't-type', name: 'twitter:card', content: 'summary_large_image' },

  ]
})
</script>
<script>
export default {
  name: "about"
}
</script>

<style scoped>

</style>