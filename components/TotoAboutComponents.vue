<script setup lang="ts">
import AboutCardComponents from "~/components/Card/AboutCardComponents.vue";

const dataObject = reactive({
  text: "as soon as possible.",
  customGreet: "",
  showLogo: false,
  positionShow: "",
  customWelcome: "",
  biography:[],
  workingStatus: true,
})

async function showName() {
  dataObject.customGreet = "Arsanandha Aphisitworachorch";
  dataObject.showLogo = true;
  dataObject.positionShow = "DevOps Engineer";
  dataObject.customWelcome = `Hi! I'm Backend Developer
              Who Involved Cutting-edge Technology
              with Love and Passion 💖`;
}

onBeforeMount(async () => {
  await showName();
  await fetchPortfolioData();
})
async function fetchPortfolioData() {
  const { data } = await useFetch(`api/profile/about`,{
    server: true,
    lazy: true,
  });
  dataObject.biography = data?.value?.data;
}
</script>
<template>
  <div class="transition-all ease-in-out delay-75 container font-apFont bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg p-3 md:p-6 rounded-b-xl rounded-t-xl animate__animated animate__fadeInDown drop-shadow-2xl">
    <div class="transition-all duration-50 ease-in-out delay-75 transform-gpu subpixel-antialiased flex flex-col md:flex-row m-3">
      <div class="p-2 text-left rounded-b-xl rounded-t-xl">
        <nuxt-img format="webp" sizes="sm:20vw md:60vw lg:80vw xl:100vw" width="3828" height="453" src="/svg/ARSANANDHALogo.svg" class="max-w-screen md:w-96 pl-3 pb-5 animate__animated animate__fadeInDown animate__delay-1s" alt="Logo with arsanandha Text"/>
        <div tabindex="0" class="collapse collapse-open rounded-box">
          <div class="collapse-title">
            <h1 class="text-2xl text-black font-bold  animate__animated animate__fadeInDown animate__delay-1s">
              {{ dataObject.customGreet }}
            </h1>
          </div>
          <div class="collapse-content rounded-b">
            <h2 class="text-xl break-words w-72 text-black  animate__animated animate__fadeInDown  animate__delay-2s">
              {{ dataObject.positionShow }}
            </h2>
            <br/>
          </div>
          <div class="md:pl-4">
            <div class="card max-w-screen md:w-80 bg-secondary text-white font-apMonoFont animate__animated animate__fadeInLeft  animate__delay-3s">
              <div class="card-body">
                <h3 class="card-title">Current Employment Status</h3>
                <p v-if="dataObject.workingStatus">✔️ Employed</p>
                <p v-if="!dataObject.workingStatus">❌ Unemployed</p>
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
          <TransitionGroup :css="false" tag="div" class="pb-5">
            <div class="pb-5 rounded" v-for="(data, index) in dataObject.biography" :key="data.alias" :data-index="index">
              <AboutCardComponents v-bind:biography-data="data"></AboutCardComponents>
            </div>
          </TransitionGroup>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>