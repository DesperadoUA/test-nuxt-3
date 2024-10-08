<template>
  <main class="container mx-auto py-10 pl-2 pr-2">
    <h1 class="text-3xl">Main page</h1>
    <UTabs :items="items" @change="onChange" class="py-5" />
    <ProductLoop :posts="posts" v-if="posts.length" />
  </main>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { MAX_MIN_PRICE, MAX_AVARAGE_PRICE } from "@/constants.js";
const products = await $fetch("/api/products");
const filterFn = {
  all: () => true,
  low: (item) => item.price < MAX_MIN_PRICE,
  average: (item) =>
    item.price >= MAX_MIN_PRICE && item.price < MAX_AVARAGE_PRICE,
  high: (item) => item.price >= MAX_AVARAGE_PRICE,
};
const posts = computed(() => {
  return products.filter(filterFn[currentFilter.value]);
});
const currentFilter = ref("all");
const items = [
  {
    label: "All",
    key: "all",
  },
  {
    label: "Low price",
    key: "low",
  },
  {
    label: "Average price",
    key: "average",
  },
  {
    label: "High price",
    key: "high",
  },
];

function onChange(index) {
  const { key } = items[index];
  currentFilter.value = key;
}
</script>