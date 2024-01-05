<script setup lang="ts">
import InsiderNavBar from "~/layouts/insider.vue";

const $auth = useAuth()
const currentUser = $auth.loggedIn ? await $auth.fetchUser().then(d => d._data.data) : null;
const dataDef = reactive({
  datetime: {}
})
let timer: string | number | NodeJS.Timeout | undefined;
function startTimer() {
  timer = setInterval(() => {
    const date = new Date();
    dataDef.datetime = `${date.toISOString()}`;
  }, 1000);
}
startTimer();
onUnmounted(() => {
  clearInterval(timer);
})
</script>

<template>
  <div class="container font-apMonoFont" >
    <div class="card w-96 text-left glassmorhpism rounded-2xl p-5">
      <figure v-if="!$auth.loggedIn">
        <marquee class="text-white" direction="left" speed="1">Welcome to arsanandha.xyz!</marquee>
      </figure>
      <div v-if="$auth.loggedIn" class="card-title text-white pt-6">Welcome, {{ currentUser?.name }}</div>
      <div v-if="!$auth.loggedIn" class="text-white text-6xl">
        <p>Hi!, Insider</p>
        <p class="text-sm">Now is {{ dataDef.datetime }}</p>
        <nuxt-link to="/insider/login"><button class="btn btn-primary">Login to Insider</button></nuxt-link>
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
</style>