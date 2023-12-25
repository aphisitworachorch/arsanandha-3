<template>
  <div class="outerContainer">
    <div class="innerContainer">
      <div class="flex flex-col">
        <div>
          <nuxt-img format="webp" src="/svg/26.svg" class="max-w-screen md:w-96 pl-3 pb-5" alt="Logo with arsanandha Text"/>
        </div>
        <div>
          <h2 class="font-apMonoFont text-2xl italic hover:font-extrabold">Happy Birthday! 🎂</h2>
          <h4 class="font-apMonoFont italic hover:font-extrabold">epoch from {{ fromepoch }} to {{ toepoch }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {useHead} from "nuxt/app";
import og from '../assets/jpg/arsanandhaOG.png';
import TotoKatakornViewProfile from "~/components/TotoKatakornViewProfile.vue";

useHead({
  title: "26",
  meta:[
    { hid: 'og-type', property: 'og:type', content: 'website' },
    { hid: 'og-title', property: 'og:title' ,content: '26.ARSANANDHA.XYZ'},
    { hid: 'og-desc', property: 'og:description', content: "26" },
    { hid: 'og-image', property: 'og:image',
      content: '/pics/26-OG.jpg'
    },
    { hid: 'og-url', property: 'og:url', content: 'https://arsanandha.xyz/26' },
    { hid: 't-type', name: 'twitter:card', content: 'summary_large_image' },

  ]
})
</script>
<script>
export default {
  name: "birthday",
  data(){
    return {
      fromepoch: 0,
      toepoch: 0
    }
  },
  beforeCreate() {
    console.log("26");
  },
  mounted() {
    this.startTimer();
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        const bd = new Date(1998,0,7,15,35).valueOf();
        this.fromepoch = bd;
        this.toepoch = new Date().valueOf();
      }, 1000);
    },
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
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