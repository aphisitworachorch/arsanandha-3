<template>
  <div class="transition-all duration-200 ease-in-out card w-72 bg-base-100 hover:bg-gradient-to-r from-blue-700 to-blue-900 shadow-xl hover:-translate-y-2">
    <figure>
      <nuxt-img format="webp" loading="lazy" :src="images_src" class="w-72 h-72 object-cover"/>
    </figure>
    <div class="card-body text-left">
      <h2 class="card-title font-apThai">
        {{ details?.firstname?.split("นาย")?.find(data => data != "") }} {{ details?.lastname }}
      </h2>
      <a class="btn font-apThai" :onclick="details?.student_id?.split(' ')?.join('') + '.showModal()'" data-toggle="modal">ดูข้อมูล</a>
    </div>
  </div>
  <dialog :id="details?.student_id?.split(' ')?.join('')" class="modal text-left">
    <div class="modal-box">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <h3 class="font-bold text-lg">
        <h1 class="font-apThai text-2xl">รายละเอียด</h1>
        <hr/>
        <br/>
        <h2 class="font-apThai">
          {{ details?.firstname?.split("นาย")?.find(data => data != "") }} {{ details?.lastname }}
        </h2>
        <div>
          <div class="badge badge-accent gap-2 shadow-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:white;" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>          {{details?.student_id}}
          </div>
        </div>
        <div>
          <div class="badge badge-accent gap-2 shadow-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:white;" d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z"/></svg> ชั้นปี {{details?.year}}
          </div>
        </div>
        <div>
          <div v-if="checkUnderlying(details) == 'ไม่มี'" class="badge badge-info gap-2 shadow-2xl text-white">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:white;" d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM160 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H224v48c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V352H112c-8.8 0-16-7.2-16-16V304c0-8.8 7.2-16 16-16h48V240z"/></svg> ไม่มีโรคประจำตัว
          </div>
        </div>
        <br/>
        <div v-if="checkUnderlying(details) != 'ไม่มี'" class="badge badge-warning gap-2 shadow-2xl text-white">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:white;" d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM160 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H224v48c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V352H112c-8.8 0-16-7.2-16-16V304c0-8.8 7.2-16 16-16h48V240z"/></svg> โรคประจำตัว {{ checkUnderlying(details) }}
        </div>
        <div>
          <div v-if="!details?.fb_url?.match(urlPattern)" class="badge badge-outline font-apThai">FB {{ details?.fb_url }}</div>
          <a :href="details?.fb_url" v-if="details?.fb_url?.match(urlPattern)" class="badge badge-outline hover:border-green-400 hover:font-bold font-apThai">👉 ลิงก์เฟสบุ๊ก</a>
        </div>
        <div>
          <div v-if="!details?.ig_url?.match(urlPattern)" class="badge badge-outline font-apThai">IG {{ details?.ig_url }}</div>
          <a :href="details?.ig_url" v-if="details?.ig_url?.match(urlPattern)" class="badge badge-outline hover:border-green-400 hover:font-bold font-apThai">👉 ลิงก์ไอจี</a>
        </div>
        <br/>
        <div class="flex flex-col font-apThai">
          ชื่อเล่น {{ details?.nickname }} <br/>
          อายุ {{ details?.age }} <br/>
          เบอร์ {{ details?.telephone }} <br/>
        </div>
        <br/>
        <p class="font-apThai">
          <b>เกิดปี</b> {{ details?.buddhist_birth_year }} <br/>
          <b>ส่วนสูง</b> {{ details?.height }} เซนติเมตร<br/>
          <b>น้ำหนัก</b> {{ details?.weight }} กิโลกรัม<br/>
          <span class="font-bold" v-if="details.did_you_katakorn_before">✅ เคยเป็นคทากรมาก่อน</span><span class="font-bold" v-if="!details?.did_you_katakorn_before">❎ ไม่เคยเป็นคทากรมาก่อน</span> <br/>
        </p>
      </h3>
    </div>
  </dialog>
</template>

<script>

export default {
  name: "KatakornCardComponents",
  props:['images_src','details'],
  data(){
    return {
      urlPattern: /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?/,
      visible: false,
    }
  },
  methods:{
    checkUnderlying(data) {
      return data.underlying_disease == "-" || data.underlying_disease == "ไม่มี" || data.underlying_disease == "ไม่มีโรคประจำตัว" || data.underlying_disease == "" || data.underlying_disease == " " ? "ไม่มี" : data.underlying_disease
    },
  }
}
</script>
<style scoped>

</style>