<template>
  <div class="intro">
    <div class="intro-about">
      <div class="intro-about-container">
        <p>{{ data.about.title }}</p>
        <ul class="about-con-cont">
          <li v-for="item in data.about.content" :key="item">
            {{ item }}
          </li>
        </ul>
      </div>
      <LazyImageSlot :imgUrl="require('@/assets/pc/intro/_introabout.png')" />
    </div>

    <div class="intro-idea">
      <div class="intro-idea-container">
        <div class="idea-con-title">
          <p>{{ data.idea.tagList.title }}</p>
          <ul class="idea-con-t1">
            <li v-for="item in data.idea.tagList.tag.tag_first" :key="item">
              {{ item }}
            </li>
          </ul>
          <ul class="idea-con-t2">
            <li v-for="item in data.idea.tagList.tag.tag_twice" :key="item">
              {{ item }}
            </li>
          </ul>
        </div>
        <ul class="idea-con-cont">
          <li v-for="item in data.idea.content" :key="item.icon">
            <i :class="item.icon"></i>
            <span>{{ item.title }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="intro-branch">
      <p>{{ data.branch.title }}</p>
      <ul>
        <li v-for="item in data.branch.content" :key="item.url">
          <LazyImageSlot :imgUrl="item.url" />
          <div class="branch-cont">
            <p>{{ item.title }}</p>
            <p>{{ item.content }}</p>
          </div>
        </li>
      </ul>
    </div>

    <div class="intro-honor">
      <p>{{ data.honor.title }}</p>
      <div class="intro-honor-container">
        <div class="arrow-left" @click="prevHandle('carouselIntroHonor')">
          <i class="el-icon-arrow-left"></i>
        </div>
        <el-carousel :autoplay="false" arrow="always" ref="carouselIntroHonor">
          <el-carousel-item v-for="(item, index) in data.honor.urls" :key="index">
            <ul>
              <li v-for="(childItem, idx) in item" :key="idx">
                <img v-lazy="childItem" />
              </li>
            </ul>
          </el-carousel-item>
        </el-carousel>
        <div class="arrow-right" @click="nextHandle('carouselIntroHonor')">
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
    </div>

    <div class="intro-photo">
      <p>{{ data.photo.title }}</p>
      <el-carousel :autoplay="false" arrow="always" ref="carouselIntroPhoto">
        <el-carousel-item v-for="(item, index) in data.photo.imgs" :key="index">
          <ul>
            <li v-for="(childItem, idx) in item" :key="idx">
              <img v-lazy="childItem" />
            </li>
          </ul>
        </el-carousel-item>
      </el-carousel>
      <Indicator @prevHandle="prevHandle('carouselIntroPhoto')" @nextHandle="nextHandle('carouselIntroPhoto')" />
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/composition-api';
export default {
  name: 'PCIntroIndex',
  components: {
    LazyImageSlot: () => import('../components/LazyImageSlot'),
    Indicator: () => import('../components/Indicator'),
  },
  setup(props, { refs }) {
    const data = reactive({
      about: {
        title: '关于昊泰',
        content: [
          '昊泰集团是一家集人力资源服务、劳务派遣、教育投资、职业技术培训、资产管理为一体的大型集团公司。',
          '集团拥有12家独立法人企业，在上海、江苏、广东、河南、重庆等省市，并在甘肃、贵州、云南、湖南等地建立了稳定的人才培养基地和人力储备基地。',
          '集团与富士康、科技、英业达、仁宝、纬创等知名企业建立了长期的人力资源外包服务关系。在职调度员130余万人。',
          '集团拥有5所具有独立办学资格的高职院校，实施高职院校专业化建设，产学研一体化50多所，为数万名学生搭建了教育就业的桥梁。',
          '集团是重庆市人才研究与人力资源服务协会理事单位，先后获得“重庆市人力资源诚信服务示范单位”、重庆市人力资源协会“优秀会员”等多项荣誉称号。',
          '集团致力于打造高度智能化的人力资源服务平台，打造行业领先、国内一流、具有世界影响力的人力资源服务品牌，为社会经济发展做出更大贡献。',
        ],
      },
      idea: {
        tagList: {
          title: '企业理念',
          tag: {
            tag_first: ['一切为了客户', '为了客户一切', '为了一切客户'],
            tag_twice: ['做一流员工；', '创一流服务；', '铸一流品牌；', '建一流企业'],
          },
        },
        content: [
          {
            icon: 'el-icon-data-line',
            title: '专业专注',
          },
          {
            icon: 'el-icon-medal-1',
            title: '诚信高效',
          },
          {
            icon: 'el-icon-sunrise-1',
            title: '务实创建',
          },
          {
            icon: 'el-icon-trophy-1',
            title: '合作共赢',
          },
        ],
      },
      branch: {
        title: '集团分司',
        content: [
          {
            url: require('../../../assets/pc/intro/_chongqing.png'),
            title: '重庆昊泰人力资源管理',
            content:
              '重庆昊泰简介重庆昊泰简介重庆昊泰简介重庆昊泰简介重庆昊泰简介重庆昊泰简介重庆昊泰简介重庆昊泰简介重庆昊泰简介重庆昊泰简介重庆昊泰简介重庆昊泰简介',
          },
          {
            url: require('../../../assets/pc/intro/_shanghai.png'),
            title: '上海昊泰人力资源管理',
            content:
              '重庆昊泰简介重庆昊泰简介重庆昊泰简介重庆昊泰简介重庆昊泰简介重庆昊泰简介重庆昊泰简介重庆昊泰简介重庆昊泰简介重庆昊泰简介重庆昊泰简介重庆昊泰简介',
          },
          {
            url: require('../../../assets/pc/intro/_jiangsu.png'),
            title: '江苏昊泰人力资源管理',
            content:
              '重庆昊泰简介重庆昊泰简介重庆昊泰简介重庆昊泰简介重庆昊泰简介重庆昊泰简介重庆昊泰简介重庆昊泰简介重庆昊泰简介重庆昊泰简介重庆昊泰简介重庆昊泰简介',
          },
          {
            url: require('../../../assets/pc/intro/_henan.png'),
            title: '河南昊泰人力资源管理',
            content:
              '重庆昊泰简介重庆昊泰简介重庆昊泰简介重庆昊泰简介重庆昊泰简介重庆昊泰简介重庆昊泰简介重庆昊泰简介重庆昊泰简介重庆昊泰简介重庆昊泰简介重庆昊泰简介',
          },
          {
            url: require('../../../assets/pc/intro/_sichuan.png'),
            title: '四川昊泰人力资源管理',
            content:
              '重庆昊泰简介重庆昊泰简介重庆昊泰简介重庆昊泰简介重庆昊泰简介重庆昊泰简介重庆昊泰简介重庆昊泰简介重庆昊泰简介重庆昊泰简介重庆昊泰简介重庆昊泰简介',
          },
        ],
      },
      honor: {
        title: '企业荣誉',
        urls: [
          [
            require('@/assets/pc/intro/honor_1.png'),
            require('@/assets/pc/intro/honor_2.png'),
            require('@/assets/pc/intro/honor_3.png'),
            require('@/assets/pc/intro/honor_4.png'),
          ],
          [
            require('@/assets/pc/intro/photo_4.png'),
            require('@/assets/pc/intro/photo_3.png'),
            require('@/assets/pc/intro/photo_2.png'),
            require('@/assets/pc/intro/photo_1.png'),
          ],
          [
            require('@/assets/pc/intro/honor_1.png'),
            require('@/assets/pc/intro/honor_2.png'),
            require('@/assets/pc/intro/honor_3.png'),
            require('@/assets/pc/intro/honor_4.png'),
          ],
          [
            require('@/assets/pc/intro/honor_4.png'),
            require('@/assets/pc/intro/honor_3.png'),
            require('@/assets/pc/intro/honor_2.png'),
            require('@/assets/pc/intro/honor_1.png'),
          ],
        ],
      },
      photo: {
        title: '员工合影',
        imgs: [
          [
            require('@/assets/pc/intro/photo_1.png'),
            require('@/assets/pc/intro/photo_2.png'),
            require('@/assets/pc/intro/photo_3.png'),
            require('@/assets/pc/intro/photo_4.png'),
            require('@/assets/pc/intro/photo_5.png'),
            require('@/assets/pc/intro/photo_6.png'),
          ],
          [
            require('@/assets/pc/intro/photo_1.png'),
            require('@/assets/pc/intro/photo_2.png'),
            require('@/assets/pc/intro/photo_3.png'),
            require('@/assets/pc/intro/photo_4.png'),
            require('@/assets/pc/intro/photo_5.png'),
            require('@/assets/pc/intro/photo_6.png'),
          ],
          [
            require('@/assets/pc/intro/photo_1.png'),
            require('@/assets/pc/intro/photo_2.png'),
            require('@/assets/pc/intro/photo_3.png'),
            require('@/assets/pc/intro/photo_4.png'),
            require('@/assets/pc/intro/photo_5.png'),
            require('@/assets/pc/intro/photo_6.png'),
          ],
          [
            require('@/assets/pc/intro/photo_1.png'),
            require('@/assets/pc/intro/photo_2.png'),
            require('@/assets/pc/intro/photo_3.png'),
            require('@/assets/pc/intro/photo_4.png'),
            require('@/assets/pc/intro/photo_5.png'),
            require('@/assets/pc/intro/photo_6.png'),
          ],
        ],
      },
    });

    const prevHandle = prev => {
      refs[prev].prev();
    };
    const nextHandle = next => {
      refs[next].next();
    };

    return { data, prevHandle, nextHandle };
  },
};
</script>

<style lang="scss" scoped>
.intro {
  .intro-about,
  .intro-idea-container,
  .intro-branch,
  .intro-honor,
  .intro-photo {
    width: rem($primary-width);
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-top: rem(130);
  }
  .intro-branch,
  .intro-honor,
  .intro-photo {
    text-align: center;
    > p {
      margin-bottom: rem(57);
      font-size: rem(33);
      font-weight: bold;
    }
  }
  .intro-about {
    display: flex;
    justify-content: space-between;
    .intro-about-container {
      margin-right: rem(56);
      p {
        font-size: rem(32);
        font-weight: bold;
        margin-bottom: rem(44);
        text-indent: 1.3em;
      }
      .about-con-cont {
        li {
          font-size: rem(20);
          text-indent: 2.3em;
          letter-spacing: 1px;
          line-height: 1.5em;
          margin-bottom: rem(40);
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
  .intro-idea {
    background-image: url('../../../assets/pc/intro/introBanner.png');
    width: 100%;
    height: rem(682);
    text-align: center;
    position: relative;
    &::before {
      content: '';
      display: inline-block;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background-color: #000;
      opacity: 0.6;
    }
    .intro-idea-container {
      padding-top: rem(60);
      .idea-con-title {
        margin-bottom: rem(123);
        color: #fff;
        p {
          font-size: rem(35);
          margin-bottom: rem(46);
        }
        .idea-con-t1,
        .idea-con-t2 {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: rem(23);
          li {
            &:first-child {
              margin-left: 0;
            }
          }
        }
        .idea-con-t1 {
          margin-bottom: rem(25);
          li {
            margin-left: rem(44);
          }
        }
        .idea-con-t2 {
          li {
            margin-left: rem(29);
          }
        }
      }
      .idea-con-cont {
        display: flex;
        justify-content: space-between;
        li {
          height: rem(492);
          width: rem(338);
          padding: rem(100) 0 rem(120);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 0 3px 0 #ccc;
          background-color: #fff;
          box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
          cursor: pointer;
          i {
            font-size: rem(105);
          }
          span {
            font-size: rem(32);
          }
          &:hover {
            background-color: #043584;
            box-shadow: 0 0 3px 0 #043584;
            i,
            span {
              color: #fff;
            }
          }
        }
      }
    }
  }
  .intro-branch {
    margin-top: rem(284);
    margin-bottom: rem(130);
    ul {
      height: rem(739);
      li {
        display: flex;
        flex-direction: column;
        width: rem(484);
        float: left;
        margin-left: rem(26);
        text-align: left;
        .el-image {
          width: 100%;
          height: 100%;
        }
        .branch-cont {
          margin-left: rem(20);
          cursor: pointer;
          p:first-child {
            font-size: rem(24);
            margin-top: rem(25);
            font-weight: bold;
          }
          p:last-child {
            font-size: rem(17);
            margin-top: rem(20);
            margin-bottom: rem(30);
            color: #bbb;
          }
          &:hover {
            p:first-child {
              color: $primary-color;
              text-decoration: underline;
            }
          }
        }
        &:nth-of-type(2),
        &:nth-of-type(3),
        &:nth-of-type(4),
        &:nth-of-type(5) {
          .branch-cont {
            margin-left: rem(20);
            p:last-child {
              @include ellipsis();
            }
          }
        }
        &:first-child {
          width: rem(510);
          margin-left: 0;
          height: 100%;
          box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
          color: #000;
          line-height: 1.1em;
          .branch-cont {
            padding: 0 rem(20) rem(42) rem(20);
            margin-left: 0;
            border: 1px solid #ddd;
            border-top: none;
            p:first-child {
              margin-top: rem(30);
            }
            p:last-child {
              color: #000;
              margin-top: rem(33);
              line-height: 1.4em;
              margin-bottom: 0;
              @include hh_ellipsis(3);
            }
          }
        }
      }
    }
  }
  .intro-honor {
    padding: rem(60) 0;
    width: 100%;
    box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
    background-color: #ccc;
    .intro-honor-container {
      display: flex;
      align-items: center;
      justify-content: center;
      ul {
        display: flex;
        justify-content: space-between;
        li {
          margin-left: rem(34);
          &:first-child {
            margin-left: 0;
          }
          img {
            width: rem(359);
          }
          .el-image {
            width: rem(359);
          }
        }
      }
      .arrow-left,
      .arrow-right {
        position: relative;
        width: rem(52);
        height: rem(52);
        background-color: #043584;
        border-radius: 50%;
        cursor: pointer;
        i {
          color: #fff;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate3d(-50%, -50%, 0);
        }
      }
      .arrow-left {
        margin-right: rem(50);
      }
      .arrow-right {
        margin-left: rem(50);
      }
    }
  }
  .intro-photo {
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        margin-left: rem(25);
        &:nth-of-type(1),
        &:nth-of-type(2),
        &:nth-of-type(3) {
          margin-bottom: rem(18);
        }
        &:first-child,
        &:nth-of-type(4) {
          margin-left: 0;
        }
        img {
          height: rem(277);
        }
      }
    }
  }
}
</style>
<style lang="scss">
.intro-about {
  .el-image {
    width: 100%;
    img {
      width: 100%;
    }
  }
}
.intro-photo {
  .el-image {
    width: 100%;
    img {
      width: 100%;
    }
  }
}
.intro-honor-container {
  .el-carousel.el-carousel--horizontal {
    width: rem(359 * 4 + 3 * 34);
    height: rem(359);
  }
  .el-carousel__indicators.el-carousel__indicators--horizontal {
    display: none;
  }
  .el-carousel__container {
    height: rem(359);
    button {
      display: none;
    }
  }
}
.intro-photo {
  .el-carousel.el-carousel--horizontal {
    width: rem($primary-width);
    height: rem(277 * 2 + 18);
  }
  .el-carousel__indicators.el-carousel__indicators--horizontal {
    display: none;
  }
  .el-carousel__container {
    height: rem(277 * 2 + 18);
    button {
      display: none;
    }
  }
}
</style>
