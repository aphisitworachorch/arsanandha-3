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
  images: "",
  warnings: [],
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

async function getEarthquakes() {
  const {data} = await useFetch('/api/profile/earthquakes-alert', {
    method: 'GET'
  });
  dataObject.warnings = data?.value?.result;
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
await getEarthquakes();
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
  <div class="container font-apFont">
    <div class="card rounded md:w-full w-80 bg-gradient-to-r from-white to-red-500 shadow mb-5 font-apThai p-4 animate__animated animate__fadeInDown">
      <h3 class="text-left text-xl font-bold">⚠️ ประกาศเตือนภัยแผ่นดินไหว (จากกองเฝ้าระวังแผ่นดินไหว กรมอุตุนิยมวิทยา)</h3>
      <div v-for="data in dataObject.warnings">
        <div class="text-wrap text-left align-right p-2">
          <b>แผ่นดินไหว ณ {{ data?.country?.thai_name_country }} วันที่/เวลา {{ new Date(data?.timestamp).toLocaleString("th-TH") }}</b>
          <br/>
          <b class="text-error">ความแรง {{ data?.magnitude }} แมกนิจูด</b>
          <br/>
          <b>ความลึก {{ data?.depth }} กิโลเมตร (Phases {{ data?.phases }})</b>
          <br/>
          <a :href="data?.details_link" class="font-bold btn btn-warning">📗 รายละเอียดทั้งหมด</a>
        </div>
      </div>
    </div>
    <div :style="$auth.loggedIn ? { 'background-color': '#3271CD' } : dataObject.dynamicColorClass" class="card rounded-b-none lg:card-side lg:w-full sm:w-full md:w-full w-80">
      <figure class="object-cover animate__animated animate__fadeIn animate__delay-1s flex">
        <nuxt-img ref="profileBackground" format="webp" src="pics/26-OG.jpg" class="avatarBackground" alt="Profile Background" />
        <nuxt-img ref="profileImage" format="webp" src="pics/transparent-ap.png" class="avatarObject" alt="Profile with 1 Person" />
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
.avatarObject {
  @apply object-cover max-[390px]:w-96 max-[390px]:h-60 max-[414px]:w-80 max-[550px]:h-60 max-[768px]:w-128 max-[768px]:h-72 max-[1020px]:w-128 max-[1020px]:h-72 w-96 h-128 origin-bottom transition-all transform-gpu ease-in-out duration-500 translate-y-72 hover:translate-y-24 max-[390px]:translate-x-0 max-[390px]:translate-y-24 max-[390px]:hover:translate-x-36 max-[390px]:object-contain max-[390px]:object-left max-[414px]:translate-x-0 max-[414px]:translate-y-24 max-[414px]:hover:translate-x-36 max-[414px]:object-contain max-[414px]:object-left max-[430px]:-translate-x-20 max-[430px]:translate-y-24 max-[430px]:hover:translate-x-20 max-[430px]:object-contain max-[550px]:translate-x-0 max-[550px]:translate-y-24 max-[550px]:hover:translate-x-36 max-[550px]:object-contain max-[1020px]:-translate-x-36 max-[1020px]:translate-y-32 max-[1020px]:hover:translate-x-36 max-[1020px]:object-contain
}
.avatarBackground {
  @apply object-cover max-[390px]:w-96 max-[390px]:h-60 max-[414px]:w-80 max-[550px]:h-60 max-[768px]:w-128 max-[768px]:h-72 max-[1020px]:w-128 max-[1020px]:h-72 w-96 h-128 absolute inset-0 -z-10 max-[390px]:rounded-t-2xl max-[414px]:rounded-t-2xl max-[550px]:rounded-t-2xl max-[768px]:rounded-t-2xl max-[1020px]:rounded-t-2xl rounded-tl-2xl
}
</style>
