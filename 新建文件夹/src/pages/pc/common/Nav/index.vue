<template>
  <div class="layout-nav">
    <Common v-if="type === 'default'" v-bind="$attrs" v-on="$listeners" />
  </div>
</template>

<script>
export default {
  name: 'LayoutNav',
  props: {
    type: {
      type: String,
      default: '',
      required: false,
    },
  },
  components: {
    Common: () => import('./Common'),
  },
};
</script>

<style lang="scss" scoped>
.layout-nav {
  height: 100%;
  margin-bottom: rem(40);
}
</style>
