<template>
  <van-image :src="imgUrl">
    <template v-slot:loading>
      <van-loading type="spinner" size="20" />
    </template>
    <template v-slot:error>
      <van-icon name="clear" color="#ccc" size="20" />
    </template>
  </van-image>
</template>

<script>
export default {
  name: 'LazyImage',
  props: {
    imgUrl: {
      type: String,
      default: '',
      required: true,
    },
  },
};
</script>

<style lang="scss">
.van-image {
  position: relative;
  .image-slot {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
}
</style>
