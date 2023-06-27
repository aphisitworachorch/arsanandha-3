<script setup>
const {
  status,
  data,
  lastRefreshedAt,
  getCsrfToken,
  getProviders,
  getSession,
  signIn,
  signOut,
} = useAuth()
</script>
<template>
  <div class="container font-apFont">
    <div class="transition-all duration-50 p-3 text-left" v-if="status === 'authenticated'">
      <div class="card md:w-96 w-60 bg-primary shadow-xl">
        <div class="flex flex-row m-3 items-center">
          <div class="pr-5">
            <div class="avatar items-center pt-2">
              <div class="w-12 rounded-full">
                <img :src="data.user.image"  alt="Spotify Badges"/>
              </div>
            </div>
          </div>
          <div>
            <h2 class="font-apMonoFont font-bold">Hi, {{ data.user.name }}!</h2>
            <h2 class="font-apMonoFont font-light">You're Logged In!</h2>
          </div>
        </div>
      </div>
    </div>
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
            <h2 class="text-xl animate__animated animate__fadeInRight break-words w-72 text-white">{{ customWelcome }}</h2>
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
            <li v-if="status === 'unauthenticated'">
              <button @click="signIn('spotify')">Login to Spotify<div class="badge badge-primary">EXP 💥</div></button>
            </li>
            <li v-if="status === 'authenticated'">
              <button @click="signOut()">Logout</button>
            </li>
          </ul>
        </div>
      </div>
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
      resume: "https://resume.io/r/TH55tWqzE"
    };
  },
  methods: {
    showName() {
      setTimeout(() => {
        this.customGreet = "Arsanandha Aphisitworachorch";
        this.showLogo = true;
        this.customWelcome = `Hi! I'm a Backend Developer
          Involved in Cutting-edge Technology
          with Love and Passion 💖`;
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
      }, 300);
    },
  },
  created() {
    this.showName();
  }
};
</script>

<style scoped>
</style>
