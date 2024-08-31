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
  dynamicColorClass: {},
  dynamicButtonClass: {},
  dynamicTextClass: {},
  dynamicSVGClass: {},
  dynamicCardClass: {},
  images:"",
})

async function getProfileImage() {
  const {data} = await useFetch('/api/configuration/profile/get', {
    method: 'GET'
  });
  dataObject.images = data?.value?.data.image_src;
}

async function showName() {
  dataObject.customGreet = "Arsanandha Aphisitworachorch";
  dataObject.showLogo = true;
  dataObject.positionShow = "DevOps Engineer";
  dataObject.customWelcome = `Hi! I'm Backend Developer
              Who Involved Cutting-edge Technology
              with Love and Passion 💖`;
}


async function getDominant() {
  const {data} = await useFetch('/api/profile/getColor', {
    headers: {'Content-Type': 'application/json'},
    body:{
      image: dataObject.images,
    },
    method: 'POST'
  });
  return {
    background: {
      'background-color': data?.value?.values?.[2]
    },
    button: {
      'background-color': data?.value?.values?.[1],
      'color': data?.value?.values?.[2]
    },
    text: {
      'color': data?.value?.values?.[1]
    },
    svg: {
      'fill': data?.value?.values?.[1],
    },
    card: {
      'background-color': data?.value?.values?.[0]
    },
  };
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
  dataObject.biography = data?.value?.result;
}

