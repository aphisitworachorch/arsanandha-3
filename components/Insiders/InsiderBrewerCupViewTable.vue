<script setup lang="ts">
import {SweetAlertResult} from "sweetalert2";

const {$swal} = useNuxtApp()
const instance = getCurrentInstance();

const dataConfig = reactive({
  brewerList: [],
  paginate:{
    search: "",
    pageSize: 300,
    pageNumber: 1,
    competitionRounds: undefined,
  },
  group:{
    "BREWING": 0,
    "CUP_TASTER": 0,
    "MULTIPLE_TYPES": 0,
    "TOTAL": 0
  },
  masterTypeData:{
    BREWING_NORMAL: "Brewing (3500 บาท)",
    CUP_TASTER_NORMAL: "Cup Taster (2000 บาท)",
    BREWING_PLUS_CUP_TASTER_NORMAL: "Brewing + Cup Taster (4500 บาท)",
    BREWING_EARLY_BIRD: "Brewing (3000 บาท) (Early-Bird)",
    CUP_TASTER_EARLY_BIRD: "Cup Taster (1500 บาท) (Early-Bird)",
    BREWING_PLUS_CUP_TASTER_EARLY_BIRD: "Brewing + Cup Taster (4500 บาท) (Early-Bird)",
  },
  masterTypeSize:{
    34: "SS (อก 34)",
    36: "S (อก 36)",
    38: "M (อก 38)",
    40: "L (อก 40)",
    42: "XL (อก 42)",
    44: "2XL (อก 44)",
    46: "3XL (อก 46)",
    48: "4XL (อก 48)",
    50: "5XL (อก 50)",
    52: "6XL (อก 52)",
  },
})

async function downloadFile() {
  try {
    fetch('/api/configuration/brewer/download',{
      method: "GET"
    }).then( res => res.blob() ).then( blob => {
      const file = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = file;
      a.download = `export_file_${Date.now()}.xlsx`;
      document.body.appendChild(a);
      a.click();
      a.remove();
    });
  }catch(error){
    throw error;
  }
}

async function getSummary() {
  try {
    const fetchData = await $fetch('/api/configuration/brewer/summary',{
      method: "GET"
    })
    if (fetchData?.message === "Successful") {
      dataConfig.group = fetchData?.data;
    }
  }catch(error){
    throw error;
  }
}

async function searchData() {
  try {
    const fetchData = await $fetch('/api/configuration/brewer/list',{
      method: "POST",
      body: dataConfig.paginate
    })
    if (fetchData?.message === "Successful") {
      dataConfig.brewerList = fetchData?.data?.result;
    }
    await getSummary();
  }catch(error){
    throw error;
  }
}

await searchData();
await getSummary();

function uponToCompetitionResultStyle(competitionResults: object) {
  return competitionResults?.compulsoryRoundPassed && !competitionResults?.semiFinalRoundPassed && !competitionResults?.semiFinalRoundTwoPassed ? {
    "background-color": "green",
    "color":"white"
  } : competitionResults?.semiFinalRoundPassed && !competitionResults?.semiFinalRoundTwoPassed ? {
    "background-color": "yellow"
  } : competitionResults?.semiFinalRoundTwoPassed && !competitionResults?.finalRoundPassed ? {
    "background-color": "red",
    "color":"white"
  } : competitionResults?.finalRoundPassed ? {
    "background-color": "magenta",
    "color":"white"
  } : {};
}

function getCompetitionText(competitionResults: object) {
  return competitionResults?.compulsoryRoundPassed && !competitionResults?.semiFinalRoundPassed && !competitionResults?.semiFinalRoundTwoPassed ? "ผ่านรอบคัดเลือก" : competitionResults?.semiFinalRoundPassed && !competitionResults?.semiFinalRoundTwoPassed ? "ผ่านรอบเซมิไฟนอล" : competitionResults?.semiFinalRoundTwoPassed && !competitionResults?.finalRoundPassed ? "ผ่านรอบเซมิไฟนอล 2" : competitionResults?.finalRoundPassed ? "เข้ารอบไฟนอล" : "ยังไม่เข้ารอบ";
}

