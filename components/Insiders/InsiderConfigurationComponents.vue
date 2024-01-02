<script setup lang="ts">
import InsiderNavBar from "~/layouts/insider.vue";
import {SweetAlertResult} from "sweetalert2";

const $auth = useAuth()
const currentUser = $auth.loggedIn ? await $auth.fetchUser().then(d => d._data.data) : null;
const { $swal } = useNuxtApp()

const dataConfig = reactive({
  weather:{
    enableWeatherScrape: true,
    enableLINENotify: true,
    cronJob:[]
  },
  profile:{
    image_src: '',
    image_name: '',
    image_type: ''
  }
})

function onFileChange(e) {
  let files = e.target.files || e.dataTransfer.files;
  if (!files.length)
    return;
  createImage(files[0]);
}

function createImage(file: Blob) {
  const image = new Image();
  const reader = new FileReader();

  reader.onload = (e) => {
    dataConfig.profile.image_src = e.target.result;
    dataConfig.profile.image_name = file.name;
    dataConfig.profile.image_type = file.type;
  };
  reader.readAsDataURL(file);
}

async function saveWeather(){
  await $swal.fire({
    title: 'แจ้งเตือน',
    text: 'ต้องการบันทึกการตั้งค่าใช่ไหม ?',
    icon: 'question',
    showCancelButton: true,
    allowOutsideClick: false,
    cancelButtonText: "ไม่",
    confirmButtonText: "ใช่"
  }).then(async (result: SweetAlertResult) => {
    if (result.isConfirmed) {
      const {data} = await useFetch('/api/configuration/weather/create', {
        method: 'POST',
        headers:{
          'Authorization': $auth?.strategy?.token?.get()
        },
        body: {
          enableWeatherScrape: dataConfig.weather.enableWeatherScrape,
          enableLINENotify: dataConfig.weather.enableLINENotify,
          cronJob: dataConfig.weather.cronJob.join(" ")
        }
      });
      if (data?.value?.message == "Successful") {
        await $swal.fire({
          position: "top-end",
          toast: true,
          title: 'แจ้งเตือน',
          text: 'บันทึกการตั้งค่าสำเร็จ',
          icon: 'success',
          allowOutsideClick: false,
        }).then(async (result: SweetAlertResult) => {
          if (result.isConfirmed) {
            navigateTo("/insider/configuration");
          }
        })
      }
    }
  });
}

async function saveProfile() {
  await $swal.fire({
    title: 'แจ้งเตือน',
    text: 'ต้องการบันทึกการตั้งค่าใช่ไหม ?',
    icon: 'question',
    showCancelButton: true,
    allowOutsideClick: false,
    cancelButtonText: "ไม่",
    confirmButtonText: "ใช่"
  }).then(async (result: SweetAlertResult) => {
    if (result.isConfirmed) {
      const {data} = await useFetch('/api/configuration/profile/create', {
        method: 'POST',
        headers:{
          'Authorization': $auth?.strategy?.token?.get()
        },
        body: dataConfig?.profile
      });
      if (data?.value?.message == "Successful") {
        await $swal.fire({
          position: "top-end",
          toast: true,
          title: 'แจ้งเตือน',
          text: 'บันทึกการตั้งค่าสำเร็จ',
          icon: 'success',
          allowOutsideClick: false,
        }).then(async (result: SweetAlertResult) => {
          if (result.isConfirmed) {
            navigateTo("/insider/configuration");
          }
        })
      }
    }
  });
}
async function getWeather() {
  const {data} = await useFetch('/api/configuration/weather/get', {
    method: 'GET',
    headers:{
      'Authorization': $auth?.strategy?.token?.get()
    }
  });
  dataConfig.weather.enableLINENotify = data?.value?.data.enableLINENotify;
  dataConfig.weather.enableWeatherScrape = data?.value?.data.enableWeatherScrape;
  dataConfig.weather.cronJob = data?.value?.data?.cronJob?.split(" ");
}

async function getProfileImage() {
  const {data} = await useFetch('/api/configuration/profile/get', {
    method: 'GET',
    headers:{
      'Authorization': $auth?.strategy?.token?.get()
    }
  });
  dataConfig.profile.image_src = data?.value?.data.image_src;
}

await getWeather();
await getProfileImage();
</script>

<template>
  <div class="container font-apMonoFont text-left">
    <div class="collapse collapse-arrow glassmorhpism p-3.5">
      <input type="radio" name="my-accordion-2" checked/>
      <div class="collapse-title text-xl font-medium text-white">
        Weather Scrape Configuration
      </div>
      <div class="collapse-content">
        <form @submit.prevent="saveWeather">
          <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text text-white">Enable Weather Scrape</span>
              <input v-model="dataConfig.weather.enableWeatherScrape" type="checkbox" class="toggle" />
            </label>
            <label class="label cursor-pointer">
              <span class="label-text text-white">Enable LINE Notify</span>
              <input v-model="dataConfig.weather.enableLINENotify" type="checkbox" class="toggle" />
            </label>
            <label class="label cursor-pointer">
              <span class="label-text text-white">CRON</span>
              <input v-model="dataConfig.weather.cronJob[0]" type="text" class="input input-bordered input-sm h-12 w-12 bg-white text-black mr-0.5 p-1 text-md font-bold text-center" />
              <input v-model="dataConfig.weather.cronJob[1]" type="text" class="input input-bordered input-sm h-12 w-12 bg-white text-black mr-0.5 p-1 text-md font-bold text-center" />
              <input v-model="dataConfig.weather.cronJob[2]" type="text" class="input input-bordered input-sm h-12 w-12 bg-white text-black mr-0.5 p-1 text-md font-bold text-center" />
              <input v-model="dataConfig.weather.cronJob[3]" type="text" class="input input-bordered input-sm h-12 w-12 bg-white text-black mr-0.5 p-1 text-md font-bold text-center" />
              <input v-model="dataConfig.weather.cronJob[4]" type="text" class="input input-bordered input-sm h-12 w-12 bg-white text-black mr-0.5 p-1 text-md font-bold text-center" />
            </label>
            <label class="label cursor-pointer">
              <button class="btn btn-secondary">Save</button>
            </label>
          </div>
        </form>
      </div>
    </div>
    <div class="collapse collapse-arrow glassmorhpism p-3.5 mt-5">
      <input type="radio" name="my-accordion-2" checked/>
      <div class="collapse-title text-xl font-medium text-white">
        Main Profile Image
      </div>
      <div class="collapse-content">
        <form @submit.prevent="saveProfile">
          <div class="form-control">
            <label class="label cursor-pointer">
              <div class="flex w-full justify-center items-center">
                <div class="avatar">
                  <div class="w-96 rounded">
                    <img :src="dataConfig.profile.image_src" />
                  </div>
                </div>
              </div>
            </label>
            <label class="label cursor-pointer">
              <span class="label-text text-white">Upload Profile</span>
              <input v-on:change="onFileChange" type="file" class="file-input file-input-bordered file-input-sm w-full max-w-xs" accept="image/jpeg,image/png"/>
            </label>
            <label class="label cursor-pointer">
              <button class="btn btn-secondary">Save</button>
            </label>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.glassmorhpism {
  background: rgba( 144, 19, 254, 0.1 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 13px );
  -webkit-backdrop-filter: blur( 13px );
  border: 1px solid rgba( 255, 255, 255, 0.18 );
}
.swal2-popup {
  @apply font-apThai;
}
</style>