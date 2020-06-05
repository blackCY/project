<template>
  <div class="footer">
    <div class="footer-container">
      <div class="footer-top">
        <div class="footer-top-left">
          <LazyImageSlot :imgUrl="require('@/assets/bgc.jpg')" />
          <div>
            <p>诚信、高效、廉洁、共赢</p>
          </div>
          <ul>
            <li v-for="item in data.footerData.left.content" :key="item">
              {{ item }}
            </li>
          </ul>
        </div>

        <footer-info
          :data="data.footerData.main.quickLink"
          class="main-wid-quick"
          footerMainMargin="24px 0 0 0 "
        ></footer-info>

        <footer-info
          :data="data.footerData.main.industry"
          class="main-wid-indu"
          footerMainMargin="24px 0 0 0 "
        ></footer-info>

        <div class="footer-info-dis main-wid-dis">
          <footer-info :data="data.footerData.main.address" footerMainMargin="24px 0 0 0 "></footer-info>
          <footer-info
            :data="data.footerData.main.callCenter"
            class="info-dis-bot"
            footerMainMargin="8px 0 0 0 "
          ></footer-info>
        </div>
      </div>

      <div class="footer-bottom">
        重庆昊泰集团有限公司2017版权所有 渝ICP备3943773号 技术支持： 红杉软件
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/composition-api';
export default {
  name: 'Footer',
  components: {
    FooterInfo: () => import('./FooterInfo'),
    LazyImageSlot: () => import('./LazyImageSlot'),
  },
  setup() {
    const data = reactive({
      footerData: {
        left: {
          content: [
            '国内一流的职教品牌和人才服务品牌',
            '创建世界一流公司 打造世界一流品牌',
            '客户满意 是昊泰不懈追求的目标',
          ],
        },
        main: {
          quickLink: {
            title: '快速链接',
            content: ['集团简介', '新闻动态', '集团服务', '联系我们', '人才招聘'],
          },
          industry: {
            title: '集团产业',
            content: ['教育投资', '人力资源服务', '资产经营', '合作办学'],
          },
          address: {
            title: '公司地址',
            icon: 'el-icon-phone',
            content: ['重庆市北部新区栖霞路金贸时代北区1栋1单元12楼'],
          },
          callCenter: {
            title: '呼叫中心',
            icon: 'el-icon-phone',
            content: ['023-63017888 0512-57162722', '传真: 023-67550949'],
          },
        },
      },
    });

    return { data };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background-image: url('../../../assets/pc/intro/introBanner.png');
  clear: both;
  background-size: 100% 100%;
  margin-top: rem(130);
  padding-top: rem(90);
  .footer-container {
    display: flex;
    flex-direction: column;
    width: rem($primary-width);
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    .footer-top {
      display: flex;
      justify-content: space-between;
      padding-bottom: rem(20);
      i {
        margin-right: rem(14);
      }
      .footer-info-dis {
        position: relative;
        .footer-main {
          &::before {
            width: 0;
          }
        }
        .info-dis-bot {
          margin-top: rem(29);
        }
      }
      .footer-top-left {
        display: flex;
        font-size: rem(15);
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        position: relative;
        li {
          margin-bottom: rem(15);
          font-size: rem(14);
          text-align: left;
        }
        p {
          padding-top: rem(20);
          font-size: rem(14);
          padding-bottom: rem(10);
          margin-bottom: rem(29);
        }
        div {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          font-size: rem(20);
          margin-left: rem(6);
          font-weight: bold;
          p {
            font-size: rem(16);
          }
        }
      }
    }
    .footer-bottom {
      font-size: rem(17);
      height: rem(68);
      line-height: rem(68);
      color: #fff;
      text-align: center;
      background-color: $primary-color;
    }
  }
}
</style>
<style lang="scss">
.footer-top-left {
  .el-image {
    width: rem(190);
    height: rem(50);
  }
}
</style>
