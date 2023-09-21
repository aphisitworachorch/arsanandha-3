<script setup>
</script>
<template>
  <div class="container font-apFont">
    <div class="flex flex-col md:flex-row m-3">
      <div class="transition-all duration-50 p-2">
        <div class="transition-all duration-50 avatar">
          <div class="transition-all duration-50 max-w-screen md:w-96 rounded-b-xl rounded-t-xl animate__animated animate__fadeIn">
            <nuxt-img fit="cover" format="webp" src="/pics/toto-alternative.jpg" width="1200" sizes="sm:70vw md:60vw lg:900px" alt="Profile with 1 Person" />
          </div>
        </div>
      </div>
      <div class="transition-all duration-50 p-2 text-left">
        <nuxt-img fit="cover" sizes="sm:20vw md:60vw lg:80vw xl:100vw" width="3828" height="453" format="webp" src="/svg/ARSANANDHALogo.svg" class="w-96 pl-2 animate__animated animate__fadeInDown invert" alt="Logo with arsanandha Text" />
        <div tabindex="0" class="collapse collapse-open rounded-box">
          <div class="collapse-title peer-checked:rounded-t animate__animated animate__fadeInRight text-white">
            <h1 class="text-2xl">{{ customGreet }}</h1>
          </div>
          <div class="collapse-content rounded-b" v-if="showLogo">
            <h1 class="text-lg animate__animated animate__fadeInRight break-words w-80 text-white">{{ customWelcome }}</h1>
            <br/>
          </div>
        </div>
        <div class="dropdown p-3">
          <label tabindex="0" class="transition-all duration-50 btn m-1 text-white">View Profile</label>
          <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-neutral text-white rounded-box w-60">
            <li v-for="mn in menu" :key="mn.name">
              <nuxt-link :to="mn.route">{{ mn.name }} <div class="badge badge-primary" v-if="mn.isnew">NEW 🎉</div></nuxt-link>
            </li>
            <li>
              <a :href="resume">Resume<div class="badge badge-primary">NEW 🎉</div></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Typed from 'typed.js';
export default {
  name: "TotoProfileComponents",
  data() {
    return {
      customGreet: "",
      showLogo: false,
      customWelcome: "",
      menu: [],
      resume: "https://resume.io/r/TH55tWqzE"
    };
  },
  methods: {
    showName() {
      this.customGreet = "Arsanandha Aphisitworachorch";
      this.showLogo = true;
      this.customWelcome = `👋 Hi! I'm a Backend Developer Involved in Backend Technology\n who wants to be a "Backend Specialist"!\n with a Love of God and a Full Passion for developing applications.`;
      this.menu = [
        {
          name: "Skills",
          route: "/skills",
          isnew: true
        },
        {
          name: "About",
          route: "/about",
          isnew: true
        }
      ];
    }
  },
  created() {
    this.showName();
  }
};
</script>

<style scoped>
</style>