await getProfileImage();
const getColor = await getDominant();
dataObject.dynamicColorClass = getColor.background;
dataObject.dynamicButtonClass = getColor.button;
dataObject.dynamicTextClass = getColor.text;
dataObject.dynamicSVGClass = getColor.svg;
dataObject.dynamicCardClass = getColor.card;
</script>
<template>
  <div class="transition-all ease-in-out delay-75 container font-apFont p-3 md:p-6 rounded-none animate__animated animate__fadeInDown drop-shadow-2xl" :style="dataObject.dynamicColorClass">
    <div class="transition-all duration-50 ease-in-out delay-75 transform-gpu subpixel-antialiased flex flex-col md:flex-row m-3">
      <div class="p-2 text-left rounded-none">
        <div class="max-w-screen md:w-96 pl-3 pb-5 animate__animated animate__fadeInDown animate__delay-1s">
          <svg width="100%" height="20%" viewBox="0 0 3828 453" version="1.1" xmlns="http://www.w3.org/2000/svg" :style="dataObject.dynamicSVGClass" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><rect id="Artboard1" x="0" y="0" width="3827.08" height="452.083" style="fill:none;"/><g><path d="M48.458,425.701l106.354,-372.236l101.035,0l105.821,372.236l-59.026,0l-24.461,-87.741l-145.704,0l-24.461,87.741l-59.558,0Zm98.377,-140.918l116.989,0l-54.241,-195.689l-8.508,-0l-54.24,195.689Z" style="fill-rule:nonzero;"/><path d="M376.77,425.701l-0,-372.236l689.672,0c23.043,0 43.339,3.989 60.887,11.965c17.549,7.976 31.197,19.409 40.946,34.299c9.749,14.889 14.624,32.615 14.624,53.176l-0,5.85c-0,23.398 -5.584,42.098 -16.751,56.101c-11.167,14.003 -24.727,23.841 -40.68,29.513l0,8.508c13.472,0.71 24.284,5.23 32.438,13.561c8.154,8.331 12.23,20.295 12.23,35.894l0,123.369l-57.962,0l-0,-115.393c-0,-9.572 -2.482,-17.194 -7.445,-22.866c-4.963,-5.672 -12.939,-8.508 -23.929,-8.508l-646.6,0l0,146.767l-57.43,0Zm57.43,-198.88l625.861,-0c20.562,-0 36.514,-5.229 47.859,-15.687c11.344,-10.458 17.016,-24.727 17.016,-42.807l0,-4.254c0,-18.08 -5.583,-32.35 -16.75,-42.808c-11.167,-10.458 -27.209,-15.687 -48.125,-15.687l-625.861,0l0,121.243Z" style="fill-rule:nonzero;"/><path d="M1341.49,433.146c-28.006,0 -52.822,-4.963 -74.447,-14.889c-21.625,-9.927 -38.553,-24.55 -50.784,-43.871c-12.23,-19.321 -18.346,-42.807 -18.346,-70.459l0,-13.294l56.899,-0l0,13.294c0,26.234 7.888,45.909 23.664,59.026c15.776,13.117 36.78,19.675 63.014,19.675c26.589,0 46.618,-5.583 60.09,-16.75c13.471,-11.167 20.207,-25.614 20.207,-43.339c-0,-11.699 -3.191,-21.271 -9.572,-28.716c-6.381,-7.444 -15.421,-13.382 -27.12,-17.814c-11.699,-4.431 -25.702,-8.597 -42.009,-12.496l-19.676,-4.786c-23.752,-5.672 -44.402,-12.674 -61.951,-21.005c-17.548,-8.331 -31.108,-19.409 -40.68,-33.235c-9.571,-13.826 -14.357,-31.552 -14.357,-53.177c-0,-21.979 5.406,-40.769 16.219,-56.367c10.812,-15.598 25.79,-27.652 44.934,-36.16c19.143,-8.508 41.655,-12.762 67.534,-12.762c25.879,-0 49.011,4.431 69.396,13.294c20.384,8.862 36.425,21.979 48.124,39.35c11.699,17.371 17.549,39.174 17.549,65.408l-0,19.143l-56.899,0l-0,-19.143c-0,-15.953 -3.28,-28.893 -9.838,-38.819c-6.558,-9.927 -15.687,-17.194 -27.386,-21.803c-11.699,-4.608 -25.347,-6.913 -40.946,-6.913c-22.689,0 -40.326,4.698 -52.911,14.092c-12.585,9.395 -18.877,22.423 -18.877,39.085c-0,11.344 2.747,20.65 8.242,27.918c5.495,7.267 13.56,13.205 24.195,17.814c10.636,4.608 23.93,8.685 39.883,12.23l19.675,4.786c24.107,5.318 45.378,12.142 63.812,20.473c18.435,8.331 32.97,19.587 43.605,33.767c10.635,14.181 15.953,32.438 15.953,54.772c-0,22.334 -5.584,41.833 -16.751,58.495c-11.167,16.662 -27.031,29.69 -47.593,39.084c-20.561,9.395 -44.845,14.092 -72.852,14.092Z" style="fill-rule:nonzero;"/><path d="M1493.92,425.701l106.353,-372.236l101.036,0l105.821,372.236l-59.026,0l-24.461,-87.741l-145.704,0l-24.461,87.741l-59.558,0Zm98.377,-140.918l116.988,0l-54.24,-195.689l-8.508,-0l-54.24,195.689Z" style="fill-rule:nonzero;"/><path d="M1822.24,425.701l0,-372.236l110.608,0l101.035,333.949l8.508,0l0,-333.949l56.899,0l0,372.236l-110.607,0l-101.035,-334.48l-8.509,-0l0,334.48l-56.899,0Z" style="fill-rule:nonzero;"/><path d="M2113.86,425.701l106.353,-372.236l101.035,0l105.822,372.236l-59.026,0l-24.461,-87.741l-145.704,0l-24.461,87.741l-59.558,0Zm98.376,-140.918l116.989,0l-54.24,-195.689l-8.508,-0l-54.241,195.689Z" style="fill-rule:nonzero;"/><path d="M2442.17,425.701l0,-372.236l110.607,0l101.036,333.949l8.508,0l0,-333.949l56.899,0l0,372.236l-110.607,0l-101.036,-334.48l-8.508,-0l-0,334.48l-56.899,0Z" style="fill-rule:nonzero;"/><path d="M2735.11,425.701l0,-51.049l49.986,-0l0,-270.137l-49.986,-0l0,-51.05l148.895,0c49.631,0 87.653,12.585 114.064,37.756c26.411,25.17 39.616,63.103 39.616,113.798l0,69.661c0,50.695 -13.205,88.539 -39.616,113.532c-26.411,24.993 -64.433,37.489 -114.064,37.489l-148.895,0Zm107.949,-52.113l41.478,0c32.26,0 56.189,-8.153 71.788,-24.461c15.598,-16.307 23.398,-40.591 23.398,-72.852l-0,-73.384c-0,-32.614 -7.8,-56.898 -23.398,-72.851c-15.599,-15.953 -39.528,-23.93 -71.788,-23.93l-41.478,0l-0,267.478Z" style="fill-rule:nonzero;"/><path d="M3052.56,425.701l-0,-372.236l57.43,0l0,159.53l314.673,0l-0,-159.53l57.431,0l-0,372.236l-57.431,0l-0,-160.593l-314.673,0l0,160.593l-57.43,0Z" style="fill-rule:nonzero;"/><path d="M3496.66,425.701l106.353,-372.236l101.036,0l105.821,372.236l-59.026,0l-24.461,-87.741l-145.704,0l-24.461,87.741l-59.558,0Zm98.377,-140.918l116.988,0l-54.24,-195.689l-8.508,-0l-54.24,195.689Z" style="fill-rule:nonzero;"/></g></svg>
        </div>
        <div tabindex="0" class="collapse collapse-open rounded-none">
          <div class="collapse-title">
            <h1 class="text-2xl font-bold animate__animated animate__fadeInDown animate__delay-1s" :style="dataObject.dynamicTextClass">
              {{ dataObject.customGreet }}
            </h1>
          </div>
          <div class="collapse-content rounded-none">
            <h2 class="text-xl break-words w-72 animate__animated animate__fadeInDown  animate__delay-2s" :style="dataObject.dynamicTextClass">
              {{ dataObject.positionShow }}
            </h2>
            <br/>
          </div>
          <div class="md:pl-4 rounded-none">
            <div class="card max-w-screen md:w-80 text-white font-apMonoFont animate__animated animate__fadeInLeft  animate__delay-3s rounded-none" :style="dataObject.dynamicCardClass">
              <div class="card-body text-black">
                <h3 class="card-title">Current Employment Status</h3>
                <p v-if="dataObject.workingStatus">✔️ Employed</p>
                <p v-if="!dataObject.workingStatus">❌ Unemployed</p>
              </div>
            </div>
          </div>

        </div>
        <div class="pl-1 md:pl-4 pt-5 pb-5 text-left animate__animated animate__fadeInRight animate__delay-5s">
          <nuxt-link to="/" class="transition-all duration-50 btn border-0 text-white font-bold rounded-none"  :style="dataObject.dynamicButtonClass">Back</nuxt-link>
        </div>
      </div>
      <div class="p-2 text-left">
        <div class="overflow-y-scroll scrollbar-hide h-128 w-76 pt-2 font-apMonoFont snap-y">
          <TransitionGroup :css="false" tag="div" class="pb-5 rounded-none">
            <div class="pb-5 rounded-none" v-for="(data, index) in dataObject.biography" :key="data.alias" :data-index="index">
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