async function updateCompetitorsWinner(applicationId: string, competitionTypes: string, competitorsData?: object) {
  if (applicationId !== ""){
    const classifyRounds = competitorsData?.compulsoryRoundPassed && !competitorsData?.semiFinalRoundPassed && !competitorsData?.semiFinalRoundTwoPassed ? {
      roundText: "รอบ Semi-Final 1",
      roundEnum: "SEMI_1_ROUNDS"
    } : competitorsData?.semiFinalRoundPassed && !competitorsData?.semiFinalRoundTwoPassed ? {
      roundText: "รอบ Semi-Final 2",
      roundEnum: "SEMI_2_ROUNDS"
    } : competitorsData?.semiFinalRoundTwoPassed ? {
      roundText: "รอบ Final",
      roundEnum: "FINAL_ROUNDS"
    } : {
      roundText: "รอบคัดเลือก",
      roundEnum: "COMPULSORY_ROUNDS"
    };

    if (competitionTypes == "BREWING_NORMAL" || competitionTypes == "BREWING_EARLY_BIRD") {
      await $swal.fire({
        title: `ผ่านเข้ารอบ ${classifyRounds.roundText}`,
        icon: 'question',
        showCancelButton: true,
        allowOutsideClick: false,
        cancelButtonText: "ยกเลิก",
        confirmButtonText: "ใช่ เข้ารอบ"
      }).then(async (result: SweetAlertResult) => {
        if (result.isConfirmed) {
          const data = await $fetch('/api/configuration/brewer/pass-round', {
            method: 'POST',
            body: {
              applicationId: applicationId,
              competitionRounds: classifyRounds.roundEnum,
            }
          });
          if (data?.message == "Successful") {
            await searchData();
            await nextTick();
            await $swal.fire({
              position: "top-end",
              toast: true,
              title: 'แจ้งเตือน',
              text: 'บันทึกการตั้งค่าสำเร็จ',
              icon: 'success',
              allowOutsideClick: false,
            })
          }
        }
      });

    } else if (competitionTypes == "CUP_TASTER_NORMAL" || competitionTypes == "CUP_TASTER_EARLY_BIRD") {
      await $swal.fire({
        title: 'บันทึกสายแข่ง',
        html: `
      <div>
        <input id="groupNumberCupTaster" class="swal2-input" placeholder="หมายเลขการแข่งขัน Cup Taster"/>
      </div>
      `,
        showCancelButton: true,
        allowOutsideClick: false,
        cancelButtonText: "ยกเลิก",
        confirmButtonText: "ยืนยันการบันทึก"
      }).then(async (result: SweetAlertResult) => {
        if (result.isConfirmed) {
          const data = await $fetch('/api/configuration/brewer/round', {
            method: 'POST',
            body: {
              applicationId: applicationId,
              groupNumberCupTaster: document.getElementById("groupNumberCupTaster")?.value,
            }
          });
          if (data?.message == "Successful") {
            await searchData();
            await $swal.fire({
              position: "top-end",
              toast: true,
              title: 'แจ้งเตือน',
              text: 'บันทึกการตั้งค่าสำเร็จ',
              icon: 'success',
              allowOutsideClick: false,
            })
          }
        }
      });
    } else {
      await $swal.fire({
        title: 'บันทึกสายแข่ง',
        html: `
      <div>
        <input id="groupNumberBrewing" class="swal2-input" placeholder="หมายเลขการแข่งขัน Brewing"/>
        <input id="groupNumberCupTaster" class="swal2-input" placeholder="หมายเลขการแข่งขัน Cup Taster"/>
      </div>
      `,
        showCancelButton: true,
        allowOutsideClick: false,
        cancelButtonText: "ยกเลิก",
        confirmButtonText: "ยืนยันการบันทึก"
      }).then(async (result: SweetAlertResult) => {
        if (result.isConfirmed) {
          const data = await $fetch('/api/configuration/brewer/round', {
            method: 'POST',
            body: {
              applicationId: applicationId,
              groupNumberBrewing: document.getElementById("groupNumberBrewing")?.value,
              groupNumberCupTaster: document.getElementById("groupNumberCupTaster")?.value,
            }
          });
          if (data?.message == "Successful") {
            await searchData();
            await $swal.fire({
              position: "top-end",
              toast: true,
              title: 'แจ้งเตือน',
              text: 'บันทึกการตั้งค่าสำเร็จ',
              icon: 'success',
              allowOutsideClick: false,
            })
          }
        }
      });
    }
  }
}

