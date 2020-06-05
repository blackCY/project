<template>
  <div
    class="footer-main"
    :style="{
      margin: footerMainMargin && footerMainMargin,
    }"
  >
    <div class="footer-main-title">
      <i :class="data.icon" v-if="data.icon"></i>
      {{ data.title }}
    </div>
    <div class="footer-main-content">
      <ul>
        <li v-for="item in data.content" :key="item">
          <p>{{ item }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterInfo',
  props: {
    data: {
      type: Object,
      default: () => {
        return {};
      },
      required: true,
    },
    footerMainMargin: {
      type: String,
      default: '0px',
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.footer-main {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  .footer-main-title {
    margin-bottom: rem(27);
    font-weight: bold;
    font-size: rem(20);
  }
  .footer-main-content {
    display: flex;
    align-items: center;
    font-size: rem(16);
    ul {
      flex-direction: column;
      display: flex;
      li {
        display: flex;
        align-items: flex-start;
        margin-bottom: rem(15);
        &.multiple {
          margin-bottom: rem(21);
        }
        &.single:last-child {
          margin-top: rem(16);
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
