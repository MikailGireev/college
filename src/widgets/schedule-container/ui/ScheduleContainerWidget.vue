<script setup lang="ts">
import { computed } from 'vue';
import { Typography } from '@/shared/typography';
import { Tags } from '@/utils/tags';
import type { Lesson } from '@/widgets/schedule-table/model/scheduleStore';

interface Props {
  lessons: Lesson[];
  order: number;
}
const props = defineProps<Props>();

const groups = computed(() => Array.from(new Set(props.lessons.map((l) => l.group))));

const slotNumbers = computed(() => Array.from({ length: props.order }, (_, i) => i + 1));
</script>

<template>
  <div class="schedule-by-group">
    <div class="header">
      <div class="header__empty"></div>
      <Typography v-for="n in slotNumbers" :key="n" :tag="Tags.SPAN" class="header__slot">
        {{ n }}
      </Typography>
    </div>

    <div
      v-for="group in groups"
      :key="group"
      class="row"
      :style="{ gridTemplateColumns: `150px repeat(${props.order},1fr)` }"
    >
      <div class="row__group">
        <Typography :tag="Tags.SPAN">{{ group }}</Typography>
      </div>

      <div v-for="slot in slotNumbers" :key="slot" class="row__cell">
        <template v-if="props.lessons.find((l) => l.group === group && l.order === slot)">
          <div class="card">
            <Typography :tag="Tags.SPAN" class="card__subject">
              {{ props.lessons.find((l) => l.group === group && l.order === slot)!.subject }}
            </Typography>
            <Typography :tag="Tags.SPAN" class="card__room">
              ауд.{{ props.lessons.find((l) => l.group === group && l.order === slot)!.room }}
            </Typography>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.schedule-by-group {
  display: grid;
  gap: 16px;
}

.header {
  display: grid;
  grid-template-columns: 150px repeat(auto-fit, minmax(0, 1fr));
  align-items: center;
  gap: 8px;

  &__slot {
    text-align: center;
    font-weight: bold;
  }
}

.row {
  display: grid;
  align-items: start;
  gap: 8px;

  &__cell {
    height: 100%;
  }

  &__group {
    padding: 4px;
    font-weight: 600;
  }
}

.card {
  display: flex;
  flex-direction: column;
  height: 100%;

  background: #e3f2fd;
  padding: 6px;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

  &__subject {
    font-size: 0.9em;
    margin-bottom: 4px;
  }
  &__room {
    font-size: 0.75em;
    color: #555;
    text-align: right;
  }
}
</style>
