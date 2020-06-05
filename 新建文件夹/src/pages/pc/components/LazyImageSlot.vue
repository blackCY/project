<template>
  <el-image :src="imgUrl" lazy>
    <div slot="error" class="image-slot">
      <i class="el-icon-picture-outline"></i>
    </div>
    <div slot="placeholder" class="image-slot">
      <i class="el-icon-loading"></i>
    </div>
  </el-image>
</template>

<script>
export default {
  name: 'LazyImageSlot',
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
.el-image {
  position: relative;
  .image-slot {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
}
</style>
