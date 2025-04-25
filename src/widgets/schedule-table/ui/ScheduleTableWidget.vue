<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useScheduleStore } from '../model/scheduleStore';
import { storeToRefs } from 'pinia';
import { Typography } from '@/shared/typography';
import { Tags } from '@/utils/tags';
import { ScheduleContainer } from '@/widgets/schedule-container';

const storeSchedule = useScheduleStore();
const { loadExcel } = storeSchedule;
const { filteredLessons } = storeToRefs(storeSchedule);

onMounted(loadExcel);
watch(filteredLessons, () => {
  loadExcel();
});
</script>

<template>
  <div v-if="filteredLessons.length" class="schedule-view">
    <h2>{{ filteredLessons[0].day }}</h2>
    <ScheduleContainer />
  </div>
  <div v-else class="schedule-view">
    <Typography :tag="Tags.H2">Нет занятий</Typography>
  </div>
</template>

<style scoped lang="scss">
.schedule-view {
  padding: 21px 16px;
}

.table {
  width: 100%;
  border-collapse: collapse;
}
.table th,
.table td {
  border: 1px solid #000;
  padding: 4px;
}
</style>
