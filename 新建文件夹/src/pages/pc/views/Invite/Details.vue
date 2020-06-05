<template>
  <div>
    <Nav type="default" />

    <div class="invite-details">
      <img v-lazy="data.info.img" />
      <div class="details-container">
        <p>{{ data.info.title }}</p>
        <p>{{ data.info.content }}</p>
      </div>
      <div class="details-condition">
        <p>招聘岗位:</p>
        <ul>
          <li v-for="(item, idx) in data.condition" :key="item.name">
            <p>{{ idx + 1 }}.{{ item.name }}:</p>
            任职要求
            <p>{{ item.con }}</p>
          </li>
        </ul>
        说明: {{ data.explain }}
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed, onActivated } from '@vue/composition-api';
export default {
  name: 'PCInviteDetails',
  components: {
    Nav: () => import('@/pages/pc/common/Nav'),
  },
  setup(props, { root }) {
    let data = reactive({
      info: {},
      condition: [
        {
          name: '经理',
          con: '工作三到五年, 大专及以上学历',
        },
        {
          name: '人事',
          con: '工作三到五年, 大专及以上学历',
        },
        {
          name: '保安保洁',
          con: '工作三到五年, 大专及以上学历',
        },
        {
          name: '技术总监',
          con: '工作三到五年, 大专及以上学历',
        },
      ],
      explain:
        '我们不一样!我们的前端跟普通的前端还不一样。现在没有使用webpack 至于组件化之类的 都是我们自己实现的 而且我们也不用ajax这种通信模式 而是采用websocket ，数据格式不是json 而是二进制。团队内部正在酝酿一套契合自身项目特色的开发架构',
    });

    onActivated(() => {
      data.info = computed(() => root.store.state.invite.details).value;
    });

    return { data };
  },
};
</script>

<style lang="scss" scoped>
.invite-details {
  @include center();
  img {
    float: right;
    width: rem(646);
    margin: 0 0 rem(60) rem(116);
  }
  .details-container {
    padding-top: rem(65);
    p:nth-of-type(1) {
      margin-bottom: rem(76);
      font-size: rem(26);
      font-weight: bold;
    }
    p:nth-of-type(2) {
      font-size: rem(23);
      line-height: 2.3em;
    }
  }
  .details-condition {
    > p {
      font-weight: bold;
      margin: rem(30) 0;
      font-size: rem(26);
    }
    ul {
      li {
        display: flex;
        margin-bottom: rem(25);
        &:last-child {
          margin-bottom: rem(40);
        }
        p:nth-of-type(1) {
          margin-right: rem(40);
        }
        p:nth-of-type(2) {
          margin-right: rem(30);
        }
      }
    }
  }
}
</style>
