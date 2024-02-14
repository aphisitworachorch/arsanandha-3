<script setup lang="ts">
/**
 * Profile Components
 */
interface RouteList {
  name: string;
  route: string;
  isnew: boolean;
}
const $auth = useAuth()

const dataObject = reactive({
  customGreet: "",
  showLogo: false,
  customWelcome: "",
  menu: [{}],
  resume: "https://resume.io/r/TH55tWqzE",
  currentPosition: "",
  dynamicColorClass: {},
  dynamicButtonClass: {},
  dynamicTextClass: {},
  dynamicSVGClass: {},
  loaded: false,
  userInfo: {},
  images: ""
})

function showName() {
  dataObject.customGreet = "Arsanandha Aphisitworachorch";
  dataObject.showLogo = true;
  dataObject.customWelcome = `Hi! I'm a Backend Developer Involved in Backend Technology\n who wants to be a "Backend Specialist"!\n with a Love of God and a Full Passion for developing applications.`;
  dataObject.currentPosition = "DevOps Engineer";
  dataObject.menu = [
    {
      name: "Skills",
      route: "/skills",
      isnew: false
    },
    {
      name: "About",
      route: "/about",
      isnew: false
    },
    {
      name: "Thailand Weather Report",
      route: "/weather",
      isnew: true
    }
  ];
}

async function getProfileImage() {
  const {data} = await useFetch('/api/configuration/profile/get', {
    method: 'GET'
  });
  dataObject.images = data?.value?.data.image_src;
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
      'background-color': data?.value?.values?.[0]
    },
    button: {
      'background-color': data?.value?.values?.[1],
      'color': data?.value?.values?.[2]
    },
    text: {
      'color': data?.value?.values?.[2]
    },
    svg: {
      'fill': data?.value?.values?.[2],
    }
  };
}

showName()
await getProfileImage();
const getColor = await getDominant();
dataObject.dynamicColorClass = getColor.background;
dataObject.dynamicButtonClass = getColor.button;
dataObject.dynamicTextClass = getColor.text;
dataObject.dynamicSVGClass = getColor.svg;

onMounted(() => {
  dataObject.loaded = true;
})

const isAAD = $auth.$storage.getUniversal("strategy") === "azure_ad" ? {
  string: "Login via Azure AD",
  strategy: $auth.$storage.getUniversal("strategy")
} : {
    string: "You're Not Logged in via Azure AD",
    strategy: $auth.$storage.getUniversal("strategy")
};

const currentUser = $auth.loggedIn ? await $auth.fetchUser().then(d => d._data.data) : null;
</script>

<template>
  <div class="container font-apFont animate__animated animate__zoomIn">
    <div :style="$auth.loggedIn ? { 'background-color': '#3271CD' } : dataObject.dynamicColorClass" class="card rounded-b-none lg:card-side lg:w-full sm:w-full md:w-full w-80">
      <figure class="object-cover animate__animated animate__fadeIn animate__delay-1s">
        <nuxt-img v-if="!$auth.loggedIn" ref="profileImage" format="webp" :src="dataObject.images" class="object-cover xl:w-96 xl:h-128 lg:w-80 lg:h-128 md:w-128 md:h-96 w-128 h-64" alt="Profile with 1 Person" />
        <nuxt-img v-if="$auth.loggedIn" ref="profileImage" format="webp" src="pics/SS_Thumbnail.png" class="object-cover xl:w-96 xl:h-128 lg:w-80 lg:h-128 md:w-128 md:h-96 w-128 h-64" alt="Profile with 1 Person" />
      </figure>
      <div class="card-body text-left animate__animated animate__fadeIn animate__delay-2s">
        <h2 class="card-title text-2xl text-black font-bold animate__animated animate__fadeIn animate__delay-3s" :style="$auth.loggedIn ? { 'color': 'white' } : dataObject.dynamicTextClass">{{ dataObject.customGreet }}</h2>
        <p class="text-sm text-black font-bold animate__animated animate__fadeIn animate__delay-3s" :style="$auth.loggedIn ? { 'color': 'white' } : dataObject.dynamicTextClass">{{ dataObject.currentPosition }}</p>
        <p class="break-words lg:w-96 sm:w-96 md:w-96 w-full text-xl text-black font-apMonoFont animate__animated animate__fadeIn animate__delay-4s" :style="$auth.loggedIn ? { 'color': 'white' } : dataObject.dynamicTextClass">" {{ dataObject.customWelcome }} "</p>
        <div class="card-actions justify-end pt-5">
          <div class="dropdown p-3 grid-flow-col">
            <label tabindex="0" v-if="$auth.loggedIn" :style="isAAD.strategy === 'azure_ad' ? { 'background-color': '#0080FF' } : dataObject.dynamicButtonClass" class="transition-all duration-50 rounded-xl p-5 m-1 text-white animate__animated animate__fadeIn animate__delay-6s ">🚪 Menu</label>
            <label tabindex="0" v-if="!$auth.loggedIn" :style="isAAD.strategy === 'azure_ad' ? { 'background-color': '#0080FF' } : dataObject.dynamicButtonClass" class="transition-all duration-50 rounded-xl p-5 m-1 text-white animate__animated animate__fadeIn animate__delay-6s ">View Profile</label>
            <ul tabindex="0" :style="isAAD.strategy === 'azure_ad' ? { 'background-color': '#0080FF','color':'white' } : dataObject.dynamicButtonClass" class="dropdown-content menu p-2 shadow rounded-box w-60">
              <li v-if="!$auth.loggedIn" v-for="mn in dataObject.menu" :key="mn.name">
                <nuxt-link :to="mn.route">{{ mn.name }} <div class="badge badge-primary" v-if="mn.isnew">NEW 🎉</div></nuxt-link>
              </li>
              <li v-if="!$auth.loggedIn">
                <a :href="dataObject.resume">Resume</a>
              </li>
              <li v-if="!$auth.loggedIn">
                <nuxt-link to="/insider/login">Insider Login <div class="badge badge-neutral">🔑 INSIDER</div></nuxt-link>
              </li>
              <li v-if="$auth.loggedIn">
                <nuxt-link href="/insider/me">Insider Access <div class="badge badge-neutral">🔑 INSIDER</div></nuxt-link>
              </li>
              <li v-if="$auth.loggedIn">
                <nuxt-link @click="$auth.logout()">Logout <div class="badge badge-neutral">🔑 INSIDER</div></nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div :style="$auth.loggedIn ? { 'background-color': '#3271CD' } : dataObject.dynamicColorClass"  class="-z-10 card rounded-t-none rounded-b-2xl shadow-xl items-center p-4 text-neutral-content lg:w-full sm:w-full md:w-full w-80">
      <nuxt-img :style="dataObject.dynamicSVGClass" v-if="$auth.loggedIn" class="animate__animated animate__fadeIn animate__delay-5s " width="200" height="50" src="/svg/INSIDER-AP-SVG.svg"></nuxt-img>
      <nuxt-img :style="dataObject.dynamicSVGClass" v-if="!$auth.loggedIn" class="animate__animated animate__fadeIn animate__delay-5s " width="200" height="50" src="/svg/ARSANANDHALogo.svg"></nuxt-img>
    </div>
  </div>
</template>

<style scoped>
</style>
