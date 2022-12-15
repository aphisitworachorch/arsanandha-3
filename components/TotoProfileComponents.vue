<template>
  <div class="container font-apFont">
    <div class="flex flex-col md:flex-row m-3">
      <div class="p-2">
        <div class="transition-all duration-50 avatar md:hover:pr-4">
          <div class="transition-all duration-50 w-96 rounded-b-xl rounded-t-xl animate__animated animate__fadeIn hover:rotate-1 hover:scale-105">
            <nuxt-img src="/pics/toto-alternative.jpg" alt="Profile with 1 Person" format="webp"/>
          </div>
        </div>
      </div>
      <div class="p-2 text-left">
        <nuxt-img src="/svg/logo.svg" class="w-96 p-5 animate__animated animate__fadeInDown" alt="Logo with arsanandha Text"/>
        <div tabindex="0" class="collapse collapse-open rounded-box">
          <div class="collapse-title peer-checked:rounded-t animate__animated animate__fadeInRight" v-if="showLogo">
            <h1 class="text-2xl">
              {{ customGreet }}
            </h1>
          </div>
          <div class="collapse-content rounded-b"  v-if="showLogo">
            <h2 class="text-xl animate__animated animate__fadeInRight break-words w-72">
              {{ customWelcome }}
            </h2>
            <br/>
          </div>
        </div>
        <div class="dropdown p-3">
          <label tabindex="0" class="btn btn-info m-1">View Profile</label>
          <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-accent rounded-box w-52">
            <li  v-for="data in menu">
              <nuxt-link :to="data.route">{{ data.name }} <div class="badge badge-primary" v-if="data.isnew">NEW 🎉</div></nuxt-link>
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
      menu: []
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