<template>
  <div class="home">
    <van-nav-bar fixed>
      <template #left>
        <LazyImage :imgUrl="require('./logo.png')" />
      </template>
      <template #right>
        <van-icon name="wap-nav" color="#083c87" />
      </template>
    </van-nav-bar>

    <van-swipe @change="onChange">
      <van-swipe-item v-for="item in data.navSwipwe" :key="item.bgcImg">
        <div v-lazy:background-image="item.bgcImg" class="nav-bgc">
          <ul>
            <li v-for="childItem in item.title" :key="childItem">
              {{ childItem }}
            </li>
          </ul>
          <p>{{ item.eTitle }}</p>
        </div>
      </van-swipe-item>
    </van-swipe>

    <!--<Three />-->

    <div class="company-news">
      <p>集团新闻</p>
      <ul>
        <li v-for="item in 3" :key="item">
          <LazyImage :imgUrl="require('../../assets/images/2.jpg')" />
          <div class="van-multi-ellipsis--l2">
            这是一段最多显示两行的文字，多余的内容会被省略这是一段最多显示两行的文字，多余的内容会被省略这是一段最多显示两行的文字，多余的内容会被省略这是一段最多显示两行的文字，多余的内容会被省略
          </div>
          <span>2019-01-01</span>
        </li>
      </ul>
      <button>查看更多</button>
    </div>

    <div class="company-intro">
      <ul>
        <li v-for="item in 3" :key="item">
          集团业绩
        </li>
      </ul>
      <div class="intro-content">
        <LazyImage :imgUrl="require('../../assets/images/4.jpg')" />
        <div class="intro-cont">
          <p>昊泰集团</p>
          <div class="van-multi-ellipsis--l4">
            这是一段最多显示四行的文字，多余的内容会被省略这是一段最多显示四行的文字，多余的内容会被省略这是一段最多显示四行的文字，多余的内容会被省略这是一段最多显示四行的文字，多余的内容会被省略
            这是一段最多显示四行的文字，多余的内容会被省略这是一段最多显示四行的文字，多余的内容会被省略这是一段最多显示四行的文字，多余的内容会被省略这是一段最多显示四行的文字，多余的内容会被省略
          </div>
          <button>查看更多</button>
        </div>
      </div>
    </div>

    <div class="company-threed">
      <LazyImage :imgUrl="require('./3d.png')" />
    </div>

    <div class="company-leader">
      <p>集团领袖</p>
    </div>

    <div class="company-industry">
      <p>相关产业</p>
      <ul class="company-industry-child">
        <li v-for="item in 2" :key="item">
          <div class="indu-hov">
            <div class="indu-title">
              <van-icon name="point-gift-o" />
              <span>教育投资</span>
            </div>
            <p>教育投资教育投资教育投资教育投资教育投资教育投资教育投资</p>
          </div>
        </li>
      </ul>
    </div>

    <div class="company-video">
      <p>视频中心</p>
      <div class="video-warp">
        <video
          id="myvideo"
          :controls="data.isControl"
          poster="@/assets/bgc.jpg"
          :src="require('../../assets/t1-ui.mp4')"
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
      <ul class="company-mien-img">
        <li v-for="item in 5" :key="item">
          <LazyImage :imgUrl="require(`../../assets/images/${item}.jpg`)" />
          <div class="mien-img-tag">
            公司荣誉公司荣誉公司荣誉公司荣誉公司荣誉公司荣誉公司荣誉公司荣誉公司荣誉公司荣誉公司荣誉
          </div>
        </li>
      </ul>
      <button>查看更多</button>
    </div>

    <div class="footer">
      <p>联系我们 ~ PC版</p>
      <p>重庆昊泰集团有限公司2017版本所有 渝ICP备3943773号 技术支持: 纷齐集团</p>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/composition-api';
