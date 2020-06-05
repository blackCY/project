<template>
  <div class="industry">
    <Nav type="default" />

    <ul>
      <li v-for="(item, idx) in data" :key="idx">
        <template v-if="idx % 2 !== 0">
          <div class="industry-container">
            <p>{{ item.title }}</p>
            <p v-for="(cont, contIdx) in item.content" :key="contIdx">{{ cont }}</p>
          </div>
          <img v-lazy="item.img" />
        </template>
        <template v-if="idx % 2 === 0">
          <img v-lazy="item.img" />
          <div class="industry-container">
            <p>{{ item.title }}</p>
            <p v-for="(cont, contIdx) in item.content" :key="contIdx">{{ cont }}</p>
          </div>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive } from '@vue/composition-api';
export default {
  name: 'Industry',
  components: {
    Nav: () => import('@/pages/pc/common/Nav'),
  },
  setup() {
    const data = reactive([
      {
        title: '名称名称名称',
        img: require('@/assets/pc/industry/industry.png'),
        content: [
          '简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介',
          '简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介',
        ],
      },
      {
        title: '名称名称名称',
        img: require('@/assets/pc/industry/industry.png'),
        content: [
          '简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介',
          '简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介',
        ],
      },
    ]);

    return { data };
  },
};
</script>

<style lang="scss" scoped>
.industry {
  @include center();
  li {
    height: rem(786);
    margin-top: rem(138);
    display: flex;
    align-items: center;
    justify-content: space-between;
    .industry-container {
      padding: rem(61) rem(42) 0 rem(27);
      height: rem(599);
      box-sizing: border-box;
      background-color: $primary-color;
      p {
        color: #fff;
        font-size: rem(19);
        line-height: 2.2em;
        @include hh_ellipsis(4);
        margin-top: rem(61);
        letter-spacing: 1px;
      }
      p:nth-of-type(1) {
        font-size: rem(24);
        line-height: none;
        margin-top: 0;
      }
    }
    img {
      height: 100%;
    }
  }
}
</style>
