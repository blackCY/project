<template>
  <div>
    <Nav type="default" :but="true" @handleBtnClick="handleBtnClick" />

    <ul class="invite">
      <li v-for="(item, idx) in data.society" :key="idx">
        <div class="invite-left-container">
          <p>{{ item.title }}</p>
          <p>{{ item.content }}</p>
          <span @click="handleDetails(idx)">
            查看更多
            <i class="el-icon-right"></i>
          </span>
        </div>
        <img v-lazy="item.img" />
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive } from '@vue/composition-api';
import { GET_INVITE_DETAILS } from '@/store/modules/invite/mutations-types';
export default {
  name: 'PCInviteSociety',
  components: {
    Nav: () => import('@/pages/pc/common/Nav'),
  },
  setup(props, { root }) {
    const data = reactive({
      society: [
        {
          img: require('@/assets/pc/invite/society/society_invite_1.png'),
          title: '招聘标题',
          content:
            '招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容',
        },
        {
          img: require('@/assets/pc/invite/society/society_invite_2.png'),
          title: '招聘标题',
          content:
            '招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容招聘内容',
        },
      ],
    });
    const handleDetails = deatilsIdx => {
      root.store.commit(`invite/${GET_INVITE_DETAILS}`, data.society[deatilsIdx]);

      root.$router.push({
        name: 'PCInviteDetails',
        params: {
          id: deatilsIdx + 1,
        },
      });
    };

    const handleBtnClick = () => {
      root.$router.push({
        name: 'PCInviteApplyFor',
      });
    };

    return { data, handleDetails, handleBtnClick };
  },
};
</script>

<style lang="scss" scoped>
.invite {
  @include center();
  display: flex;
  flex-direction: column;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: rem(30);
    padding-bottom: rem(30);
    border-bottom: 1px solid #dfdfdf;
    .invite-left-container {
      margin-right: rem(116);
      p:nth-of-type(1) {
        font-size: rem(25);
        font-weight: bold;
        margin-bottom: rem(75);
      }
      p:nth-of-type(2) {
        font-size: rem(23);
        line-height: 1.5em;
        @include hh_ellipsis(3);
        margin-bottom: rem(46);
      }
      span {
        font-size: rem(23);
        cursor: pointer;
        &:hover {
          color: #023586;
        }
      }
    }
    img {
      height: rem(422);
    }
  }
}
</style>
