<template>
  <div class="container font-apFont"  >
    <div class="flex flex-col md:flex-row m-3">
      <div class="p-2">
        <div class="avatar">
          <div class="w-96 rounded-b-xl rounded-t-xl">
            <img :src="switchProfile" />
          </div>
        </div>
      </div>
      <div class="p-2 text-left">
        <img src="../assets/svg/logo.svg" alt="arsanandha" class="p-5"/>
        <div tabindex="0" class="collapse collapse-open rounded-box">
          <input type="checkbox" class="peer" />
          <div class="collapse-title text-primary-content peer-checked:rounded-t">
            <h1 class="text-2xl">
              {{ customGreet }}
            </h1>
          </div>
          <div class="collapse-content text-primary-content rounded-b">
            <h2 class="text-xl">
              Hi! I'm Backend Developer <br/>
              Who Involved <b>Cutting-edge Technology</b> <br/>
              with Love and Passion 💖 <br/>
            </h2>
            <br/>
            <nuxt-link to="/about" class="btn btn-info font-bold rounded">View Profile</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import totoMain from 'assets/jpg/toto-main.png';
import totoAlternative from 'assets/jpg/toto-alternative.jpg';
export default {
  name: "TotoProfileComponents",
  data() {
    return {
      text: "as soon as possible.",
      customGreet: "",
      showLogo: true,
      switchProfile: new URL(totoMain, import.meta.url).href,
      positionShow: "",
      skills: []
    }
  },
  methods: {
    showName: function() {
      setTimeout(() => {
        this.customGreet = "Asanan Aphisitworachorch";
        this.showLogo = false;
        this.switchProfile = new URL(totoAlternative, import.meta.url).href;
        this.positionShow = "Backend Developer";
      }, 300)

    },
  },
  created() {
    this.showName();
  }
}
</script>

<style scoped>
</style>