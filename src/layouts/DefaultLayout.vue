<script setup lang="ts">
import { Sidebar } from '@/widgets/sidebar';
import { useSidebarStore } from '@/widgets/sidebar/model/sidebarStore';
import { Topbar } from '@/widgets/topbar';
import { storeToRefs } from 'pinia';

const storeSidebar = useSidebarStore();
const { isShow } = storeToRefs(storeSidebar);
</script>

<template>
  <div class="layout">
    <aside :class="`layout__sidebar ${isShow ? 'show' : ''}`">
      <Sidebar />
    </aside>
    <div :class="`layout__main ${isShow ? 'show-sidebar' : ''}`">
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

  &__sidebar {
    width: 0;
    max-width: 350px;
    height: 100vh;
    background-color: #f4f4f4;
    border-right: 1px solid #ddd;
    position: fixed;
    left: 0;
    overflow: hidden;
    transition: width 0.3s ease;
    z-index: 100;

    &.show {
      display: flex;
      justify-content: center;
      width: 350px;
    }
  }

  &__main {
    margin-left: 0;
    flex-grow: 1;
    height: 100%;
    transition: margin-left 0.3s ease;
  }

  &__main.show-sidebar {
    margin-left: 350px;
  }
}
</style>
