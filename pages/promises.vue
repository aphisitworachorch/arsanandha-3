<template>
  <div class="hero min-h-screen transform-gpu subpixel-antialiased bg-black">
    <div class="hero-content text-center">
      <div class="w-full">
        <iframe class="w-full aspect-video" width="960" height="960" src="https://www.youtube-nocookie.com/embed/jq96IS6DPJw?autoplay=1&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      </div>
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
    { hid: 'og-title', property: 'og:title' ,content: 'Promises : สัญญา'},
    { hid: 'og-desc', property: 'og:description', content: "โอ้เพื่อนเอ๋ยเคยร่วมสนุกกันมา แต่เวลาต้องพาให้เราจากกัน :)" },
    { hid: 'og-image', property: 'og:image',
      content: 'https://picsum.photos/1600/900?grayscale'
    },
    { hid: 'og-url', property: 'og:url', content: 'https://arsanandha.xyz/promises' },
    { hid: 't-type', name: 'twitter:card', content: 'summary_large_image' },

  ]
})
</script>
<script>
export default {
  name: "promises"
}
</script>