async function addCompetitionRound(applicationId: string, competitionTypes: string){
  if (applicationId !== ""){
    if (competitionTypes == "BREWING_NORMAL" || competitionTypes == "BREWING_EARLY_BIRD") {
      await $swal.fire({
        title: 'บันทึกสายแข่ง',
        html: `
      <div>
        <input id="groupNumberBrewing" class="swal2-input" placeholder="หมายเลขการแข่งขัน Brewing"/>
      </div>
      `,
        showCancelButton: true,
        allowOutsideClick: false,
        cancelButtonText: "ยกเลิก",
        confirmButtonText: "ยืนยันการบันทึก"
      }).then(async (result: SweetAlertResult) => {
        if (result.isConfirmed) {
          const data = await $fetch('/api/configuration/brewer/round', {
            method: 'POST',
            body: {
              applicationId: applicationId,
              groupNumberBrewing: document.getElementById("groupNumberBrewing")?.value,
            }
          });
          if (data?.message == "Successful") {
            await searchData();
            await $swal.fire({
              position: "top-end",
              toast: true,
              title: 'แจ้งเตือน',
              text: 'บันทึกการตั้งค่าสำเร็จ',
              icon: 'success',
              allowOutsideClick: false,
            })
          }
        }
      });
    } else if (competitionTypes == "CUP_TASTER_NORMAL" || competitionTypes == "CUP_TASTER_EARLY_BIRD") {
      await $swal.fire({
        title: 'บันทึกสายแข่ง',
        html: `
      <div>
        <input id="groupNumberCupTaster" class="swal2-input" placeholder="หมายเลขการแข่งขัน Cup Taster"/>
      </div>
      `,
        showCancelButton: true,
        allowOutsideClick: false,
        cancelButtonText: "ยกเลิก",
        confirmButtonText: "ยืนยันการบันทึก"
      }).then(async (result: SweetAlertResult) => {
        if (result.isConfirmed) {
          const data = await $fetch('/api/configuration/brewer/round', {
            method: 'POST',
            body: {
              applicationId: applicationId,
              groupNumberCupTaster: document.getElementById("groupNumberCupTaster")?.value,
            }
          });
          if (data?.message == "Successful") {
            await searchData();
            await $swal.fire({
              position: "top-end",
              toast: true,
              title: 'แจ้งเตือน',
              text: 'บันทึกการตั้งค่าสำเร็จ',
              icon: 'success',
              allowOutsideClick: false,
            })
          }
        }
      });
    } else {
      await $swal.fire({
        title: 'บันทึกสายแข่ง',
        html: `
      <div>
        <input id="groupNumberBrewing" class="swal2-input" placeholder="หมายเลขการแข่งขัน Brewing"/>
        <input id="groupNumberCupTaster" class="swal2-input" placeholder="หมายเลขการแข่งขัน Cup Taster"/>
      </div>
      `,
        showCancelButton: true,
        allowOutsideClick: false,
        cancelButtonText: "ยกเลิก",
        confirmButtonText: "ยืนยันการบันทึก"
      }).then(async (result: SweetAlertResult) => {
        if (result.isConfirmed) {
          const data = await $fetch('/api/configuration/brewer/round', {
            method: 'POST',
            body: {
              applicationId: applicationId,
              groupNumberBrewing: document.getElementById("groupNumberBrewing")?.value,
              groupNumberCupTaster: document.getElementById("groupNumberCupTaster")?.value,
            }
          });
          if (data?.message == "Successful") {
            await searchData();
            await $swal.fire({
              position: "top-end",
              toast: true,
              title: 'แจ้งเตือน',
              text: 'บันทึกการตั้งค่าสำเร็จ',
              icon: 'success',
              allowOutsideClick: false,
            })
          }
        }
      });
    }
  }
}
</script>

