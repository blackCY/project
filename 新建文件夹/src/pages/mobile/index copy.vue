<template>
  <transition name="fade">
    <p>mobile</p>
  </transition>
</template>

<script>
export default {
  name: 'Mobile',
};
</script>

<style lang="scss" scoped>
.fade-enter-active {
  transition: all 0.5s ease;
}
.fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter,
.fade-leave-to {
  transform: translateX(-1rem);
  opacity: 0;
}
p {
  font-size: 1rem;
}
</style>
