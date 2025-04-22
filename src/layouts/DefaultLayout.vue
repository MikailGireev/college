<script setup lang="ts">
import { Sidebar } from '@/widgets/sidebar';
import { Topbar } from '@/widgets/topbar';
</script>

<template>
  <div class="layout">
    <div class="layout__sidebar">
      <aside class="layout__sidebar">
        <Sidebar />
      </aside>
    </div>
    <div class="layout__main">
      <Topbar />
      <main class="layout__content">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout {
  display: flex;
  height: 100vh;

  &__sidebar {
    padding: 10px 16px;
    flex: 0 0 250px;
    height: 100vh;
  }
}
</style>
