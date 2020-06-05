<template>
  <div class="layout">
    <Header />
    <Main />
    <Footer />
    <!--<transition name="main"></transition>-->
  </div>
</template>

<script>
export default {
  name: 'Layout',
  components: {
    Header: () => import('./Header'),
    Main: () => import('./Main'),
    Footer: () => import('./Footer'),
  },
};
</script>

<style lang="scss" scoped>
.main-enter-active {
  transition: all 0.5s ease;
}
.main-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.main-enter,
.main-leave-to {
  transform: translateX(-1rem);
  opacity: 0;
}
</style>
