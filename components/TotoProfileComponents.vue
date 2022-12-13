<template>
  <div class="container font-apFont">
    <div class="flex flex-col md:flex-row m-3">
      <div class="p-2">
        <div class="avatar">
          <div class="w-96 rounded-b-xl rounded-t-xl animate__animated animate__fadeIn">
            <img :src="switchProfile"  alt="Profile"/>
          </div>
        </div>
      </div>
      <div class="p-2 text-left">
        <img src="../assets/svg/logo.svg" alt="arsanandha" class="w-96 p-5 animate__animated animate__fadeInDown"/>
        <div tabindex="0" class="collapse collapse-open rounded-box">
          <input type="checkbox" class="peer" />
          <div class="collapse-title peer-checked:rounded-t animate__animated animate__fadeInRight"  v-if="showLogo">
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
          <label tabindex="0" class="btn m-1">View Profile</label>
          <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-accent rounded-box w-52" v-for="data in menu">
            <li>
              <nuxt-link :to="data.route">{{ data.name }} <div class="badge badge-primary" v-if="data.isnew">NEW 🎉</div></nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import totoMain from 'assets/jpg/toto-main.png';
import totoAlternative from 'assets/jpg/toto-alternative.jpg';

export default {
  name: "TotoProfileComponents",
  data() {
    return {
      text: "as soon as possible.",
      customGreet: "",
      showLogo: false,
      switchProfile: new URL(totoMain, import.meta.url).href,
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
        this.switchProfile = new URL(totoAlternative, import.meta.url).href;
        this.positionShow = "Backend Developer";
        this.customWelcome = `Hi! I'm Backend Developer
              Who Involved Cutting-edge Technology
              with Love and Passion 💖`;
        this.menu = [{
          "name":"Skills",
          "route":"/skills",
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