<script setup lang="ts">
import { useScheduleStore } from '@/widgets/schedule-table/model/scheduleStore';
import { storeToRefs } from 'pinia';

const storeSchedule = useScheduleStore();
const { selectDate } = storeToRefs(storeSchedule);
</script>

<template>
  <div class="sidebar">
    <UiCalendar inline v-model="selectDate" date-format="dd.mm.y" showIcon />
  </div>
</template>

<style scoped lang="scss"></style>
