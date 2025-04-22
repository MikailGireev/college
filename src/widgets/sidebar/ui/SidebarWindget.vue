<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useSidebarStore } from '../model/sidebarStore';

const storeSidebar = useSidebarStore();
const { data } = storeToRefs(storeSidebar);
</script>

<template>
  <div class="sidebar">
    <UiCalendar inline v-model="data" date-format="dd.mm.y" showIcon />
  </div>
</template>

<style scoped lang="scss">
.sidebar {
  border: 1px solid #dadce0;
}
</style>
