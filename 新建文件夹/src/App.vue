<template>
  <div id="app">
    <!-- 缓存组件 -->
    <keep-alive :include="include">
      <router-view v-if="$route.meta.isKeepAlive"></router-view>
    </keep-alive>

    <!-- 不缓存组件 -->
    <router-view v-if="!$route.meta.isKeepAlive"></router-view>
  </div>
</template>

<script>
import { computed } from '@vue/composition-api';
export default {
  setup(props, { root }) {
    const include = computed(() => root.store.getters['keepAlive/keepInclude']);

    return {
      include,
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
