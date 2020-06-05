<template>
  <div class="layout-header">
    <Header />

    <img src="@/assets/pc/intro/introBanner.png" />
  </div>
</template>

<script>
export default {
  name: 'LayoutHeader',
  components: {
    Header: () => import('@/pages/pc/components/Header'),
  },
};
</script>

<style lang="scss" scoped>
.layout-header {
  > img {
    width: 100%;
  }
}
</style>
