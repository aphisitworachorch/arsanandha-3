<script setup lang="ts">
const props = defineProps(['biographyData'])

</script>

<template>
  <div class="card shadow-xl image-full snap-start animate__animated animate__fadeInUp animate__delay-4s">
    <figure><nuxt-img fit="cover" width="1500" height="1500" format="webp" :src="props?.biographyData?.image" :alt="props?.biographyData?.name" class="w-96 scale-150"/></figure>
    <div class="card-body">
      <h2 class="card-title text-white">{{ props?.biographyData?.name }}</h2>
      <ul v-for="(list, index) in props?.biographyData?.details" class="text-sm list-disc pl-5 text-white font-bold" :key="list.name" :data-index="index">
        <li>
          {{ list.name }}
          <ul v-if="props?.biographyData?.isWork" class="md:w-96 font-light">
            <li v-if="list.duration != null">"Duration {{ list.duration }}"</li>
            <li v-if="list.duration == null">"Present ✅"</li>
          </ul>
          <ul v-if="list.message != null" class="italic break-words md:w-96 font-light">
            <li>{{ list.message }}</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>