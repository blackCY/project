<template>
  <div class="home">
    <Header />

    <div class="home-nav-swipe">
      <el-carousel :interval="2500" arrow="always" ref="carouselItem">
        <el-carousel-item v-for="item in 4" :key="item">
          <div class="nav-swipe-item">
            <img :src="require('@/assets/bgc.jpg')" alt="" />
            <ul>
              <li v-for="liItem in 4" :key="liItem">诚信</li>
            </ul>
            <p>HONEST HONEST, EFFICIENT AND WIN-WIN</p>
          </div>
        </el-carousel-item>
      </el-carousel>
      <i class="el-icon-arrow-left" @click="prevHandle('carouselItem')"></i>
      <i class="el-icon-arrow-right" @click="nextHandle('carouselItem')"></i>
    </div>

    <div class="company-news">
      <div class="news-img">
        <LazyImageSlot :imgUrl="require('@/assets/bgc.jpg')" />
        <div class="news-img-tag">
          <span>15</span>
          <span>05月</span>
          <span>2020</span>
        </div>
        <div class="news-img-title">
          资讯名称资讯名称资讯名称资讯名称资讯名称资讯名称资讯名称资讯名称资讯名称资讯名称
        </div>
      </div>
      <div class="news-cont">
        <p>{{ data.companyNews.title }}</p>
        <ul class="company-news-ul">
          <li class="company-news-li" v-for="newItem in data.companyNews.content" :key="newItem.time">
            <p>{{ newItem.new }}</p>
            <span>{{ newItem.time }}</span>
          </li>
        </ul>
        <button>查看更多</button>
      </div>
    </div>

    <div class="company-intro">
      <div class="intro-img">
        <LazyImageSlot :imgUrl="require('@/assets/bgc.jpg')" />
      </div>
      <div class="intro-cont">
        <ul class="intro-cont-tag">
          <li v-for="item in 2" :key="item">
            集团简介
          </li>
        </ul>
        <p>昊泰集团</p>
        <ul class="intro-cont-con">
          <li v-for="item in 3" :key="item">
            昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团昊泰集团
          </li>
        </ul>
      </div>
    </div>

    <div class="company-panorama">
      <img src="@/assets/bgc.jpg" alt="" />
    </div>

    <div class="company-event">
      <p>集团大事件</p>
      <div class="company-event-container">
        <div class="event-con-img">
          <LazyImageSlot :imgUrl="require('@/assets/bgc.jpg')" />
          <div class="con-img-tag">
            <p>
              事件描述事件描述事件描述事件描述事件描述事件描述事件描述事件描述事件描述事件描述事件描述事件描述事件描述事件描述事件描述事件描述
            </p>
            <p>
              更多
              <i class="el-icon-right"></i>
            </p>
          </div>
        </div>
        <ul class="event-con-cont">
          <li v-for="item in 5" :key="item">
            <template v-if="item % 2 === 0">
              <div class="event-concont-con">
                <i class="el-icon-star-on"></i>
                <span>集团上市</span>
              </div>
              <span>2019</span>
            </template>
            <template v-else>
              <span>2019</span>
              <div class="event-concont-con">
                <i class="el-icon-star-on"></i>
                <span>集团上市</span>
              </div>
            </template>
          </li>
        </ul>
      </div>
    </div>

    <div class="company-leader">
      <p>集团领袖</p>
      <div class="company-leader-container">
        <div class="leader-con-cont">
          <LazyImageSlot :imgUrl="require('@/assets/avatar.jpg')" />
          <span>张成功</span>
          <div class="con-cont-card">集团总裁</div>
        </div>
        <ul class="leader-con-img">
          <li v-for="item in 6" :key="item" ref="leaders">
            <LazyImageSlot :imgUrl="require(`@/assets/images/${item}.jpg`)" />
          </li>
        </ul>
      </div>
    </div>

    <div class="company-service">
      <p>昊泰服务</p>
      <el-carousel :autoplay="false" arrow="always" ref="carouselService">
        <el-carousel-item v-for="(item, index) in data.companyServices" :key="index">
          <ul class="company-service-container">
            <li v-for="childItem in item" :key="childItem.title">
              <div class="service-tag">
                <i class="el-icon-star-on"></i>
                <span>{{ childItem.title }}</span>
              </div>
              <p>{{ childItem.content }}</p>
              <p>
                查看更多
                <i class="el-icon-right"></i>
              </p>
            </li>
          </ul>
        </el-carousel-item>
      </el-carousel>
      <Indicator @prevHandle="prevHandle('carouselService')" @nextHandle="nextHandle('carouselService')" />
    </div>

    <div class="company-video">
      <p>视频中心</p>
      <div class="video-warp" @mouseenter="videoMouseenter" @mouseleave="videoMouseLeave">
        <video
          id="myvideo"
          :controls="data.isControl"
          poster="@/assets/bgc.jpg"
          :src="require('@/assets/t1-ui.mp4')"
          ref="video"
          preload="none"
        >
          当前浏览器不支持 video直接播放，点击这里下载视频：
          <a href="myvideo.webm">下载视频</a>
        </video>
        <i :class="data.videoPlayIcon" @click="videoHandle"></i>
      </div>
    </div>

    <div class="company-mien">
      <p>集团风采</p>
      <ul class="company-mien-tag">
        <li>全部</li>
        <li>公司荣誉</li>
        <li>公司荣誉</li>
        <li>公司荣誉</li>
        <li>公司荣誉</li>
      </ul>
      <!--<div class="company-mien-cont">-->
      <ul class="company-mien-cont">
        <li v-for="item in data.companyMien" :key="item">
          <img v-lazy="item" />
        </li>
      </ul>
      <!--<li>
          <LazyImageSlot :imgUrl="require('@/assets/图层1.png')" />
        </li>
        <ul class="cont-2">
          <li v-for="item in 2" :key="item">
            <LazyImageSlot :imgUrl="require('@/assets/图层1.png')" />
          </li>
        </ul>-->
      <!--</div>-->
    </div>
    <Footer />
  </div>
