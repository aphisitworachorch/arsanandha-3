<template>
  <div class="hero min-h-screen transform-gpu subpixel-antialiased">
    <div class="hero-content text-center">
      <TotoSkillsComponents></TotoSkillsComponents>
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
      content: '/pics/arsanandhaOG.png'
    },
    { hid: 'og-url', property: 'og:url', content: 'https://arsanandha.xyz' },
    { hid: 't-type', name: 'twitter:card', content: 'summary_large_image' },

  ]
})
</script>
<script>
import TotoSkillsComponents from "~/components/TotoSkillsComponents.vue";

export default {
  name: "about",
  components:{TotoSkillsComponents}
}
</script>