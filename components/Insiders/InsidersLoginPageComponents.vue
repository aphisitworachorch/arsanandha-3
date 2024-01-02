<template>
  <div class="container font-apMonoFont animate__animated animate__fadeInDown" >
    <div class="card w-full lg:w-96 text-left glassmorhpism rounded-2xl">
      <figure><img src="https://unsplash.com/photos/Nel8STCcWy8/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTF8fGtleXxlbnwwfHx8fDE3MDM5MTE5NDB8MA&force=true&w=640" alt="Key" /></figure>
      <div class="card-title absolute pl-8 pt-8 text-2xl text-white">🔑 Access Insider</div>

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
          <button class="btn bg-violet-600 border-0 text-white" type="submit">Submit</button>
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
  background: rgba( 144, 19, 254, 0.1 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 13px );
  -webkit-backdrop-filter: blur( 13px );

  border: 1px solid rgba( 255, 255, 255, 0.18 );
}
</style>