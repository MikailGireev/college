import { addDays, format } from 'date-fns';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useTopbarStore = defineStore('topbar', () => {
  const weekStart = ref(new Date(2022, 0, 1));

  const weekLabel = computed(() => {
    const end = addDays(weekStart.value, 6);
    return `${format(weekStart.value, 'dd')}-${format(end, 'dd MMMM yyyy')}`;
  });

  return { weekLabel };
});
