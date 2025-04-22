<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useTopbarStore } from '../model/topbarStore';

import { Typography } from '@/shared/typography';
import { Tags } from '@/utils/tags';

const storeTopbar = useTopbarStore();
const { weekLabel } = storeToRefs(storeTopbar);
</script>

<template>
  <header class="header">
    <Typography :bold="true" :tag="Tags.H1">{{ weekLabel }}</Typography>
  </header>
</template>

<style scoped lang="scss">
.header {
  width: 100%;
  padding: 16px 21px;
  border: 1px solid #dadce0;
}
</style>
