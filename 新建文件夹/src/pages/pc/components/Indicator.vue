<template>
  <div class="intro-photo-indicator">
    <div @click="prevHandle">
      <i class="el-icon-arrow-left"></i>
    </div>
    <div @click="nextHandle">
      <i class="el-icon-arrow-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Indicator',
  setup(props, { emit }) {
    const prevHandle = () => emit('prevHandle');
    const nextHandle = () => emit('nextHandle');

    return { prevHandle, nextHandle };
  },
};
</script>

<style lang="scss" scoped>
.intro-photo-indicator {
  margin-top: rem(80);
  display: flex;
  justify-content: center;
  div {
    position: relative;
    width: rem(50);
    height: rem(50);
    border-radius: 50%;
    background-color: #efefef;
    cursor: pointer;
    &:hover {
      background-color: $primary-color;
      i {
        color: #fff;
      }
    }
    margin-left: rem(20);
    &:first-child {
      margin-left: 0;
    }
    i {
      font-size: 16px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate3d(-50%, -50%, 0);
    }
  }
}
</style>
