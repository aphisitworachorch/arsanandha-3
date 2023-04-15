<template>
  <div class="container font-apFont">
    <div class="flex flex-col md:flex-row m-3">
      <div class="transition-all duration-50 p-2 hover:skew-y-6">
        <div class="avatar md:hover:pr-4">
          <div class="transition-all duration-50 max-w-screen md:w-96 rounded-b-xl rounded-t-xl animate__animated animate__fadeIn">
            <img src="/public/pics/toto-alternative.jpg" alt="Profile with 1 Person"/>
          </div>
        </div>
      </div>
      <div class="transition-all duration-50 p-2 text-left hover:-skew-y-6">
        <img src="/public/svg/ARSANANDHALogo.svg" class="w-96 p-5 animate__animated animate__fadeInDown invert" alt="Logo with arsanandha Text"/>
        <div tabindex="0" class="collapse collapse-open rounded-box">
          <div class="collapse-title peer-checked:rounded-t animate__animated animate__fadeInRight text-white">
            <h1 class="text-2xl">
              {{ customGreet }}
            </h1>
          </div>
          <div class="collapse-content rounded-b"  v-if="showLogo">
            <h2 class="text-xl animate__animated animate__fadeInRight break-words w-72 text-white">
              {{ customWelcome }}
            </h2>
            <br/>
          </div>
        </div>
        <div class="dropdown p-3">
          <label tabindex="0" class="btn bg-gradient-to-r from-orange-500 to-red-500 hover:from-violet-500 hover:to-orange-500 m-1 text-white">View Profile</label>
          <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-box w-52">
            <li  v-for="data in menu">
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
      text: "as soon as possible.",
      customGreet: "",
      showLogo: false,
      positionShow: "",
      customWelcome: "",
      skills: [],
      menu: [],
      resume: "https://resume.io/r/TH55tWqzE"
    }
  },
  methods: {
    showName: function() {
      setTimeout(() => {
        this.customGreet = "Arsanandha Aphisitworachorch";
        this.showLogo = true;
        this.positionShow = "Backend Developer";
        this.customWelcome = `Hi! I'm Backend Developer
              Who Involved Cutting-edge Technology
              with Love and Passion 💖`;
        this.menu = [{
          "name":"Skills",
          "route":"/skills",
          "isnew": true
        },{
          "name":"About",
          "route":"/about",
          "isnew": true
        }]
      }, 300)

    },
  },
  created() {
    this.showName();
  }
}
</script>

<style scoped>
</style>