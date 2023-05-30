<script setup lang="ts">
import {useHead} from "nuxt/app";
import og from '../assets/jpg/arsanandhaOG.png';
const { query } = useRoute();

useHead({
  title: "In Memorial 🌼",
  meta:[
    { hid: 'og-type', property: 'og:type', content: 'website' },
    { hid: 'og-title', property: 'og:title' ,content: query.password == "10779" ? 'In Memorial: Arsanandha A.' : 'อยู่อย่างมีความหวัง'},
    { hid: 'og-desc', property: 'og:description', content: query.password == "10779" ? "ในความทรงจำ: อัศนันท์ อภิสิทธิ์วรโชติ ผู้ที่มีชีวิตอย่างมีความสุขบนโลกใบนี้กับพระเจ้า": 'การมีชีวิตอยู่อย่างมีความหวัง มันดีเสียยิ่งกว่าทองคำอีก เพราะถ้ามนุษย์ไร้ความหวัง ชีวิตจะดำรงด้วยอะไร ?' },
    { hid: 'og-image', property: 'og:image',
      content: 'https://picsum.photos/1600/900'
    },
    { hid: 'og-url', property: 'og:url', content: 'https://arsanandha.xyz/memorial' },
    { hid: 't-type', name: 'twitter:card', content: 'summary_large_image' },

  ]
})
</script>

<template>
  <div class="hero min-h-screen transform-gpu subpixel-antialiased">
    <div class="hero-content text-center">
      <TotoMemorialComponents></TotoMemorialComponents>
    </div>
  </div>
</template>

<style scoped>

</style>