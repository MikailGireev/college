<script setup lang="ts">
import { defineProps, useAttrs } from 'vue';
import type { Component } from 'vue';

const props = defineProps<{ name: string }>();

const icons = import.meta.glob<{ default: Component }>('../icons/*.svg', { eager: true });

function resolveIcon(name: string): Component | null {
  const key = `../icons/${name}.svg`;
  const file = icons[key];
  return file?.default ?? null;
}

const attrs = useAttrs();
</script>

<template>
  <component
    v-bind="attrs"
    v-if="resolveIcon(props.name)"
    :is="resolveIcon(props.name)"
    class="icon"
  />
</template>

<style scoped lang="scss">
.icon {
  width: 1em;
  height: 1em;
}
</style>
