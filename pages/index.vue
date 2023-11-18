<template>
  <div class="outerContainer">
    <div class="innerContainer">
      <TotoProfileComponents></TotoProfileComponents>
    </div>
  </div>
  <Footers class="fixed bottom-0"></Footers>
</template>
<script setup>
import {useHead} from "nuxt/app";
import og from '../assets/jpg/arsanandhaOG.png';
import Footers from "~/components/Footers.vue";

useHead({
  title: "arsanandha.xyz",
  meta:[
    { hid: 'og-type', property: 'og:type', content: 'website' },
    { hid: 'og-title', property: 'og:title' ,content: 'Arsanandha Aphisitworachorch (arsanandha.xyz)'},
    { hid: 'og-desc', property: 'og:description', content: "Hi! I'm Backend Developer Who Involved Cutting-edge Technology with Love and Passion 💖" },
    { hid: 'og-image', property: 'og:image',
      content: '/pics/arsanandhaOG.png'
    },
    { hid: 'og-url', property: 'og:url', content: 'https://arsanandha.xyz' },
    { hid: 't-type', name: 'twitter:card', content: 'summary_large_image' },

  ]
})
</script>
<script>
import TotoProfileComponents from "~/components/TotoProfileComponents.vue";

export default {
  name: "index",
  components:{TotoProfileComponents}
}

</script>
<style scoped>
.outerContainer {
  @apply hero min-h-screen transform-gpu subpixel-antialiased
}
.innerContainer {
  @apply hero-content text-center
}
</style>