<template>
  <div class="hero min-h-screen">
    <div class="hero-content text-center">
      <TotoProfileComponents></TotoProfileComponents>
    </div>
  </div>
</template>
<script setup>
import {useHead} from "nuxt/app";
import og from '../assets/jpg/arsanandhaOG.png';

useHead({
  title: "arsanandha.xyz",
  meta:[
    { hid: 'og-type', property: 'og:type', content: 'website' },
    { hid: 'og-title', property: 'og:title' ,content: 'Arsanandha Aphisitworachorch (arsanandha.xyz)'},
    { hid: 'og-desc', property: 'og:description', content: "Hi! I'm Backend Developer Who Involved Cutting-edge Technology with Love and Passion 💖" },
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
  name: "index",
  data() {
    return {
    }
  }
}

</script>