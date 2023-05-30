<template>
  <div class="container font-apFont">
    <div class="flex flex-col md:flex-row m-3"  v-if="haveSpecialCode">
      <div class="transition-all duration-50 p-2">
        <div class="transition-all duration-50 avatar">
          <div class="transition-all duration-50 max-w-screen md:w-96 rounded-b-xl rounded-t-xl animate__animated animate__fadeIn">
            <nuxt-img format="webp" src="/pics/toto-alternative.jpg" alt="Profile with 1 Person" />
          </div>
        </div>
      </div>
      <div class="transition-all duration-50 p-2 text-left">
        <iframe class="rounded-b-xl rounded-t-xl" width="560" height="385" :src="nowPlay.youtube" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
    <div class="font-apThai text-3xl font-bold break-keep	" v-if="!haveSpecialCode">
      <h1>
        จงชื่นบานอยู่เสมอ จงอธิษฐานอย่างสม่ำเสมอ จงขอบพระคุณในทุกกรณี <br/> เพราะนี่แหละเป็นพระประสงค์ของพระเจ้า สำหรับพวกท่านในพระเยซูคริสต์
      </h1>
    </div>
    <br/>
    <a class="font-apThai font-md font-bold" href="https://www.bible.com/th/bible/174/1TH.5.16-18.THSV11" v-if="!haveSpecialCode">1 เธสะโลนิกา 5:16-18</a>
    <div class="font-apThai text-sm" v-html="nowPlay.lyrics"  v-if="haveSpecialCode">

    </div>
  </div>
</template>

<script>
export default {
  name: "TotoMemorialComponents",
  data() {
    return {
      haveSpecialCode: false,
      nowPlay:{
        youtube:'',
        lyrics:''
      },
      musicList:[{
        youtube: "https://www.youtube-nocookie.com/embed/XepEdeOnNwo?controls=0",
        lyrics: `<i>
          <b><u>ที่ใดจะเหมือนที่แห่งนี้</u></b>
          ที่ข้าได้พบพระพักตร์พระองค์
          นมัสการด้วยจิตวิญญาณความจริง
        </i>`
      },{
        youtube: "https://www.youtube-nocookie.com/embed/bAlkx5oRNxI?controls=0",
        lyrics: `<i>
           โลกนี้เราอยู่ไม่นาน
           <b><u>สวรรค์คือบ้านของเรา</u></b>
           และที่นั้นเรา ไม่ต้องพรากจากกัน
           เราอยู่สวรรค์นิรันดร์
        </i>`
      },{
        youtube: "https://www.youtube-nocookie.com/embed/b6UGRkeJw0U?controls=0",
        lyrics: `<i>
           <b><u>ในทุกเรื่องร้ายๆ มักจะมีพระพรที่ซ่อนอยู่</u></b>
           ไม่มีใครหยั่งรู้ ว่าอนาคตเป็นแบบไหน
           แต่จงมีความหวัง ความเชื่อมั่น ว่าพระเจ้าจะให้
           <b>สิ่งเลวร้ายนั้นกลายเป็นดี</b>
           <b><u>สิ่งเลวร้ายตอนท้ายจะกลาย เป็นดี</u></b>
        </i>`
      },{
        youtube: "https://www.youtube-nocookie.com/embed/k3-nsd0KD0o?controls=0",
        lyrics: `<i>
           <b><u>แม้ว่าฉันหกล้มลงกี่ครั้ง
           ช่วยประคองตัวฉันลุกขึ้นใหม่
           เหนื่อยสักแค่ไหน
           ได้กำลังจากพระองค์มากมาย
           ไม่สบายอ่อนล้าจากสิ่งใด
           พระองค์ทรงรักษาฉันให้หาย
           เล็กหรือใหญ่เจ็บแค่ไหนก็หายดี</u></b>
        </i>`
      }]
    };
  },
  methods: {
    pickRandomElement: function (array) {
      if (array.length === 0) {
        return null; // Return null for an empty array
      }
      const randomIndex = Math.floor(Math.random() * array.length);
      return array[randomIndex];
    },
    randomMusic: function() {
      return this.pickRandomElement(this.musicList);
    }
  },
  created() {
    const {query} = useRoute();
    if (query.password == 10779) {
      this.haveSpecialCode = true;
    }
    const randomAlready = this.randomMusic();
    this.nowPlay.lyrics = `<p>"${randomAlready.lyrics}"</p>`;
    this.nowPlay.youtube = randomAlready.youtube;
  }
};
</script>

<style scoped>
</style>
