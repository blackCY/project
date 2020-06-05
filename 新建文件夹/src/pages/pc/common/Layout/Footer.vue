<template>
  <Footer />
</template>

<script>
export default {
  name: 'LayoutFooter',
  components: {
    Footer: () => import('@/pages/pc/components/Footer'),
  },
};
</script>

<style lang="scss" scoped></style>
