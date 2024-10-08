<template>
  <article class="border-2 border-lime-500 rounded-md p-2">
    <NuxtLink :to="'/product/' + item.id">
      <img
        :src="item.thumbnail"
        :alt="item.title"
        width="300"
        height="200"
        class="rounded-md w-full"
      />
    </NuxtLink>
    <NuxtLink :to="'/product/' + item.id" class="my-4 block text-xl">
      {{ item.title }}
    </NuxtLink>
    <div class="text-lg text-orange-600">Price: {{ item.price }}</div>
  </article>
</template>
<script setup>
const props = defineProps({
  item: {
    type: Object,
  },
});
</script>