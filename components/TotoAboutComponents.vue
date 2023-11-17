<template>
  <div class="container font-apFont bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg p-3 md:p-6 rounded-b-xl rounded-t-xl animate__animated animate__fadeInDown drop-shadow-2xl">
    <div class="transition-all duration-50 ease-in-out delay-75 transform-gpu subpixel-antialiased flex flex-col md:flex-row m-3">
      <div class="p-2 text-left rounded-b-xl rounded-t-xl">
        <nuxt-img format="webp" sizes="sm:20vw md:60vw lg:80vw xl:100vw" width="3828" height="453" src="/svg/ARSANANDHALogo.svg" class="max-w-screen md:w-96 pl-3 pb-5 animate__animated animate__fadeInDown animate__delay-1s" alt="Logo with arsanandha Text"/>
        <div tabindex="0" class="collapse collapse-open rounded-box">
          <div class="collapse-title">
            <h1 class="text-2xl text-black font-bold  animate__animated animate__fadeInDown animate__delay-1s">
              {{ customGreet }}
            </h1>
          </div>
          <div class="collapse-content rounded-b">
            <h2 class="text-xl break-words w-72 text-black  animate__animated animate__fadeInDown  animate__delay-2s">
              {{ positionShow }}
            </h2>
            <br/>
          </div>
          <div class="md:pl-4">
            <div class="card max-w-screen md:w-80 bg-secondary text-white font-apMonoFont animate__animated animate__fadeInLeft  animate__delay-3s">
              <div class="card-body">
                <h3 class="card-title">Current Employment Status</h3>
                <p v-if="workingStatus">✔️ Employed</p>
                <p v-if="!workingStatus">❌ Unemployed</p>
              </div>
            </div>
          </div>

        </div>
        <div class="pl-1 md:pl-4 pt-5 pb-5 text-left animate__animated animate__fadeInRight animate__delay-5s">
          <nuxt-link to="/" class="transition-all duration-50 btn border-0 text-white font-bold rounded">Back</nuxt-link>
        </div>
      </div>
      <div class="p-2 text-left">
        <div class="overflow-y-scroll scrollbar-hide h-128 w-76 pt-2 font-apMonoFont snap-y">
          <TransitionGroup :css="false" tag="div" class="pb-5" @after-enter="onEnter" @leave="onLeave">
            <div class="pb-5 rounded" v-for="(data, index) in biography" :key="data.alias" :data-index="index">
              <div class="card bg-info shadow-xl image-full snap-start animate__animated animate__fadeInUp animate__delay-4s">
                <figure><nuxt-img fit="cover" width="1500" height="1500" format="webp" :src="data.image" :alt="data.name" class="w-96 scale-150"/></figure>
                <div class="card-body">
                  <h2 class="card-title text-white">{{ data.name }}</h2>
                  <ul v-for="(list, index) in data.details" class="text-sm list-disc pl-5 text-white font-bold" :key="list.name" :data-index="index">
                    <li>
                      {{ list.name }}
                      <ul v-if="data.isWork" class="md:w-96 font-light">
                        <li>"Duration {{ list.duration }}"</li>
                      </ul>
                      <ul v-if="list.message != null" class="italic break-words md:w-96 font-light">
                        <li>{{ list.message }}</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TransitionGroup>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import gsap from "gsap";

export default {
  name: "TotoAboutComponents",
  data() {
    return {
      text: "as soon as possible.",
      customGreet: "",
      showLogo: false,
      positionShow: "",
      customWelcome: "",
      biography:[],
      workingStatus: true,
    }
  },
  methods: {
    showName: async function() {
      this.customGreet = "Arsanandha Aphisitworachorch";
      this.showLogo = true;
      this.positionShow = "Backend Developer";
      this.customWelcome = `Hi! I'm Backend Developer
              Who Involved Cutting-edge Technology
              with Love and Passion 💖`;
    },
    onEnter: function(el, done) {
      gsap.from(el, {
        opacity: 0,
        y: 100,
        delay: el.dataset.index * 0.60,
        onComplete: done
      })
    },
    onLeave: function(el, done) {
      gsap.to(el, {
        opacity: 0,
        y: 100,
        delay: el.dataset.index * 0.60,
        onComplete: done
      })
    },
    async fetchPortfolioData() {
      const { data, refresh } = await useFetch('https://nicodemus.arsanandha.xyz/profile',{
        headers:{
          'x-api-key': '81ba41d9-5d3e-4b4e-9063-aa8b79360f8d',
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Credentials": "true",
        },
        server: true
      });
      this.biography = data.value.data;
    }
  },
  async beforeMount() {
    await this.showName();
    await this.fetchPortfolioData();
  },
}
</script>

<style scoped>
</style>