<template>
  <div class="container font-apMonoFont text-left w-dvw">
    <div class="overflow-x-auto bg-white rounded-xl">
      <div class="m-3 font-apThai">
        <div class="flex flex-row text-center">
          <div class="mr-2">
            ยอด Brewing <h1 class="font-bold text-2xl">{{ dataConfig.group.BREWING }}</h1>
          </div>
          <div class="mr-2">
            ยอด Cup Taster <h1 class="font-bold text-2xl">{{ dataConfig.group.CUP_TASTER }}</h1>
          </div>
          <div class="mr-2">
            ยอด สองประเภท <h1 class="font-bold text-2xl">{{ dataConfig.group.MULTIPLE_TYPES }}</h1>
          </div>
          <div class="mr-2">
            รวมทั้งหมด <h1 class="font-bold text-2xl">{{ dataConfig.group.TOTAL }}</h1>
          </div>
        </div>
      </div>
      <div class="justify-items-end m-3 font-apThai">
        <div class="flex flex-row">
          <div class="mr-2">
            <input type="text" @change="searchData" v-model="dataConfig.paginate.search" placeholder="ชื่อ - นามสกุล" class="input input-bordered bg-white text-black w-full max-w-xs font-apThai" />
          </div>
          <div class="mr-2">
            <button class="btn btn-info" @click="searchData">โหลดข้อมูลใหม่</button>
          </div>
          <div class="mr-2">
            <button class="btn btn-info" @click="downloadFile">ดาวน์โหลด Excel</button>
          </div>
        </div>
      </div>
      <table class="table font-apThai table-auto">
        <thead>
          <tr>
            <th></th>
            <th>ประเภทการสมัคร</th>
            <th>ชื่อ-นามสกุล ภาษาไทย</th>
            <th>ชื่อ-นามสกุล อังกฤษ</th>
            <th>หมายเลขการสมัคร</th>
            <th>ชื่อเล่น</th>
            <th>รอบแข่ง Brewing</th>
            <th>รอบแข่ง Cup Taster</th>
            <th>ไซส์เสื้อ</th>
            <th>สถานะ</th>
            <th></th>
          </tr>
        </thead>
        <tbody v-for="(data,index) in dataConfig.brewerList" :style="uponToCompetitionResultStyle(data.competitionResults)">
          <td>{{ index+1 }}</td>
          <td>{{ dataConfig.masterTypeData[data.competitionTypes] }}</td>
          <td>{{ data.firstNameTH }} {{ data.lastNameTH }}</td>
          <td>{{ data.firstNameEN }} {{ data.lastNameEN }}</td>
          <td><kbd>{{ data.applicationAliasId }}</kbd></td>
          <td>{{ data.nickName }}</td>
          <td>{{ data.competitionTypes == "BREWING_NORMAL" || data.competitionTypes == "BREWING_EARLY_BIRD" || data.competitionTypes == "BREWING_PLUS_CUP_TASTER_NORMAL" || data.competitionTypes == "BREWING_PLUS_CUP_TASTER_EARLY_BIRD" ? data.groupNumberBrewing : "ไม่มีรายการ" }}</td>
          <td>{{ data.competitionTypes == "CUP_TASTER_NORMAL" || data.competitionTypes == "CUP_TASTER_EARLY_BIRD" || data.competitionTypes == "BREWING_PLUS_CUP_TASTER_NORMAL" || data.competitionTypes == "BREWING_PLUS_CUP_TASTER_EARLY_BIRD" ? data.groupNumberCupTaster : "ไม่มีรายการ" }}</td>
          <td>{{ dataConfig.masterTypeSize[data.shirtSize] }}</td>
          <td>
            <div class="badge badge-info text-white w-36">{{ getCompetitionText(data.competitionResults) }}</div>
          </td>
          <td v-show='!((data.competitionTypes == "BREWING_NORMAL" || data.competitionTypes == "BREWING_EARLY_BIRD" || data.competitionTypes == "BREWING_PLUS_CUP_TASTER_NORMAL" || data.competitionTypes == "BREWING_PLUS_CUP_TASTER_EARLY_BIRD") && data.groupNumberBrewing != null || (data.competitionTypes == "CUP_TASTER_NORMAL" || data.competitionTypes == "CUP_TASTER_EARLY_BIRD" || data.competitionTypes == "BREWING_PLUS_CUP_TASTER_NORMAL" || data.competitionTypes == "BREWING_PLUS_CUP_TASTER_EARLY_BIRD") && data.groupNumberCupTaster != null)'>
            <button class="btn btn-info w-24" @click="addCompetitionRound(data.applicationId, data.competitionTypes)">เพิ่มสายการแข่ง</button>
          </td>
          <td v-show='!data?.competitionResults?.finalRoundPassed'>
            <button class="btn btn-warning w-32" @click="updateCompetitorsWinner(data.applicationId, data.competitionTypes, data.competitionResults)">อัพเดตการเข้ารอบ</button>
          </td>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.glassmorhpism {
  background: rgba(144, 19, 254, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13px);
  -webkit-backdrop-filter: blur(13px);
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.swal2-popup {
  @apply font-apThai;
}
</style>