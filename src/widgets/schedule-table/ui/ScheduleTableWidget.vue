<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useScheduleStore } from '../model/scheduleStore';
import { storeToRefs } from 'pinia';
import { Typography } from '@/shared/typography';
import { Tags } from '@/utils/tags';

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
    <h2>Parsed Lessons</h2>
    <table class="table">
      <thead>
        <tr>
          <th>День</th>
          <th>№ пары</th>
          <th>Группа</th>
          <th>Предмет</th>
          <th>Аудитория</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(l, i) in filteredLessons" :key="i">
          <td>{{ l.day }}</td>
          <td>{{ l.order }}</td>
          <td>{{ l.group }}</td>
          <td>{{ l.subject }}</td>
          <td>{{ l.room }}</td>
        </tr>
      </tbody>
    </table>
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
