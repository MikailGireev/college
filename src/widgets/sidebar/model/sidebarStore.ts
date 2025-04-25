import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSidebarStore = defineStore('sidebar', () => {
  const data = ref<Date | null>(null);
  const isShow = ref<boolean>(false);

  const setShow = () => {
    isShow.value = !isShow.value;
  };

  return { data, isShow, setShow };
});
