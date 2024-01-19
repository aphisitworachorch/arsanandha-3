<template>
  <div class="container font-apMonoFont animate__animated animate__fadeInDown" >
    <div class="card w-full lg:w-96 text-left glassmorhpism rounded-2xl">
      <figure><img src="/pics/KEY-AP.png" alt="Key" /></figure>
      <div class="flex items-center justify-center">
        <div>
          <nuxt-img class="invert" width="200" height="50" src="/svg/INSIDER-AP-SVG.svg"></nuxt-img>
        </div>
      </div>
      <form class="card-body" @submit.prevent="userLogin">
        <div class="label">
          <div class="label-text text-white">
            Username
          </div>
        </div>
        <input v-model="login.username" type="text" class="input input-bordered w-full bg-white text-black" required/>
        <div class="label">
          <div class="label-text text-white">
            Password
          </div>
        </div>
        <input v-model="login.password" type="password" class="input input-bordered w-full bg-white text-black" required/>
        <div class="pt-5">
          <button class="btn bg-black border-0 text-white" type="submit">Submit</button>
        </div>
        <div class="flex items-center text-white pt-5">
          <div class="flex-1 border-t-2 border-white"></div>
          <span class="px-3 text-white">or</span>
          <div class="flex-1 border-t-2 border-white"></div>
        </div>
        <div class="pt-5">
          <a role="button" class="btn bg-blue-600 border-0 text-white">
            <nuxt-link @click="$auth.loginWith('azure_ad')">
              <div class="flex flex-row">
                <div>
                  Login with Microsoft
                </div>
                <div class="pl-2">
                  <svg class="invert" xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z"/></svg>
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
  password: ''
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
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 13px );
  -webkit-backdrop-filter: blur( 13px );

  border: 1px solid rgba( 255, 255, 255, 0.18 );
}
</style>