<template>
  <pano title="The Title" width="720" height="480" :bundle="require('../../assets/images/9.jpg')" format="jpg"></pano>
</template>
<script>
import Pano from 'vue-pano';
export default {
  name: 'VRScene',
  components: {
    Pano,
  },
};
</script>
<style lang="scss" scoped></style>
