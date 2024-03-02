<script setup lang="ts">
import InsiderNavBar from "~/layouts/insider.vue";
import {SweetAlertResult} from "sweetalert2";

const $auth = useAuth()
const currentUser = $auth.loggedIn ? await $auth.fetchUser().then(d => d?._data?.data) : null;
const {$swal} = useNuxtApp()

const dataConfig = reactive({
  brewerList: [],
  paginate:{
    search: "",
    pageSize: 300,
    pageNumber: 1
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
  }
})

async function prevPage() {
  if (dataConfig.paginate.pageNumber < 1) {
    dataConfig.paginate.pageNumber = 0;
  }
  dataConfig.paginate.pageNumber--;
  await searchData();
}

async function nextPage() {
  dataConfig.paginate.pageNumber++;
  await searchData();
}

async function searchData() {
  try {
    const fetchData = useFetch('/api/configuration/brewer/list',{
      method: "POST",
      body: dataConfig.paginate,
      headers:{
        'Authorization': $auth?.strategy?.token?.get()
      },
    })
    if (fetchData.data.value?.message === "Successful") {
      dataConfig.brewerList = fetchData.data.value?.data?.result;
    }
  }catch(error){
    throw error;
  }
}

onBeforeMount(async () => {
  await searchData();
})
</script>

<template>
  <div class="container font-apMonoFont text-left">
    <div class="overflow-x-auto bg-white rounded-xl">
      <div class="justify-items-end  m-3 font-apThai">
        <div class="flex flex-row">
          <div class="mr-2">
            <input type="text" @change="searchData" v-model="dataConfig.paginate.search" placeholder="ชื่อ - นามสกุล" class="input input-bordered bg-white text-black w-full max-w-xs font-apThai" />
          </div>
        </div>
      </div>
      <table class="table font-apThai table-auto ">
        <thead>
          <tr>
            <th></th>
            <th>ประเภทการสมัคร</th>
            <th>ชื่อ-นามสกุล ภาษาไทย</th>
            <th>ชื่อ-นามสกุล อังกฤษ</th>
            <th>หมายเลขการสมัคร</th>
            <th>ชื่อเล่น</th>
            <th>อายุ</th>
            <th>เบอร์โทรศัพท์</th>
            <th>มีสังกัดหรือไม่</th>
            <th>สังกัด</th>
            <th>ไซส์เสื้อ</th>
            <th></th>
          </tr>
        </thead>
        <tbody v-for="(data,index) in dataConfig.brewerList">
          <td>{{ index+1 }}</td>
          <td>{{ dataConfig.masterTypeData[data.competitionTypes] }}</td>
          <td>{{ data.firstNameTH }} {{ data.lastNameTH }}</td>
          <td>{{ data.firstNameEN }} {{ data.lastNameEN }}</td>
          <td><kbd>{{ data.applicationAliasId }}</kbd></td>
          <td>{{ data.nickName }}</td>
          <td>{{ data.age }}</td>
          <td>{{ data.telNo }}</td>
          <td>{{ data.haveAffiliations ? "✅" : "❌" }}</td>
          <td>{{ data?.affiliations }}</td>
          <td>{{ dataConfig.masterTypeSize[data.shirtSize] }}</td>
          <td>
            <div class="flex flex-row">
              <div>
                <button class="btn btn-outline btn-info">Edit</button>
              </div>
              <div class="pl-2">
                <button class="btn btn-outline btn-error">Delete</button>
              </div>
            </div>
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