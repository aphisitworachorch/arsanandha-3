<script setup lang="ts">
import InsiderNavBar from "~/layouts/insider.vue";

const $auth = useAuth()
const currentUser = $auth.loggedIn ? await $auth.fetchUser().then(d => d._data.data) : null;
const testX = await $auth.$storage.getUniversal("_token.aad");
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
      <div v-if="$auth.loggedIn" class="card-title text-white ">Welcome, {{ currentUser?.name }}</div>
      <p class="text-sm">Now is {{ dataDef.datetime }}</p>
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