</template>

<script>
import { reactive, onMounted } from '@vue/composition-api';
export default {
  name: 'PCIndex',
  components: {
    // wait: webpackPrefetch
    Header: () => import('../components/Header'),
    Footer: () => import('../components/Footer'),
    LazyImageSlot: () => import('../components/LazyImageSlot'),
    Indicator: () => import('../components/Indicator'),
  },
  setup(props, { refs }) {
    const data = reactive({
      companyIndustry: [
        {
          icon: 'el-icon-eleme',
          title: '教育投资',
          content: '教育投资教育投资教育投资教育投资教育投资教育投资教育投资',
        },
        {
          icon: 'el-icon-eleme',
          title: '教育投资',
          content: '教育投资教育投资教育投资教育投资教育投资教育投资教育投资',
        },
        {
          icon: 'el-icon-eleme',
          title: '教育投资',
          content: '教育投资教育投资教育投资教育投资教育投资教育投资教育投资',
        },
      ],
      companyEvent: [
        {
          icon: 'el-icon-eleme',
          title: '你好你好',
          time: '2016',
        },
        {
          icon: 'el-icon-eleme',
          title: '你好你好',
          time: '2017',
        },
        {
          icon: 'el-icon-eleme',
          title: '你好你好',
          time: '2018',
        },
        {
          icon: 'el-icon-eleme',
          title: '你好你好',
          time: '2019',
        },
        {
          icon: 'el-icon-eleme',
          title: '你好你好',
          time: '2020',
        },
      ],
      companyNews: {
        title: '集团新闻',
        content: [
          {
            new: '你好你好那说最小水岸聂翠尅小拽老脑类型荟萃你好你好那说最小水岸聂翠尅小拽老脑类型荟萃',
            time: '2020-20-18',
          },
          {
            new: '你好你好那说最小水岸聂翠尅小拽老脑类型荟萃你好你好那说最小水岸聂翠尅小拽老脑类型荟萃',
            time: '2020-20-19',
          },
          {
            new: '你好你好那说最小水岸聂翠尅小拽老脑类型荟萃你好你好那说最小水岸聂翠尅小拽老脑类型荟萃',
            time: '2020-20-20',
          },
        ],
      },
      companyLeaders: [
        {
          avatar: '',
          name: '张三',
          idcard: '',
          desc: '张三是一个性格开朗的人张三是一个性格开朗的人张三是一个性格开朗的人张三是一个性格开朗的人',
          infoImage: '',
        },
        {
          avatar: '',
          name: '张三',
          idcard: '',
          desc: '张三是一个性格开朗的人张三是一个性格开朗的人张三是一个性格开朗的人张三是一个性格开朗的人',
          infoImage: '',
        },
        {
          avatar: '',
          name: '张三',
          idcard: '',
          desc: '张三是一个性格开朗的人张三是一个性格开朗的人张三是一个性格开朗的人张三是一个性格开朗的人',
          infoImage: '',
        },
        {
          avatar: '',
          name: '张三',
          idcard: '',
          desc: '张三是一个性格开朗的人张三是一个性格开朗的人张三是一个性格开朗的人张三是一个性格开朗的人',
          infoImage: '',
        },
        {
          avatar: '',
          name: '张三',
          idcard: '',
          desc: '张三是一个性格开朗的人张三是一个性格开朗的人张三是一个性格开朗的人张三是一个性格开朗的人',
          infoImage: '',
        },
        {
          avatar: '',
          name: '张三',
          idcard: '',
          desc: '张三是一个性格开朗的人张三是一个性格开朗的人张三是一个性格开朗的人张三是一个性格开朗的人',
          infoImage: '',
        },
      ],
      companyServices: [
        [
          {
            title: '劳务派遣',
            content: '劳务派遣劳务派遣劳务派遣劳务派遣劳务派遣劳务派遣劳务派遣劳务派遣劳务派遣劳务派遣',
          },
          {
            title: '教育投资',
            content: '教育投资教育投资教育投资教育投资教育投资教育投资教育投资教育投资教育投资教育投资',
          },
          {
            title: '人力外包',
            content: '人力外包人力外包人力外包人力外包人力外包人力外包',
          },
        ],
        [
          {
            title: '校企合作',
            content: '校企合作校企合作校企合作校企合作校企合作校企合作校企合作',
          },
          {
            title: '更多服务',
            content: '更多服务更多服务更多服务更多服务更多服务更多服务更多服务',
          },
          {
            title: '测试片段',
            content: '测试片段测试片段测试片段测试片段测试片段测试片段测试片段',
          },
        ],
        [
          {
            title: '还是测试',
            content: '还是测试还是测试还是测试还是测试还是测试还是测试还是测试',
          },
          {
            title: '继续测试',
            content: '继续测试继续测试继续测试继续测试继续测试继续测试继续测试',
          },
          {
            title: '测试内容',
            content: '测试内容测试内容测试内容测试内容测试内容测试内容测试内容',
          },
        ],
      ],
      companyMien: [
        require('../../../assets/pc/index/mien/mien_1.png'),
        require('../../../assets/pc/index/mien/mien_2.png'),
        require('../../../assets/pc/index/mien/mien_3.png'),
        require('../../../assets/pc/index/mien/mien_4.png'),
        require('../../../assets/pc/index/mien/mien_5.png'),
        require('../../../assets/pc/index/mien/mien_6.png'),
        require('../../../assets/pc/index/mien/mien_7.png'),
      ],
      videoPlayIcon: 'el-icon-video-play',
      isControl: false,
      initControlShow: false,
    });
    const prevHandle = prev => refs[prev].prev();
    const nextHandle = next => refs[next].next();
    // 视频暂停事件
    const videoPause = () => (data.videoPlayIcon = 'el-icon-video-play');
    // 视频播放事件
    const videoPlay = () => (data.videoPlayIcon = '');
    // 移入 video
    const videoMouseenter = () => {
      if (refs['video'].paused === true || refs['video'].ended) {
        data.videoPlayIcon = 'el-icon-video-play';
      } else {
        data.videoPlayIcon = 'el-icon-video-pause';
      }
      // 让 video 控制条显示
      data.initControlShow && (data.isControl = true);
      // 监听视频暂停
      refs['video'].addEventListener('pause', videoPause);
      // 监听视频播放
      refs['video'].addEventListener('play', videoPlay);
    };
    // 移出 video
    const videoMouseLeave = () => {
      if (refs['video'].paused === true) {
        data.videoPlayIcon = 'el-icon-video-play';
      } else {
        data.videoPlayIcon = '';
        // 让 video 控制条隐藏
        data.isControl = false;
      }
      // 移除对视频暂停的监听
      refs['video'].removeEventListener('pause', videoPause);
      // 移除对视频播放的监听
      refs['video'].removeEventListener('play', videoPlay);
    };

    // 点击播放或暂停
    const videoHandle = () => {
      if (refs['video'].paused || refs['video'].ended) {
        refs['video'].play();
        data.videoPlayIcon = '';
        data.isControl = true;
        if (!data.initControlShow) data.initControlShow = true;
      } else {
        refs['video'].pause();
        data.videoPlayIcon = 'el-icon-video-play';
      }
    };

    onMounted(() => {
      refs['leaders'].forEach((v, i) => {
        v.style.cssText = `right: ${i * (5 * -1)}%; top: ${i * 5}%; width: ${10 * i}%; height: ${5 * i}%`;
        // if()
        // v.style.cssText = `right: ${i * 20 - 60}rem; width: ${100 + 50 * i}rem; height: ${100 +
        //   i * 50} rem; top: ${100 - i * 20}rem`;
      });
    });
    // but.onclick = function() {
    //   Array.from(li).forEach((v, i) => {
    //     if(i < 5) {
    //       v.style.cssText = `right: ${(i+1) * 20-60}px; width: ${100+50*(i+1)}px; height: ${100+(i+1)*50}px; top: ${100-(i+1)*20}px`;
    //     } else {
    //       v.style.transform = 'rotateZ(-90deg)'
    //       v.style.opacity = 0;
    //     }
    //   });
    // }

    return { data, prevHandle, nextHandle, videoHandle, videoMouseenter, videoMouseLeave };
  },
};
</script>

