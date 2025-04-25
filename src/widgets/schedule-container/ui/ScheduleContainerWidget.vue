<script setup lang="ts">
import { useScheduleStore } from '@/widgets/schedule-table/model/scheduleStore';
import GroupCard from './GroupCard.vue';
import { storeToRefs } from 'pinia';

const storeSchedule = useScheduleStore();
const { filteredLessons } = storeToRefs(storeSchedule);
</script>

<template>
  <div class="schedule-by-group">
    <GroupCard :lessons="filteredLessons" />
  </div>
</template>

<style scoped lang="scss"></style>
