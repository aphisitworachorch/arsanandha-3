<script setup>
</script>
<template>
  <div class="container font-apFont">
    <div  :style="dynamicColorClass" class="card lg:card-side shadow-xl">
      <figure><nuxt-img fit="cover" ref="myImg" format="webp" src="/pics/arsanandha-newpro.png" sizes="lg:400px" alt="Profile with 1 Person" /></figure>
      <div class="card-body text-left">
        <h2 class="card-title text-2xl text-black">{{ customGreet }}</h2>
        <p class="break-words w-80 text-xl text-black">{{ customWelcome }}</p>
        <div class="card-actions justify-end">
          <div class="dropdown p-3">
            <label tabindex="0" class="transition-all duration-50 btn m-1 text-white">View Profile</label>
            <ul tabindex="0" class="dropdown-content menu p-2 shadow text-white rounded-box w-60 bg-accent">
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
      dynamicColorClass: {},
      dynamicButtonClass: {}
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
        })[3],
        button: data?.value?.values.map(x => {
          return {
            'color': x
          }
        })[1],
      };
    }
  },
  async created() {
    this.showName();
    const getColor = await this.getDominant();
    this.dynamicColorClass = getColor.background;
    this.dynamicButtonClass = getColor.button;
  }
};
</script>

<style scoped>
</style>
