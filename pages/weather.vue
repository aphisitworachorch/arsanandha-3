<template>
  <div class="hero min-h-screen transform-gpu subpixel-antialiased">
    <div class="hero-content text-center">
      <TotoWeatherComponents></TotoWeatherComponents>
    </div>
  </div>
</template>
<script setup>
import {useHead} from "nuxt/app";

useHead({
    title: "Weather",
    meta:[
        { hid: 'og-type', property: 'og:type', content: 'website' },
        { hid: 'og-title', property: 'og:title' ,content: 'ARSANANDHA.XYZ Weather'},
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
export default {
  name: "weather"
}
</script>

<style scoped>

</style>