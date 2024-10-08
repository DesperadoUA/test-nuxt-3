<template>
  <main class="container mx-auto py-10 pl-2 pr-2">
    <h1 class="text-3xl">{{ data.title }}</h1>
    <div class="flex py-10 flex-wrap">
      <div class="basis-full md:basis-1/4 p-2">
        <img
          :src="data.thumbnail"
          width="300"
          height="200"
          class="rounded-md w-full"
        />
      </div>
      <div
        class="basis-full md:basis-3/4 border-2 border-lime-500 rounded-md p-2"
      >
        <div class="text-lg text-orange-600">Price: {{ data.price }}</div>
        <div class="content" v-html="data.content" />
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
const route = useRoute();
const { id } = route.params;
const data = await $fetch(`/api/product/${id}`);
</script>