<template>
  <div class="container font-apMonoFont glassmorhpism rounded-2xl" >
    <div class="card lg:card-side w-80 lg:w-full lg:h-96 text-left rounded-2xl shadow-2xl">
      <figure><img class="lg:h-128 lg:w-96 object-cover" src="/pics/SS_Thumbnail.png" alt="Key" /></figure>
      <form class="card-body" @submit.prevent="userLogin">
        <div class="flex items-center justify-center lg:justify-start">
          <div>
            <nuxt-img class="invert" width="200" height="50" src="/svg/INSIDER-AP-SVG.svg"></nuxt-img>
          </div>
        </div>
        <div class="label" v-if="!login.isUseManagedLogin">
          <div class="label-text text-white">
            Username
          </div>
        </div>
        <input v-model="login.username" type="text" class="input input-bordered w-full bg-white text-black" required  v-if="!login.isUseManagedLogin"/>
        <div class="label"  v-if="!login.isUseManagedLogin">
          <div class="label-text text-white">
            Password
          </div>
        </div>
        <input v-model="login.password" type="password" class="input input-bordered w-full bg-white text-black" required  v-if="!login.isUseManagedLogin"/>
        <div class="pt-5"  v-if="!login.isUseManagedLogin">
          <button class="btn bg-black border-0 text-white" type="submit">Submit</button>
        </div>
<!--        <div class="flex items-center text-white pt-5"  v-if="!login.isUseManagedLogin">-->
<!--          <div class="flex-1 border-t-2 border-white"></div>-->
<!--          <span class="px-3 text-white">or</span>-->
<!--          <div class="flex-1 border-t-2 border-white"></div>-->
<!--        </div>-->
        <div class="pt-5"  v-if="login.isUseManagedLogin">
          <a role="button">
            <nuxt-link @click="$auth.loginWith('azure_ad')">
              <div class="card w-64 lg:w-96 lg:h-40 shadow-xl image-full">
                <figure><nuxt-img src="/pics/windows_8_wallpaper_by_minhtrimatrix_d23oqzn.jpg" /></figure>
                <div class="card-body">
                  <nuxt-img src="/pics/1656696222microsoft-logo-white.webp"></nuxt-img>
                  <div class="card-title text-white pt-5">
                    <h3 class="font-light">Login with Microsoft</h3>
                  </div>
                </div>
              </div>
            </nuxt-link>
          </a>
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type {SweetAlertResult} from "sweetalert2";

const login = reactive({
  username: '',
  password: '',
  isUseManagedLogin: true,
});

const $auth = useAuth();
const { $swal } = useNuxtApp()
async function userLogin() {
  try {
    const response = await $auth.loginWith('local', {
      body: login
    })
    const responseGetter = response._data;
    if (responseGetter.message === "Successful") {
      await $swal.fire({
        title: 'แจ้งเตือน',
        text: 'เข้าสู่ระบบสำเร็จ',
        icon: 'success'
      }).then(async (result: SweetAlertResult) => {
        if (result.isConfirmed) {
          navigateTo("/");
        }
      })
    }else{
      await $swal.fire({
        title: 'แจ้งเตือน',
        text: 'เข้าสู่ระบบไม่สำเร็จ',
        icon: 'error'
      })
    }
  } catch (err) {
    console.log(err)
  }
}
</script>
<style scoped>
.glassmorhpism {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.37);
  backdrop-filter: blur( 13px );
  -webkit-backdrop-filter: blur( 13px );

  border: 1px solid rgba( 255, 255, 255, 0.18 );
}
</style>