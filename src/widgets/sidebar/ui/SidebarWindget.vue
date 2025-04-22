<script setup lang="ts">
import { ref } from 'vue';

const data = ref<Date | null>(null);
</script>

<template>
  <div class="sidebar">
    <h2>Sidebar</h2>
    <UiCalendar v-model="data" date-format="dd.mm.y" showIcon />
  </div>
</template>

<style scoped lang="scss"></style>