// import * as THREE from 'three';
// import PhotoSphereViewer from 'photo-sphere-viewer';
// import 'photo-sphere-viewer/dist/photo-sphere-viewer.css';
export default {
  name: 'MobileIndex',
  components: {
    LazyImage: () => import('./components/LazyImage'),
    // Three: () => import('./three'),
  },
  setup(props, { refs }) {
    const data = reactive({
      current: 0,
      navSwipwe: [
        {
          title: ['诚信', '高效', '廉洁', '共赢'],
          eTitle: 'HONEST ANDHONEST, EFFICIENT AND WIN-WIN',
          bgcImg: require('../../assets/images/1.jpg'),
        },
        {
          title: ['诚信', '高效', '廉洁', '共赢'],
          eTitle: 'HONEST ANDHONEST, EFFICIENT AND WIN-WIN',
          bgcImg: require('../../assets/images/2.jpg'),
        },
        {
          title: ['诚信', '高效', '廉洁', '共赢'],
          eTitle: 'HONEST ANDHONEST, EFFICIENT AND WIN-WIN',
          bgcImg: require('../../assets/images/3.jpg'),
        },
      ],
      videoPlayIcon: 'el-icon-video-play',
      isControl: false,
      initControlShow: false,
    });

    const onChange = index => {
      data.current = index;
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

    return { data, onChange, videoHandle };
  },
};
</script>
<style lang="scss">
.van-image {
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
}
.van-nav-bar {
  height: 60px;
  background-color: transparent;
  margin-top: 29px;
  .van-nav-bar__left {
    height: 100%;
    width: 184px;
    margin-left: 18px;
    padding: 0;
  }
  .van-nav-bar__right {
    margin-right: 18px;
    padding: 0;
    i {
      font-size: 60px;
    }
  }
}
.van-hairline--bottom::after {
  border-bottom: none;
}
.van-swipe {
  .van-swipe__track {
    width: 100%;
  }
  .van-swipe__indicators {
    .van-swipe__indicator {
      background-color: #fff;
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }
    .van-swipe__indicator--active {
      width: 34px;
      height: 12px;
      background-color: #0075bf;
      border-radius: 8px;
    }
  }
}
</style>
<style lang="scss" scoped>
.home {
  .nav-bgc {
    padding: 448px 0 747px;
    height: 101px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    ul {
      display: flex;
      width: 612px;
      justify-content: space-between;
      li {
        display: flex;
        justify-content: space-between;
        font-size: 48px;
        color: #fff;
      }
    }
    p {
      font-size: 25px;
      color: #fff;
    }
  }
  .company-news {
    margin: $marginTB $marginLR 130px;
    p {
      font-size: 32px;
      font-weight: bold;
      margin-bottom: 31px;
    }
    ul {
      display: flex;
      flex-direction: column;
      position: relative;
      li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin-bottom: 30px;
        padding-bottom: 30px;
        border-bottom: 1px solid #eee;
        .van-multi-ellipsis--l2 {
          font-size: 30px;
          margin: 32px 0 25px;
          margin-right: 67px;
        }
        .van-image {
          height: 466px;
          img {
            height: 466px;
          }
        }
        span {
          font-size: 28px;
          color: #ccc;
        }
      }
    }
    button {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 128px;
      height: 50px;
      border: 1px solid #033584;
      color: #033584;
      outline: none;
      font-size: 25px;
      background-color: #fff;
    }
  }
  .company-intro {
    margin: $marginTB $marginLR;
    height: 356px;
    ul {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 30px;
      li {
        font-size: 32px;
        margin-left: 85px;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        padding-bottom: 12px;
        &:first-child {
          margin-left: 0;
        }
        &:hover {
          color: #344766;
          padding-bottom: 10px;
          border-bottom: 2px solid #033584;
        }
      }
    }
    .intro-content {
      display: flex;
      justify-content: space-between;
      .van-image {
        height: 356px;
        width: 356px;
        img {
          height: 356px;
          width: 356px;
        }
      }
      .intro-cont {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        p {
          font-size: 29px;
          font-weight: bold;
        }
        .van-multi-ellipsis--l4 {
          letter-spacing: 1px;
          font-size: 18px;
          width: 319px;
          line-height: 200%;
          @include hh_ellipsis(4);
        }
        button {
          width: 128px;
          height: 50px;
          border: 1px solid #033584;
          color: #033584;
          outline: none;
          font-size: 25px;
          background-color: #fff;
        }
      }
    }
  }
  .company-threed {
    margin-top: 120px;
    width: 100%;
    height: 416px;
    .van-image {
      height: 100%;
      img {
        height: 100%;
      }
    }
  }
  .company-leader {
    margin: $marginTB $marginLR;
    p {
      font-size: 32px;
      font-weight: bold;
      margin-bottom: 31px;
    }
  }
  .company-industry {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 0 $marginLR;
    > p {
      font-size: 32px;
      font-weight: bold;
    }
    .company-industry-child {
      display: flex;
      justify-content: space-between;
      li {
        margin-top: 31px;
        width: 334px;
        height: 391px;
        text-align: center;
        position: relative;
        &:hover {
          & .indu-hov {
            transform: translateY(-5px);
          }
        }
        .indu-hov {
          position: absolute;
          height: 356px;
          padding-top: 35px;
          border-radius: 10px;
          border-top: 3px solid red;
          box-shadow: 0 3px 5px 0 #ccc;
          transition: all 0.3s;
          .indu-title {
            margin-bottom: 41px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            i {
              font-size: 87px;
              color: $primary-color;
            }
            span {
              font-size: 30px;
            }
          }
          p {
            text-indent: 25px;
            font-size: 28px;
            color: #ccc;
            margin: 0 30px;
            @include hh_ellipsis(3);
          }
        }
      }
    }
  }
  .company-video {
    margin: $marginTB 0;
    p {
      font-size: 32px;
      font-weight: bold;
      margin-bottom: 31px;
    }
    .video-warp {
      position: relative;
      width: 100%;
      #myvideo {
        height: 416px;
        width: 100%;
        object-fit: fill;
      }
      i {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
        font-size: 100px;
        color: #ccc;
        cursor: pointer;
      }
    }
  }
  .company-mien {
    margin: $marginTB $marginLR;
    position: relative;
    p {
      font-size: 32px;
      font-weight: bold;
      margin-bottom: 31px;
    }
    .company-mien-tag {
      margin-left: 10px;
      margin-bottom: 30px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      li {
        font-size: 28px;
        color: #999;
        padding: 9px 3px;
        margin-left: 33px;
        box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
        &:first-child {
          margin-left: 0;
        }
        &:hover {
          padding-bottom: 7px;
          border-bottom: 2px solid #033584;
          color: #033584;
        }
      }
    }
    .company-mien-img {
      display: flex;
      flex-direction: column;
      li {
        position: relative;
        margin-top: 50px;
        height: 442px;
        .van-image {
          width: 100%;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
          }
        }
        &:first-child {
          margin-top: 0;
        }
        .mien-img-tag {
          position: absolute;
          left: 0;
          bottom: 0;
          background-color: #0b387e;
          width: 100%;
          height: 76px;
          line-height: 76px;
          font-size: 23px;
          color: #fff;
          padding: 0 88px 0 30px;
          opacity: 0.7;
          box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
          @include ellipsis();
        }
      }
    }
    button {
      position: absolute;
      left: 50%;
      bottom: -80px;
      transform: translateX(-50%);
      width: 128px;
      height: 50px;
      border: 1px solid #033584;
      color: #033584;
      outline: none;
      font-size: 25px;
      background-color: #fff;
    }
  }
  .footer {
    margin-top: 140px;
    text-align: center;
    background-color: #033584;
    box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
    p:first-child {
      font-size: 27px;
      padding: 41px 0 64px;
      color: #fff;
    }
    p:last-child {
      font-size: 20px;
      color: #fff;
      padding-bottom: 23px;
    }
  }
}
</style>