<style lang="scss" scoped>
.home {
  background-color: #fff;
  text-align: center;
}
.company-news,
.company-intro,
.company-panorama,
.company-event,
.company-service {
  @include center();
  margin-top: rem(130);
}
.company-event,
.company-service,
.company-video,
.company-mien,
.company-leader {
  text-align: center;
  > p {
    font-size: rem(35);
    margin-bottom: rem(97);
  }
}
.home-nav-swipe {
  width: 100%;
  height: rem(1080);
  text-align: center;
  position: relative;
  margin-top: rem(-144);
  .nav-swipe-item {
    position: relative;
    height: 100%;
    p {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: rem(490);
      font-size: 16px;
    }
    ul {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: rem(370);
      font-size: rem(44);
      display: flex;
      li {
        justify-content: space-between;
        margin-left: rem(99);
        &:first-child {
          margin-left: 0;
        }
      }
    }
  }
  i {
    position: absolute;
    bottom: rem(294);
    font-size: rem(34);
    color: #a6b8d0;
    cursor: pointer;
    z-index: 10;
  }
  i.el-icon-arrow-left {
    left: rem(100) !important;
  }
  i.el-icon-arrow-right {
    right: rem(100) !important;
  }
}
.company-news {
  display: flex;
  justify-content: space-between;
  .news-img {
    position: relative;
    .news-img-tag {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: $primary-color;
      top: 0;
      right: rem(30);
      width: rem(110);
      height: rem(118);
      box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      padding: rem(20) rem(33) 9px rem(22);
      span {
        color: #fff;
      }
      span:first-child {
        font-size: 18px;
      }
      span:nth-of-type(2) {
        font-size: 14px;
      }
      span:last-child {
        font-size: 12px;
      }
    }
    .news-img-title {
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: rem(49) rem(137) rem(50) rem(44);
      box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      color: #fff;
      font-size: rem(35);
      @include ellipsis;
      opacity: 0.8;
      background-color: $primary-color;
    }
  }
  .news-cont {
    display: flex;
    flex-direction: column;
    margin-top: rem(21);
    justify-content: flex-start;
    align-items: flex-start;
    > p {
      font-size: rem(35);
      font-weight: bold;
    }
    .company-news-ul {
      width: rem(635);
      margin-top: rem(97);
      .company-news-li {
        width: 100%;
        padding: rem(28) rem(22) rem(23) rem(27);
        cursor: pointer;
        box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
        text-align: left;
        margin-bottom: rem(40);
        box-shadow: 0 0 5px 0 #ccc;
        &:last-child {
          margin-bottom: rem(50);
        }
        &:hover {
          background-color: $primary-color;
          box-shadow: 0 5px 10px -5px $primary-color;
          & p,
          & span {
            color: #fff;
          }
        }
        p {
          font-size: rem(25);
          @include ellipsis;
          width: 100%;
          margin-bottom: rem(25);
        }
        span {
          font-size: 12px;
          color: #a1a1a1;
        }
      }
    }
    button {
      outline: none;
      background-color: #fff;
      color: #083c87;
      cursor: pointer;
      width: rem(189);
      height: rem(52);
      border: 1px solid #083c87;
    }
  }
}
.company-intro {
  display: flex;
  justify-content: space-between;
  .intro-cont {
    display: flex;
    flex-direction: column;
    margin-top: rem(21);
    justify-content: flex-start;
    align-items: flex-start;
    .intro-cont-tag {
      display: flex;
      li {
        text-align: center;
        line-height: rem(58);
        width: rem(188);
        height: rem(58);
        font-size: rem(26);
        box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
        border-bottom: 2px solid $primary-color;
        cursor: pointer;
        margin-left: rem(77);
        &:first-child {
          margin-left: 0;
        }
        &:hover {
          color: #fff;
          background-color: $primary-color;
        }
      }
    }
    p {
      font-size: rem(35);
      margin: rem(93) 0 rem(48);
      font-weight: bold;
    }
    .intro-cont-con {
      display: flex;
      flex-direction: column;
      li {
        width: rem(632);
        font-size: rem(19);
        margin-bottom: rem(20);
        line-height: 2em;
        letter-spacing: 1px;
        @include hh_ellipsis(3);
      }
    }
  }
}
.company-panorama {
  width: 100%;
}
.company-event {
  .company-event-container {
    display: flex;
    justify-content: space-between;
    .event-con-img {
      width: rem(886);
      height: rem(924);
      position: relative;
      .con-img-tag {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: rem(208);
        box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
        padding: rem(35) rem(68) rem(30) rem(40);
        color: #fff;
        background-color: #123b79;
        opacity: 0.8;
        p:first-child {
          font-size: rem(28);
          @include hh_ellipsis(2);
          line-height: 1.14em;
          letter-spacing: 2px;
        }
        p:last-child {
          font-size: rem(27);
          position: absolute;
          right: rem(78);
          bottom: rem(30);
          cursor: pointer;
        }
      }
    }
    .event-con-cont {
      position: relative;
      width: rem(560);
      li {
        height: 20%;
        width: 50%;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        padding: 0 rem(44) 0 rem(32);
        border-bottom: rem(6) solid $primary-color;
        box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
        cursor: pointer;
        .event-concont-con {
          margin-bottom: rem(13);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          i {
            font-size: rem(58);
            margin-bottom: rem(21);
          }
          span {
            font-size: rem(30);
          }
        }
        > span {
          margin-bottom: rem(13);
          font-size: 14px;
        }
        &:hover {
          background-color: $primary-color;
          color: #fff;
        }
        &:nth-of-type(2n + 1) {
          margin-left: 50%;
        }
      }
      &::before {
        content: '';
        display: inline-block;
        position: absolute;
        height: 100%;
        width: rem(10);
        background-color: $primary-color;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}
.company-leader {
  margin-top: rem(130);
  text-align: center;
  position: relative;
  text-align: center;
  .company-leader-container {
    background-image: url('../../../assets/bgc.jpg');
    height: rem(698);
    display: flex;
    align-items: center;
    justify-content: center;
    .leader-con-cont {
      display: flex;
      flex-direction: column;
      align-items: center;
      .el-image {
        margin-bottom: rem(35);
        width: rem(225);
        height: rem(225);
        border-radius: 50%;
      }
      span {
        font-size: rem(36);
        color: #fff;
      }
      .con-cont-card {
        font-size: rem(28);
        width: rem(242);
        height: rem(56);
        line-height: rem(56);
        margin-top: rem(40);
        color: #fff;
        text-align: center;
        background-color: #0e3779;
      }
    }
    .leader-con-img {
      width: rem(740);
      height: 80%;
      border: 1px solid red;
      position: relative;
      overflow: hidden;
      li {
        list-style: none;
        position: absolute;
        transition: all 1s;
        transform-origin: 100% 100%;
        .el-image {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
.company-service {
  .company-service-container {
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-top: 10px;
    li {
      height: rem(458);
      width: rem(485);
      border-radius: 8px;
      text-align: center;
      box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-shadow: 0 0 5px 0 #d7dafb;
      cursor: pointer;
      transition: all 0.3s;
      .service-tag {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        i {
          font-size: rem(81);
          margin: rem(75) 0 rem(17);
        }
        span {
          font-size: rem(31);
        }
      }
      p:nth-of-type(1) {
        @include hh_ellipsis(2);
        font-size: rem(25);
        color: #888888;
        margin: rem(60) rem(60) rem(74);
      }
      p:nth-of-type(2) {
        font-size: rem(25);
        color: red;
      }
      &:hover {
        margin-top: -10px;
        box-shadow: 0 rem(20) rem(9) rem(3) #cbcefb;
      }
      &:nth-of-type(1) {
        border-top: rem(5) solid #033483;
        i {
          color: #033483;
        }
        p {
          color: #033483;
        }
      }
      &:nth-of-type(2) {
        border-top: rem(5) solid #e60000;
        i {
          color: #e60000;
        }
        p {
          color: #e60000;
        }
      }
      &:nth-of-type(3) {
        border-top: rem(5) solid #a903bb;
        i {
          color: #a903bb;
        }
        p {
          color: #a903bb;
        }
      }
    }
  }
}
.company-video {
  width: 100%;
  margin-top: rem(130);
  .video-warp {
    position: relative;
    width: 100%;
    #myvideo {
      height: rem(716);
      width: 100%;
      object-fit: fill;
    }
    i {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate3d(-50%, -50%, 0);
      font-size: rem(128);
      color: #ccc;
      cursor: pointer;
    }
  }
}
.company-mien {
  p {
    margin-top: rem(130);
  }
  .company-mien-tag {
    margin: rem(60) 0 rem(66);
    display: flex;
    justify-content: space-between;
    position: relative;
    left: 50%;
    width: rem(810);
    transform: translateX(-50%);
    li {
      padding: rem(15) rem(25);
      font-size: rem(23);
      color: #999999;
      cursor: pointer;
      border: 1px solid transparent;
      &:hover {
        border: 1px solid $primary-color;
        box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
        color: $primary-color;
      }
    }
  }
  .company-mien-cont {
    li {
      float: left;
      height: rem(299);
      &:nth-of-type(3) {
        height: rem(598);
      }
      img {
        height: 100%;
      }
    }
    // ul.cont-1 {
    //   display: flex;
    //   flex-wrap: wrap;
    //   width: 40%;
    //   height: 100%;
    //   li {
    //     width: 50%;
    //     height: 50%;
    //   }
    // }
    // > li {
    //   width: 40%;
    //   height: 100%;
    //   list-style: none;
    // }
    // ul.cont-2 {
    //   width: 20%;
    //   display: flex;
    //   flex-wrap: wrap;
    //   height: 100%;
    //   li {
    //     width: 100%;
    //     height: 50%;
    //   }
    // }
  }
}
</style>
<style lang="scss">
.home-header .el-image {
  width: rem(152);
  height: rem(48);
}
.home-nav-swipe {
  img {
    width: 100%;
    height: 100%;
  }
  .el-carousel {
    height: 100%;
    font-size: rem(44);
    background-color: transparent;
    color: #fff;
    .el-carousel__container {
      height: 100%;
    }
    .el-carousel__indicators--horizontal {
      bottom: rem(33);
      li {
        padding: 0 rem(28);
        button {
          width: rem(18);
          height: rem(18);
          border-radius: 50%;
          background-color: #fff;
        }
      }
    }
  }
  .el-carousel__arrow--left {
    display: none;
  }
  .el-carousel__arrow--right {
    display: none;
  }
  .el-carousel__indicator--horizontal.is-active {
    button {
      background-color: blue !important;
      width: rem(23) !important;
      height: rem(23) !important;
    }
  }
}
.el-image {
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
}
.company-news {
  .news-img {
    width: rem(849);
    height: rem(777);
  }
}
.company-intro {
  .intro-img {
    width: rem(849);
    height: rem(716);
  }
}
.company-panorama {
  width: 100%;
  height: rem(900);
  img {
    width: 100%;
    height: 100%;
  }
}
.company-service {
  .el-carousel.el-carousel--horizontal {
    width: rem($primary-width);
    height: rem(475);
  }
  .el-carousel__indicators.el-carousel__indicators--horizontal {
    display: none;
  }
  .el-carousel__container {
    height: rem(475);
    button {
      display: none;
    }
  }
}
</style>
