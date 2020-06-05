<template>
  <div id="lazyload">
    <el-button>element</el-button>
    <van-button>vant</van-button>

    <img src="../../assets/logo.png" lazy="loading" />
    <img src="../../assets/testimg.png" lazy="loaded" />
    <img src="../../assets/testimg.png" lazy="error" />

    <!-- img中使用图片懒加载。 v-lazy代替v-bind:src -->
    <ul class="img">
      <li v-for="(item, index) in imgList" :key="index">
        <img v-lazy="item.img" alt="" style="width: 300px;" :key="item.img" />
        <!-- :key是为了防止刷新页面或图片更改时图片不更新 -->
      </li>
    </ul>

    <!-- 背景图中使用图片懒加载。 v-lazy:background-image = "" -->
    <ul class="bgImg">
      <li v-for="(item, index) in imgList" v-lazy:background-image="item.img" :key="index"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PC',
  data() {
    return {
      imgList: [
        {
          img: 'http://dummyimage.com/60',
        },
        {
          img: 'http://dummyimage.com/60',
        },
        {
          img: 'http://dummyimage.com/60',
        },
        {
          img: 'http://dummyimage.com/60',
        },
        {
          img: 'http://dummyimage.com/60',
        },
        {
          img: 'http://dummyimage.com/60',
        },
        {
          img: 'http://dummyimage.com/60',
        },
        {
          img: 'http://dummyimage.com/60',
        },
        {
          img: 'http://dummyimage.com/60',
        },
        {
          img: 'http://dummyimage.com/60',
        },
        {
          img: 'http://dummyimage.com/60',
        },
        {
          img: 'http://dummyimage.com/60',
        },
        {
          img: 'http://dummyimage.com/60',
        },
        {
          img: 'http://dummyimage.com/60',
        },
        {
          img: 'http://dummyimage.com/60',
        },
        {
          img: 'http://dummyimage.com/60',
        },
        {
          img: 'http://dummyimage.com/60',
        },
        {
          img: 'http://dummyimage.com/60',
        },
        {
          img: 'http://dummyimage.com/60',
        },
        {
          img: 'http://dummyimage.com/60',
        },
        {
          img: 'http://dummyimage.com/60',
        },
        {
          img: 'http://dummyimage.com/60',
        },
        {
          img: 'http://dummyimage.com/60',
        },
        {
          img: 'http://dummyimage.com/60',
        },
        {
          img: 'http://dummyimage.com/60',
        },
        {
          img: 'http://dummyimage.com/60',
        },
        {
          img: 'http://dummyimage.com/60',
        },
        {
          img: 'http://dummyimage.com/60',
        },
        {
          img: 'http://dummyimage.com/60',
        },
        {
          img: 'http://dummyimage.com/60',
        },
        {
          img: 'http://dummyimage.com/60',
        },
        {
          img: 'http://dummyimage.com/60',
        },
        {
          img: 'http://dummyimage.com/60',
        },
        {
          img: 'http://dummyimage.com/60',
        },
        {
          img: 'http://dummyimage.com/60',
        },
        {
          img: 'http://dummyimage.com/60',
        },
        {
          img: 'http://dummyimage.com/60',
        },
        {
          img: 'http://dummyimage.com/60',
        },
        {
          img: 'http://dummyimage.com/60',
        },
        {
          img: 'http://dummyimage.com/60',
        },
        {
          img: 'http://dummyimage.com/60',
        },
        {
          img: 'http://dummyimage.com/60',
        },
        {
          img: 'http://dummyimage.com/60',
        },
        {
          img: 'http://dummyimage.com/60',
        },
        {
          img: 'http://dummyimage.com/60',
        },
        {
          img: 'http://dummyimage.com/60',
        },
        {
          img: 'http://dummyimage.com/60',
        },
        {
          img: 'http://dummyimage.com/60',
        },
        {
          img: 'http://dummyimage.com/60',
        },
        {
          img: 'http://dummyimage.com/60',
        },
      ],
    };
  },
  setup() {
    document.addEventListener('click', () => {
      // test.js 会等到页面核心被加载完成之后才加载
      import(/* webpackPrefetch: true */ /* webpackChunkName: 'userAgent' */ '../../utils/test').then(
        ({ default: func }) => {
          func();
        },
      );
    });
  },
};
</script>

<style lang="scss" scoped></style>

<style lang="scss">
.custom-transition .lazy-component-enter {
  opacity: 0;
  transform: scale(0.4) translate(100%);
}
.custom-transition .lazy-component-enter-to {
  opacity: 1;
}
.custom-transition .lazy-component-enter-active {
  transition: all 0.5s;
  position: absolute;
  top: 0;
  width: 100%;
}
.custom-transition .lazy-component-leave {
  opacity: 1;
}
.custom-transition .lazy-component-leave-to {
  opacity: 0;
  transform: scale(0.4) translate(-100%);
}
.custom-transition .lazy-component-leave-active {
  transition: all 0.5s;
}
img[lazy='loading'] {
  border-radius: 10px;
}
img[lazy='error'] {
  border-radius: 20px;
}
img[lazy='loaded'] {
  border-radius: 30px;
}
</style>
