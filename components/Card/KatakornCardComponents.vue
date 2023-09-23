
<template>
  <div class="defaultNonCandidate">
    <figure>
      <nuxt-img format="webp" loading="lazy" :src="images_src" class="w-72 h-72 object-cover"/>
    </figure>
    <div class="card-body text-left">
      <h2 class="card-title font-apThai">
        {{ details?.firstname?.split("นาย")?.find(data => data != "") }} {{ details?.lastname }}
      </h2>
      <div class="flex flex-row gap-2 text-left">
        <div class="grow">
          <a class="btn font-apThai" :onclick="details?.student_id?.split(' ')?.join('') + '.showModal()'" data-toggle="modal"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:white;" d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>  ดูข้อมูล</a>
        </div>
        <div>
          <a class="btn btn-warning font-apThai" @click="markCandidated(details?.id)">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:white;" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
          </a>
        </div>
        <div>
          <a class="btn btn-info font-apThai" :href="details?.downloadURL">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:white;" d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM376.9 294.6L269.8 394.5c-3.8 3.5-8.7 5.5-13.8 5.5s-10.1-2-13.8-5.5L135.1 294.6c-4.5-4.2-7.1-10.1-7.1-16.3c0-12.3 10-22.3 22.3-22.3l57.7 0 0-96c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 96 57.7 0c12.3 0 22.3 10 22.3 22.3c0 6.2-2.6 12.1-7.1 16.3z"/></svg>
          </a>
        </div>
      </div>
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
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path style="fill:white;" d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z"/></svg> ชั้นปี {{details?.year}} / สำนักวิชา {{ details?.faculty }}
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
    async markCandidated(id) {
      const { $swal } = useNuxtApp()
      await $swal.fire({
        title: 'แจ้งเตือน',
        text: 'คุณต้องการจะเคาะคนนี้หรือไม่ ?',
        icon: 'info',
        confirmButtonText: 'ใช่',
        showCancelButton: true,
        cancelButtonText: 'ไม่'
      }).then(async result => {
        if (result.isConfirmed) {
          const { data: retrieveData, status: dataStatus } = await useFetch(`https://nicodemus.arsanandha.xyz/katakorn/candidate/${id}`,{
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Headers": "*",
              "Access-Control-Allow-Credentials": "true",
            },
            method: 'POST',
            responseType: 'json'
          });
          if (dataStatus !== 200 || dataStatus !== 201) {
            $swal.fire({
              title: 'แจ้งเตือน',
              text: 'เคาะไม่ได้ !',
              icon: 'error',
            })
          }else{
            const getValue = retrieveData.value.data;

            if (getValue.isCandidated) {
              $swal.fire({
                title: 'แจ้งเตือน',
                text: 'เยี่ยมจ้า เคาะคนนี้แล้ว 1',
                icon: 'success',
              })
            }
          }
        }
      });

    }
  }
}
</script>
<style scoped>
.defaultNonCandidate {
  @apply transition-all duration-200 ease-in-out card w-72 bg-base-100 hover:bg-gradient-to-r from-blue-700 to-blue-900 shadow-xl hover:-translate-y-2
}
.candidated {
  @apply transition-all duration-200 ease-in-out card w-72 bg-emerald-500 hover:bg-gradient-to-b from-blue-500 to-green-500 shadow-xl hover:-translate-y-2 text-white
}
</style>