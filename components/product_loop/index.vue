<template>
  <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 py-10">
    <ProductLoopCard v-for="item in props.posts" :key="item.id" :item="item" />
  </div>
</template>
<script setup>
const props = defineProps({
  posts: {
    type: Array,
  },
});
</script>