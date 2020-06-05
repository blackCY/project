<template>
  <div class="service-labor">
    <Nav type="default" :currentNavIndex.sync="data.currentNavIndex" />

    <div class="service-tag-container">
      <div class="labor-tag-cont">
        <div class="tag-icon">
          <i :class="data.navIcon"></i>
          <span>{{ data.navTitle }}</span>
        </div>
        <p>
          劳务派遣简单介绍劳务派遣简单介绍劳务派遣简单介绍劳务派遣简单介绍劳务派遣简单介绍劳务派遣简单介绍劳务派遣简单介绍劳务派遣简单介绍劳务派遣简单介绍劳务派遣简单介绍劳务派遣简单介绍劳务派遣简单介绍劳务派遣简单介绍劳务派遣简单介绍劳务派遣简单介绍劳务派遣简单介绍劳务派遣简单介绍
        </p>
      </div>
    </div>

    <div class="service-container">
      <p>{{ data.servicesData.title }}</p>
      <ul>
        <li v-for="(item, idx) in data.currentData" :key="idx">
          <img v-lazy="item.img" />
          <div>
            <p>{{ item.title }}</p>
            <p>{{ item.content }}</p>
          </div>
        </li>
      </ul>
    </div>

    <ElPagination :all="data.servicesData.labor" :currentData.sync="data.currentData" :pageSize="9" />
  </div>
</template>

<script>
import { computed, reactive } from '@vue/composition-api';
export default {
  name: 'PCServiceLabor',
  components: {
    Nav: () => import('@/pages/pc/common/Nav'),
    ElPagination: () => import('@/pages/pc/components/ElPagination'),
  },
  props: {
    nav: {
      type: String,
      default: '',
      required: false,
    },
  },
  setup(props, { root }) {
    const data = reactive({
      currentData: [],
      servicesData: {
        title: '服务案例',
        labor: [
          {
            img: require('@/assets/pc/services/service_labor_1.png'),
            title: '服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例',
            content:
              '服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介',
          },
          {
            img: require('@/assets/pc/services/service_labor_2.png'),
            title: '服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例',
            content:
              '服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介',
          },
          {
            img: require('@/assets/pc/services/service_labor_3.png'),
            title: '服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例',
            content:
              '服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介',
          },
          {
            img: require('@/assets/pc/services/service_labor_4.png'),
            title: '服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例',
            content:
              '服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介',
          },
          {
            img: require('@/assets/pc/services/service_labor_5.png'),
            title: '服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例',
            content:
              '服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介',
          },
          {
            img: require('@/assets/pc/services/service_labor_6.png'),
            title: '服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例',
            content:
              '服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介',
          },
          {
            img: require('@/assets/pc/services/service_labor_7.png'),
            title: '服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例',
            content:
              '服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介',
          },
          {
            img: require('@/assets/pc/services/service_labor_8.png'),
            title: '服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例',
            content:
              '服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介',
          },
          {
            img: require('@/assets/pc/services/service_labor_9.png'),
            title: '服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例',
            content:
              '服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介',
          },
          {
            img: require('@/assets/pc/services/service_labor_1.png'),
            title: '服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例',
            content:
              '服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介',
          },
          {
            img: require('@/assets/pc/services/service_labor_2.png'),
            title: '服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例',
            content:
              '服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介',
          },
          {
            img: require('@/assets/pc/services/service_labor_3.png'),
            title: '服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例',
            content:
              '服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介',
          },
          {
            img: require('@/assets/pc/services/service_labor_4.png'),
            title: '服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例',
            content:
              '服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介',
          },
          {
            img: require('@/assets/pc/services/service_labor_5.png'),
            title: '服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例',
            content:
              '服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介',
          },
          {
            img: require('@/assets/pc/services/service_labor_6.png'),
            title: '服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例',
            content:
              '服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介',
          },
          {
            img: require('@/assets/pc/services/service_labor_7.png'),
            title: '服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例',
            content:
              '服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介',
          },
          {
            img: require('@/assets/pc/services/service_labor_8.png'),
            title: '服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例',
            content:
              '服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介',
          },
          {
            img: require('@/assets/pc/services/service_labor_9.png'),
            title: '服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例',
            content:
              '服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介',
          },
          {
            img: require('@/assets/pc/services/service_labor_1.png'),
            title: '服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例',
            content:
              '服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介',
          },
          {
            img: require('@/assets/pc/services/service_labor_2.png'),
            title: '服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例',
            content:
              '服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介',
          },
          {
            img: require('@/assets/pc/services/service_labor_3.png'),
            title: '服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例',
            content:
              '服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介',
          },
          {
            img: require('@/assets/pc/services/service_labor_4.png'),
            title: '服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例',
            content:
              '服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介',
          },
          {
            img: require('@/assets/pc/services/service_labor_5.png'),
            title: '服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例',
            content:
              '服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介',
          },
          {
            img: require('@/assets/pc/services/service_labor_6.png'),
            title: '服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例',
            content:
              '服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介',
          },
          {
            img: require('@/assets/pc/services/service_labor_7.png'),
            title: '服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例',
            content:
              '服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介',
          },
          {
            img: require('@/assets/pc/services/service_labor_8.png'),
            title: '服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例',
            content:
              '服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介',
          },
          {
            img: require('@/assets/pc/services/service_labor_9.png'),
            title: '服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例',
            content:
              '服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介',
          },
          {
            img: require('@/assets/pc/services/service_labor_1.png'),
            title: '服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例',
            content:
              '服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介',
          },
          {
            img: require('@/assets/pc/services/service_labor_2.png'),
            title: '服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例',
            content:
              '服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介',
          },
          {
            img: require('@/assets/pc/services/service_labor_3.png'),
            title: '服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例',
            content:
              '服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介',
          },
          {
            img: require('@/assets/pc/services/service_labor_4.png'),
            title: '服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例',
            content:
              '服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介',
          },
          {
            img: require('@/assets/pc/services/service_labor_5.png'),
            title: '服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例',
            content:
              '服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介',
          },
          {
            img: require('@/assets/pc/services/service_labor_6.png'),
            title: '服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例',
            content:
              '服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介',
          },
          {
            img: require('@/assets/pc/services/service_labor_7.png'),
            title: '服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例',
            content:
              '服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介',
          },
          {
            img: require('@/assets/pc/services/service_labor_8.png'),
            title: '服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例',
            content:
              '服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介',
          },
          {
            img: require('@/assets/pc/services/service_labor_9.png'),
            title: '服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例服务案例',
            content:
              '服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介服务案例简介',
          },
        ],
      },
      nav: {},
      navTitle: '',
      navIcon: '',
      currentNavIndex: 0,
    });

    let navList = computed(() => root.store.state.nav.navList.filter(v => v.link === props.nav)).value;

    data.nav = navList[0].itemList.filter((v, i) => i === data.currentNavIndex)[0];
    data.navIcon = data.nav.icon;
    data.navTitle = data.nav.title;

    return { data };
  },
};
</script>

