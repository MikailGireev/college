<script setup lang="ts">
import { Sidebar } from '@/widgets/sidebar';
import { Topbar } from '@/widgets/topbar';
</script>

<template>
  <div class="layout">
    <aside class="layout__sidebar">
      <Sidebar />
    </aside>
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
    border: 1px solid #dadce0;
    padding: 10px 16px;
    flex: 0 0 250px;
    height: 100vh;
  }

  &__main {
    flex: 1 1 auto;
    height: 100%;
  }
}
</style>
