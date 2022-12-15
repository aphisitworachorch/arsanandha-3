<template>
  <div class="hero min-h-screen bg-profile">
    <div class="hero-content text-center">
      <TotoAboutComponents></TotoAboutComponents>
    </div>
  </div>
</template>
<script setup>
import {useHead} from "nuxt/app";

useHead({
  title: "arsanandha.xyz",
  meta:[
    { hid: 'og-type', property: 'og:type', content: 'website' },
    { hid: 'og-title', property: 'og:title' ,content: 'About Arsanandha Aphisitworachorch (arsanandha.xyz)'},
    { hid: 'og-desc', property: 'og:description', content: "My Deeper Profile." },
    { hid: 'og-image', property: 'og:image',
      content: '/pics/arsanandhaOG.png'
    },
    { hid: 'og-url', property: 'og:url', content: 'https://arsanandha.xyz' },
    { hid: 't-type', name: 'twitter:card', content: 'summary_large_image' },

  ]
})
</script>
<script>
import TotoAboutComponents from "~/components/TotoAboutComponents.vue";

export default {
  name: "about",
  components: {TotoAboutComponents}
}
</script>

<style scoped>

</style>