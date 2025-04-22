<script setup lang="ts">
import { Tags } from '@/utils/tags';

interface Props {
  tag?: Tags;
  bold?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  tag: Tags.P,
  bold: false,
});
</script>

<template>
  <component :is="props.tag" :class="['typography', { 'typography--bold': props.bold }]"
    ><slot></slot
  ></component>
</template>

<style scoped lang="scss">
.typography {
  font-weight: normal;

  &--bold {
    font-weight: bold;
  }
}
</style>
