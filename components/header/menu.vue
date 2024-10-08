<script setup lang="ts">
const links = [
  {
    label: "Home",
    icon: "i-heroicons-home",
    to: "/",
  },
];
</script>
<template>
  <UHorizontalNavigation :links="links" class="justify-end" />
</template>