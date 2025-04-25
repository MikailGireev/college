<script setup lang="ts">
import { Typography } from '@/shared/typography';
import { Tags } from '@/utils/tags';
import { useScheduleStore, type Lesson } from '@/widgets/schedule-table/model/scheduleStore';
import { storeToRefs } from 'pinia';

interface Props {
  lessons: Lesson[];
}

const props = defineProps<Props>();
const groups = Array.from(new Set(props.lessons.map((lesson) => lesson.group)));

const storeSchedule = useScheduleStore();
const { selectGroup } = storeToRefs(storeSchedule);
const { setSelectGroup } = storeSchedule;

const getLessonsFilterGroup = (group: string) => {
  return props.lessons.filter((lesson) => lesson.group === group);
};

const toggleGroup = (group: string) => {
  setSelectGroup(group);
};
</script>

<template>
  <div class="groups">
    <div class="groups-card" v-for="group in groups" :key="group">
      <div @click="toggleGroup(group)">
        <Typography :tag="Tags.H3">{{ group }}</Typography>
      </div>

      <div class="groups__info" v-if="selectGroup === group">
        <Typography :tag="Tags.P">Пары для группы {{ selectGroup }}</Typography>
        <div
          v-for="lesson in getLessonsFilterGroup(selectGroup)"
          :key="lesson.subject"
          class="groups__lessons"
        >
          <div>
            <Typography :tag="Tags.SPAN">{{ lesson.order }}) </Typography>
            <Typography :tag="Tags.SPAN">{{ lesson.subject }}</Typography>
            <Typography :tag="Tags.SPAN">{{ lesson.room }}</Typography>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.groups {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;

  &__lessons {
    max-height: 200px;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  &__lessons {
    display: flex;
  }
}
</style>
