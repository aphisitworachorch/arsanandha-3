<script setup lang="ts">
import {useHead} from "nuxt/app";
const props = defineProps(['id'])
const innerData = reactive({
  from: "",
  message: "",
  reply: "",
})
async function getThankful(id: string) {
  const {data} = await useFetch('/api/thankful/thankful-get', {
    headers: {'Content-Type': 'application/json'},
    body:{
      id,
    },
    method: 'POST'
  });

  innerData.from = data?.value?.result?.from;
  innerData.message = data?.value?.result?.message;
  innerData.reply = data?.value?.result?.reply;
}
await getThankful(props.id)

useHead({
  title: `💌 ข้อความถึง ${innerData.from}`,
  meta:[
    { hid: 'og-type', property: 'og:type', content: 'website' },
    { hid: 'og-title', property: 'og:title' ,content: `ข้อความถึง ${innerData.from}`},
    { hid: 'og-desc', property: 'og:description', content: innerData.reply },
    { hid: 'og-image', property: 'og:image',
      content: 'https://picsum.photos/1600/900?grayscale'
    },
    { hid: 'og-url', property: 'og:url', content: `https://arsanandha.xyz/thankful/${props.id}` },
    { hid: 't-type', name: 'twitter:card', content: 'summary_large_image' },

  ]
})
</script>

<template>
  <div class="transition-all ease-in-out delay-75 container font-apFont p-3 md:p-6 rounded-b-xl rounded-t-xl drop-shadow-2xl glassmorhpism">
    <div class="transition-all duration-50 ease-in-out delay-75 transform-gpu subpixel-antialiased flex flex-col md:flex-row m-3">
      <div class="p-2 text-left rounded-b-xl rounded-t-xl">
        <div class="card max-w-screen text-white font-apThai">
          <div class="card-body">
            <h2 class="card-title text-3xl">ขอบคุณจากใจ</h2>
            <div>
              <p class="text-bold pb-5 text-wrap italic">" ด้วยคำแสดงความยินดีที่ท่านได้เคยกรอกไว้เมื่อไม่กี่ปีที่ผ่านมานี้ <b>เนื่องในโอกาสแสดงความยินดีผู้สำเร็จการศึกษา ณ มหาวิทยาลัยเทคโนโลยีสุรนารี</b> ข้าพเจ้าพึ่งมีโอกาสที่จะได้คุ้ยข้อความดังกล่าวมา เพื่อที่จะเป็นแรงและกำลังใจในการใช้ชีวิตต่อไป."</p>
            </div>
            <div class="flex items-center text-white pb-5">
              <div class="flex-1 border-t-2 border-white"></div>
            </div>
            <div>
              <p class="font-bold pb-5"> ถึง {{innerData.from}}</p>
              <h2 class="text-pretty text-xl break-words whitespace-pre-wrap tracking-wide leading-7">{{innerData.reply}}</h2>
            </div>
            <div class="flex items-center text-white pt-5">
              <div class="flex-1 border-t-2 border-white"></div>
            </div>
            <div class="card-actions pt-5 opacity-10">
              <p>ปล. ข้อความที่ท่านเห็นถูกกู้จาก Database เมื่อ 4 ปีที่แล้ว, ขออภัยที่มาตอบช้ามากๆ.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.glassmorhpism {
  background: rgba( 0, 0, 0, 0.3 );
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  backdrop-filter: blur( 13.5px );
  -webkit-backdrop-filter: blur( 13.5px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
}
</style>