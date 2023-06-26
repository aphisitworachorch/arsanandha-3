<template>
  <div class="container font-apFont">
    <div class="flex flex-col md:flex-row m-3">
      <div class="transition-all duration-50 p-2">
        <div class="transition-all duration-50 avatar">
          <div class="transition-all duration-50 max-w-screen md:w-96 rounded-b-xl rounded-t-xl animate__animated animate__fadeIn">
            <nuxt-img format="webp" src="/pics/toto-alternative.jpg" width="1200" height="1200" sizes="sm:70vw md:60vw lg:900px" alt="Profile with 1 Person" />
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
          <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-neutral text-white rounded-box w-52">
            <li v-for="data in menu" :key="data.name">
              <nuxt-link :to="data.route">{{ data.name }} <div class="badge badge-primary" v-if="data.isnew">NEW 🎉</div></nuxt-link>
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
    }
  },
  created() {
    this.showName();
  }
};
</script>

<style scoped>
</style>
