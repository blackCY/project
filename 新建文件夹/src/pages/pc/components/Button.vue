<template>
  <button
    :style="{
      border: buttonBorder && buttonBorder,
      fontSize: buttonFontSize && buttonFontSize,
      borderRadius: buttonRadius && buttonRadius,
      width: buttonWidth && buttonWidth,
      height: buttonHeight && buttonHeight,
    }"
  >
    {{ buttonTitle }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    buttonTitle: {
      type: String,
      default: '查看更多>>',
      required: false,
    },
    buttonBorder: {
      type: String,
      default: '1px solid #083c87',
      required: false,
    },
    buttonFontSize: {
      type: String,
      default: '16px',
      required: false,
    },
    buttonRadius: {
      type: String,
      default: '0',
      required: false,
    },
    buttonWidth: {
      type: String,
      default: '100px',
      required: false,
    },
    buttonHeight: {
      type: String,
      default: '38px',
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  outline: none;
  background-color: #fff;
  color: #083c87;
  cursor: pointer;
}
</style>
