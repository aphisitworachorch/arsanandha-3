<script setup>
</script>
<template>
  <div class="container font-apFont">
    <div  :style="dynamicColorClass" class="card lg:card-side shadow-xl">
      <figure><nuxt-img fit="cover" ref="myImg" format="webp" src="/pics/toto-alternative.jpg" sizes="lg:400px" alt="Profile with 1 Person" /></figure>
      <div class="card-body text-left">
        <h2 class="card-title text-2xl text-black">{{ customGreet }}</h2>
        <p class="break-words w-80 text-xl text-black">{{ customWelcome }}</p>
        <div class="card-actions justify-end">
          <div class="dropdown p-3">
            <label tabindex="0" class="transition-all duration-50 btn m-1 text-white">View Profile</label>
            <ul tabindex="0" class="dropdown-content menu p-2 shadow text-white rounded-box w-60 bg-a">
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
<!--    <div class="flex flex-col md:flex-row m-3">-->
<!--      <div class="transition-all duration-50 p-2">-->
<!--        <div class="transition-all duration-50 avatar">-->
<!--          <div class="transition-all duration-50 max-w-screen md:w-96 rounded-b-xl rounded-t-xl animate__animated animate__fadeIn">-->
<!--            <nuxt-img fit="cover" format="webp" src="/pics/toto-alternative.jpg" width="1200" sizes="sm:70vw md:60vw lg:900px" alt="Profile with 1 Person" />-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="transition-all duration-50 p-2 text-left">-->
<!--        <div tabindex="0" class="collapse collapse-open rounded-box">-->
<!--          <div class="collapse-title peer-checked:rounded-t animate__animated animate__fadeInRight text-white">-->
<!--            <h1 class="text-2xl">{{ customGreet }}</h1>-->
<!--          </div>-->
<!--          <div class="collapse-content rounded-b" v-if="showLogo">-->
<!--            <h1 class="text-lg animate__animated animate__fadeInRight break-words w-80 text-white">{{ customWelcome }}</h1>-->
<!--            <br/>-->
<!--            <nuxt-img width="120" height="50" title="Show on HTTP/3 Technology" fit="cover" src="pics/IETF-Badge-HTTP3@3x-1200x521.png"></nuxt-img>-->
<!--          </div>-->
<!--        </div>-->

<!--      </div>-->
<!--    </div>-->
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
          image: 'pics/toto-alternative.jpg'
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
  }
};
</script>

<style scoped>
</style>
