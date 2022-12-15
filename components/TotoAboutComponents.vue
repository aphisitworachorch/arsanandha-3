<template>
  <div class="container font-apFont bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg p-3 md:p-6 rounded-b-xl rounded-t-xl animate__animated animate__fadeIn drop-shadow-2xl">
    <div class="transition-all duration-50 flex flex-col md:flex-row m-3">
      <div class="p-2 text-left rounded-b-xl rounded-t-xl">
        <nuxt-img src="/svg/logo.svg" class="w-96 pl-3 pb-5 animate__animated animate__fadeInDown invert" alt="Logo with arsanandha Text"/>
        <div tabindex="0" class="collapse collapse-open rounded-box">
          <div class="collapse-title ">
            <h1 class="text-2xl animate__animated animate__fadeInDown text-black">
              {{ customGreet }}
            </h1>
          </div>
          <div class="collapse-content rounded-b">
            <h2 class="text-xl animate__animated animate__fadeInDown break-words w-72 text-black">
              {{ positionShow }}
            </h2>
            <br/>
          </div>
          <div class="md:pl-4">
            <div class="card w-96 md:w-80 bg-gradient-to-r from-blue-700 to-blue-900 text-white font-apMonoFont">
              <div class="card-body">
                <h3 class="card-title">Current Employment Status</h3>
                <p v-if="workingStatus">✔️ Employed</p>
                <p v-if="!workingStatus">❌ Unemployed</p>
              </div>
            </div>
          </div>

        </div>
        <div class="pl-1 md:pl-4 pt-5 pb-5 text-left">
          <nuxt-link to="/" class="transition-all duration-50 btn bg-gradient-to-r from-orange-500 to-red-500 hover:from-violet-500 hover:to-orange-500 border-0 text-white font-bold rounded">Back</nuxt-link>
        </div>
      </div>
      <div class="p-2 text-left">
        <div class="overflow-y-scroll scrollbar-hide h-128 w-76 pt-2 font-apMonoFont">
          <TransitionGroup :css="false" tag="div" class="pb-5" @after-enter="onEnter" @leave="onLeave">
            <div class="pb-5" v-for="(data, index) in biography" :key="data.alias" :data-index="index">
              <div class="card bg-inherit	shadow-xl image-full">
                <figure><nuxt-img :src="data.image" :alt="data.name" format="webp" class="w-96 scale-150"/></figure>
                <div class="card-body">
                  <h2 class="card-title text-white">{{ data.name }}</h2>
                  <ul v-for="(list, index) in data.details" class="text-sm list-disc pl-5 text-white font-bold" :key="list.name" :data-index="index">
                    <li>
                      {{ list.name }}
                      <ul v-if="data.iswork" class="md:w-96 font-light">
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
      workingStatus: false,
    }
  },
  methods: {
    showName: function() {
      this.customGreet = "Arsanandha Aphisitworachorch";
      this.showLogo = true;
      this.positionShow = "Backend Developer";
      this.customWelcome = `Hi! I'm Backend Developer
              Who Involved Cutting-edge Technology
              with Love and Passion 💖`;
      this.biography = [{
        name: "Educational",
        alias: "educational",
        iswork: false,
        image: "https://images.unsplash.com/photo-1604134967494-8a9ed3adea0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        details:[{
          name: "Kietikun Wittaya School (Middle School)",
          message: "Study from Grade 7-9"
        },{
          name: "Assumption College Nakhon Ratchasima (High School)",
          message: "Study from Grade 10-12"
        },{
          name: "Suranaree University of Technology (College)",
          message: "Study in (Enterprise Software) from Year 1-4"
        }]
      },{
        name: "Volunteering",
        alias: "volunteering",
        iswork: false,
        image: "https://images.unsplash.com/photo-1461532257246-777de18cd58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
        details:[{
          name: "Bible.com Localization",
          message: "Translation for Bible Plan (English-to-Thai)"
        },{
          name: "W501 Musixmatch Lyrics",
          message: "Sync & Tag W501 Christian Songs"
        },{
          name: "Nexus Church Team",
          message: "Serving God with Technology and Holiness with Real-world Situations"
        },{
          name: "SUT Student Council",
          message: "In roles of `Public Relations` and Make `Graphics Design` for `สภานักศึกษามหาวิทยาลัยเทคโนโลยีสุรนารี`"
        },{
          name: "SUT Student Dormitory Committee",
          message: "In roles of `Public Relations` and Make `Graphics Design` for `หอพักสุรนิเวศ 7` and Execute/Administrate for General Student Dormitory Discipline"
        },{
          name: "Sippanondha Camp",
          message: "In roles of `Public Relations` and Make `VTR` for `ค่ายสิปปนนท์`"
        }]
      },{
        name: "Work Experiences",
        alias: "work_exp",
        image: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
        iswork: true,
        details:[{
          name: "(Internship) Benchmark Electronics",
          message: "Work in Python Stacks (Windows IIS / Redis / Django Frameworks)",
          duration: "~ 4 Months"
        },{
          name: "BizPotential",
          message: "Work in PHP Stacks (Windows IIS / PHP / MSSQL or Oracle) with ERP Product",
          duration: "~ 3 Months"
        },{
          name: "MeMessage (Korat.com)",
          message: "Work in PHP Stacks (Windows IIS / PHP (CodeIgniter) / MariaDB) with e-Commerce Product",
          duration: "~ 7 Months"
        },{
          name: "ApplicationDD LTD",
          message: "Work in Many of Technology Stacks (Windows IIS / Docker / Ubuntu / NestJS / PHP (Laravel) / TypeScript / MinIO / Python / PostgreSQL / Redis) with Software House-like",
          duration: "~ 1 Year"
        },{
          name: "CommonGround",
          message: "Work in Many of Technology Stacks (Ubuntu / GitLab CI/CD / DigitalOcean Platforms / Cloudflare / PostgreSQL / Redis / AWS S3-like / Python) with MARCOM Tech Platform",
          duration: "~ 6 Months"
        }]
      }]
    },
    onEnter: function(el, done) {
      console.log(el);
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
  },
  created() {
    this.showName();
  }
}
</script>

<style scoped>
</style>