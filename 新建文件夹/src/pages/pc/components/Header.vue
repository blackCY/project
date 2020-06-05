<template>
  <div class="home-header">
    <img src="../_logo.png" />
    <ul class="header-ul">
      <router-link tag="li" v-for="item in data" :key="item.id" :to="item.link">
        <span style="font-size: 14px;">{{ item.title }}</span>
        <ul class="header-child-ul" v-if="item.itemList">
          <router-link tag="li" v-for="childItem in item.itemList" :key="childItem.id" :to="item.link + childItem.link">
            {{ childItem.title }}
          </router-link>
        </ul>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { computed } from '@vue/composition-api';
export default {
  name: 'Header',
  setup(props, { root }) {
    const data = computed(() => root.store.state.nav.navList);

    return {
      data: data.value,
    };
  },
};
</script>

<style lang="scss" scoped>
.home-header {
  background-color: transparent;
  display: flex;
  width: 100%;
  height: rem(144);
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: -1px;
    width: 100%;
    height: 1px;
    background-color: #fff;
  }
  z-index: 10;
  img {
    height: 100%;
  }
  .header-ul {
    display: flex;
    justify-content: space-between;
    height: 100%;
    margin-left: rem(306);
    > li {
      font-size: rem(18);
      position: relative;
      display: flex;
      align-items: center;
      margin-left: rem(57);
      &:first-child {
        margin-left: 0;
      }
      &:hover {
        & {
          color: #7285b0;
          cursor: pointer;
        }
        & .header-child-ul {
          display: flex;
        }
      }
    }
    .header-child-ul {
      width: rem(264);
      display: none;
      flex-direction: column;
      align-items: center;
      text-align: center;
      position: absolute;
      left: 50%;
      top: rem(144);
      transform: translateX(-50%);
      font-size: rem(18);
      border-top: 2px solid #023584;
      background-color: #fff;
      padding: rem(41) 0 rem(39) 0;
      box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      li {
        margin-bottom: rem(24);
        color: #000;
        width: 100%;
        &:hover {
          color: $primary-color;
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