<style lang="scss" scoped>
.service-labor {
  @include center();
  .service-container {
    text-align: center;
    > p {
      margin: rem(130) 0 rem(60);
      font-size: rem(35);
      font-weight: bold;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      li {
        width: rem(481);
        margin-left: rem(43);
        &:nth-of-type(3n + 1) {
          margin-left: 0;
        }
        display: flex;
        flex-direction: column;
        margin-bottom: rem(100);
        img {
          width: 100%;
        }
        div {
          box-shadow: 0 0 10px 0 rgba(230, 230, 230, 0.7);
          padding: rem(33);
          p:nth-of-type(1) {
            margin-top: rem(28);
            margin-bottom: rem(31);
            font-weight: 549;
            font-size: rem(29);
            line-height: 1.5em;
            @include hh_ellipsis(2);
          }
          p:nth-of-type(2) {
            font-size: rem(25);
            color: #999;
            line-height: 1.6em;
            @include hh_ellipsis(3);
          }
        }
      }
    }
  }
}
.service-tag-container {
  .labor-tag-cont {
    display: flex;
    .tag-icon {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: rem(269);
      height: rem(269);
      padding: rem(57) 0 rem(75);
      box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      color: #fff;
      background-color: $primary-color;
      i {
        font-size: rem(80);
      }
      span {
        font-size: rem(25);
      }
    }
    p {
      width: rem(1030);
      margin-left: rem(42);
      font-weight: 549;
      letter-spacing: 1px;
      font-size: rem(25);
      line-height: 2em;
      @include hh_ellipsis(4);
      margin-right: rem(190);
      padding-top: rem(44);
    }
  }
}
</style>
