<script setup>
import Footers from "~/components/Footers.vue";
</script>
<template>
  <div class="container font-apFont  animate__animated animate__fadeInDown">
    <div :style="dynamicColorClass" class="card rounded-b-none lg:card-side">
      <figure class="object-cover animate__animated animate__fadeIn animate__delay-1s"><nuxt-img fit="cover" ref="profileImage" format="webp" src="/pics/arsanandha-newpro.png" class="object-cover xl:w-96 xl:h-128 lg:w-80 lg:h-128 md:w-128 md:h-96 sm:w-128 sm:h-64" alt="Profile with 1 Person" /></figure>
      <div class="card-body text-left animate__animated animate__fadeIn animate__delay-2s">
        <h2 class="card-title text-2xl text-black font-bold animate__animated animate__fadeIn animate__delay-3s invert">{{ customGreet }}</h2>
        <p class="text-sm text-black font-bold animate__animated animate__fadeIn animate__delay-3s invert">{{ currentPosition }}</p>
        <p class="break-words w-96 text-xl text-black font-apMonoFont animate__animated animate__fadeIn animate__delay-4s invert">" {{ customWelcome }} "</p>
        <div class="card-actions justify-end">
          <div class="dropdown p-3 grid-flow-col ">
            <label tabindex="0" :style="dynamicButtonClass" class="transition-all duration-50 rounded-xl p-5 m-1 text-white animate__animated animate__fadeIn animate__delay-6s ">View Profile</label>
            <ul tabindex="0" :style="dynamicButtonClass" class="dropdown-content menu p-2 shadow text-white rounded-box w-60">
              <li v-for="mn in menu" :key="mn.name">
                <nuxt-link :to="mn.route">{{ mn.name }} <div class="badge badge-primary" v-if="mn.isnew">NEW 🎉</div></nuxt-link>
              </li>
              <li>
                <a :href="resume">Resume</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div :style="dynamicColorClass"  class="-z-10 card rounded-t-none rounded-b-2xl shadow-xl items-center p-4 text-neutral-content">
      <nuxt-img class="invert animate__animated animate__fadeIn animate__delay-5s " width="200" height="50" src="/svg/ARSANANDHALogo.svg"></nuxt-img>
    </div>
  </div>
</template>

<script>
export default {
  name: "TotoProfileComponents",
  data() {
    return {
      customGreet: "",
      showLogo: false,
      customWelcome: "",
      menu: [],
      resume: "https://resume.io/r/TH55tWqzE",
      currentPosition: "",
      dynamicColorClass: {},
      dynamicButtonClass: {},
      dynamicTextClass: {},
      loaded: false
    };
  },
  methods: {
    showName() {
      this.customGreet = "Arsanandha Aphisitworachorch";
      this.showLogo = true;
      this.customWelcome = `Hi! I'm a Backend Developer Involved in Backend Technology\n who wants to be a "Backend Specialist"!\n with a Love of God and a Full Passion for developing applications.`;
      this.currentPosition = "DevOps Engineer";
      this.menu = [
        {
          name: "Skills",
          route: "/skills",
          isnew: false
        },
        {
          name: "About",
          route: "/about",
          isnew: false
        },
        {
          name: "Thailand Weather Report",
          route: "/weather",
          isnew: true
        }
      ];
    },
    async getDominant() {
      const { data } = await useFetch('/api/getColor',{
        query:{
          image: 'pics/arsanandha-newpro.png'
        },
        method: 'GET'
      });
      return {
        background: data?.value?.values.map(x => {
          return {
            'background-color': x
          }
        })[0],
        button: data?.value?.values.map(x => {
          return {
            'background-color': x
          }
        })[1],
        text: data?.value?.values.map(x => {
          return {
            'color': x
          }
        })[2],
      };
    }
  },
  async created() {
    this.showName();
    const getColor = await this.getDominant();
    this.dynamicColorClass = getColor.background;
    this.dynamicButtonClass = getColor.button;
    this.dynamicTextClass = getColor.text;
  },
  mounted() {
    this.loaded = true;
  }
};
</script>

<style scoped>
</style>
