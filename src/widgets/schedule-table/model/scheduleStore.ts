// src/widgets/schedule-table/model/useSchedule.ts
import * as XLSX from 'xlsx';
import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

export interface Lesson {
  day: string;
  order: number;
  group: string;
  subject: string;
  room: string;
}

export const useScheduleStore = defineStore('schedule', () => {
  const rawData = ref<string[][]>([]);
  const sheetNames = ref<string[]>([]);
  const lessons = ref<Lesson[]>([]);
  const selectDate = ref(new Date());
  const selectGroup = ref('');

  const loadExcel = async () => {
    const res = await fetch(`${import.meta.env.BASE_URL}schedule/schedule.xlsx`);
    const buf = await res.arrayBuffer();
    const wb = XLSX.read(buf, { type: 'array' });

    sheetNames.value = wb.SheetNames;
    rawData.value = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[1]], {
      header: 1,
      raw: false,
    });

    parseLessons();
  };

  const parseLessons = () => {
    const data = rawData.value;
    if (data.length < 5) return;

    const headerRowIndex = data.findIndex((r) => r.includes('№ п/п'));
    const headers = data[headerRowIndex] as string[];
    const groups = headers
      .map((h, i) => ({ h, i }))
      .filter((x) => x.h && !['День недели', '№ п/п', 'ауд.'].includes(x.h))
      .map((x) => ({ idx: x.i, name: x.h.replace(/\n/g, ' ') }));

    const out: Lesson[] = [];
    let currentDay = '';

    for (let r = headerRowIndex + 1; r < data.length; r++) {
      const row = data[r];
      if (row[0]) {
        currentDay = String(row[0]);
      }
      const order = Number(row[1]) || 0;

      if (!currentDay || order === 0) continue;

      for (const { idx, name } of groups) {
        const subj = row[idx];
        const room = row[idx + 1];
        if (subj) {
          out.push({
            day: currentDay,
            order,
            group: name,
            subject: String(subj),
            room: room ? String(room) : '',
          });
        }
      }
    }

    lessons.value = out;
  };

  const filteredLessons = computed(() => {
    const weekDays = selectDate.value.toLocaleDateString('ru-RU', { weekday: 'long' });
    return lessons.value.filter(
      (l) =>
        l.day.toLowerCase() === weekDays.toLowerCase() &&
        (!selectGroup.value || l.group.toLowerCase().includes(selectGroup.value.toLowerCase())),
    );
  });

  return { rawData, lessons, loadExcel, selectDate, selectGroup, filteredLessons };
});
