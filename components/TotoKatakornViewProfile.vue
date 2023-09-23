
<template>
  <div class="container font-apFont">
    <h1 class="text-3xl font-apThai">รายชื่อคทากร</h1>
    <div class="flex md:flex-row flex-col flex-wrap items-center">
      <div class="p-3 items-center" v-for="data in retrieved">
        <KatakornCardComponents :images_src="data.thumbnails" :details="useOmit(data,['images_url'])"></KatakornCardComponents>
      </div>
    </div>
  </div>
</template>

<script>
import KatakornCardComponents from "~/components/Card/KatakornCardComponents.vue";
export default {
  name: "TotoKatakornViewProfile",
  components: {KatakornCardComponents},
  data() {
    return {
      visibleItem: false,
      retrieved: [],
    }
  },
  methods:{
    async fetchData() {
      const { data: retrieveData } = await useFetch('https://nicodemus.arsanandha.xyz/katakorn/list/katakorn/B5970544',{
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Credentials": "true",
        },
        method: 'GET',
        responseType: 'json'
      });
      this.retrieved = retrieveData.value.data;
    }
  },
  async created() {
    await this.fetchData();
  }
}
</script>
<style scoped>

</style>