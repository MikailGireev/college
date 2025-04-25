<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useTopbarStore } from '../model/topbarStore';

import { Typography } from '@/shared/typography';
import { Icon } from '@/shared/icon';

import { Tags } from '@/utils/tags';
import { useScheduleStore } from '@/widgets/schedule-table/model/scheduleStore';
import { useSidebarStore } from '@/widgets/sidebar/model/sidebarStore';

const storeTopbar = useTopbarStore();
const { weekLabel } = storeToRefs(storeTopbar);

const storeSidebar = useSidebarStore();
const { setShow } = storeSidebar;

const storeShedule = useScheduleStore();
const { selectGroup } = storeToRefs(storeShedule);
</script>

<template>
  <header class="header">
    <div class="header__container">
      <div class="header__menu">
        <Icon @click="setShow" name="bars" />
        <Typography :bold="true" :tag="Tags.H1">{{ weekLabel }}</Typography>
      </div>
      <div class="header__search">
        <Icon name="search" />
        <InputText v-model:model-value="selectGroup" type="text" placeholder="Group" />
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  width: 100%;
  padding: 16px 21px;
  border: 1px solid #dadce0;

  &__container {
    display: flex;
    justify-content: space-between;
  }

  &__menu {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  &__search {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &:deep(.icon) {
    cursor: pointer;
  }
}
</style>
