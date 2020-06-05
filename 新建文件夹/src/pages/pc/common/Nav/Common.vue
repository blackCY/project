<template>
  <div class="layout-nav-common">
    <ul>
      <li
        v-for="(item, idx) in data.currentNav.itemList"
        :key="item.link"
        :class="data.activeIndex === idx && 'is-active'"
        @click="handleClick(idx)"
      >
        {{ item.title }}
      </li>
    </ul>
    <button v-if="$attrs.but" @click="handleBtnClick">立即申请</button>
  </div>
</template>

<script>
import { reactive } from '@vue/composition-api';
import { computed, onMounted } from '@vue/composition-api';
export default {
  name: 'NavCommon',
  setup(props, { root, emit }) {
    const data = reactive({
      navList: {},
      currentNav: {},
      activeIndex: 0,
    });
    data.NavList = computed(() => root.store.state.nav.navList);

    const handleClick = idx => {
      data.activeIndex = idx;
      emit(`update:currentNavIndex`, idx);
    };

    const handleBtnClick = () => emit('handleBtnClick');

    onMounted(() => {
      const path = root.$route.path.split('/').filter(v => v && v);

      data.currentNav = data.NavList.value.filter(v => v.link === `/${path[0]}`)[0];
    });

    return { data, handleClick, handleBtnClick };
  },
};
</script>

<style lang="scss" scoped>
.layout-nav-common {
  display: flex;
  @include center();
  margin-top: rem(40);
  border-bottom: 1px solid #023783;
  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    li {
      font-weight: 549;
      height: rem(56);
      padding: 0 8px;
      font-size: rem(30);
      box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      margin-left: rem(56);
      cursor: pointer;
      position: relative;
      &:first-child {
        margin-left: 0;
      }
      &:hover {
        color: #023783;
        border-bottom: 3px solid #023783;
      }
    }
  }
  button {
    position: absolute;
    right: 0;
    bottom: 10px;
    border: none;
    outline: none;
    width: rem(150);
    height: rem(55);
    background-color: $primary-color;
    color: #fff;
    font-size: rem(22);
    cursor: pointer;
  }
}
li.is-active {
  color: #023783;
  border-bottom: 3px solid #023783;
}
</style>
