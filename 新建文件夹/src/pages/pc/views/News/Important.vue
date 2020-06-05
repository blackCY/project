<template>
  <div>
    <Nav type="default" />

    <div class="news-header">
      <div class="news-nav-swipe">
        <el-carousel
          :interval="2500"
          arrow="always"
          ref="carouselItem"
          :initialIndex="data.initialIndex"
          @change="handleChange"
        >
          <el-carousel-item v-for="(item, idx) in data.headerData" :key="idx">
            <div class="nav-swipe-item">
              <img :src="item.img" />
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="news-header-container">
        <p>{{ data.headerData[data.initialIndex].title }}</p>
        <p>{{ data.headerData[data.initialIndex].content }}</p>
        <span>{{ data.headerData[data.initialIndex].time }}</span>
      </div>
    </div>

    <div class="news">
      <div class="news-left-container">
        <ul>
          <li v-for="(item, idx) in data.currentData" :key="idx">
            <div class="l-cont">
              <img v-lazy="item.img" />
              <p>{{ item.title }}</p>
              <p>{{ item.content }}</p>
            </div>
            <div class="l-tag">
              <span>{{ item.time[2] }}</span>
              <span>{{ item.time[1] }}</span>
              <span>{{ item.time[0] }}</span>
            </div>
          </li>
        </ul>

        <ElPagination :all="data.all" :currentData.sync="data.currentData" />
      </div>
      <div class="news-right-hot">
        <p>{{ data.hotNews.title }}</p>
        <ul>
          <li v-for="(item, idx) in data.hotNews.content" :key="idx">
            <img v-lazy="item.img" />
            <div>
              <p>{{ item.content }}</p>
              <p>{{ item.time }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/composition-api';
export default {
  name: 'PCNewsImportant',
  components: {
    Nav: () => import('@/pages/pc/common/Nav'),
    ElPagination: () => import('@/pages/pc/components/ElPagination'),
  },
  setup() {
    const data = reactive({
      currentData: [],
      pageSize: 10,
      currentPage: 1,
      all: [
        {
          img: require('@/assets/pc/news/news_1.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-19',
        },
        {
          img: require('@/assets/pc/news/news_2.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-20',
        },
        {
          img: require('@/assets/pc/news/news_3.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-21',
        },
        {
          img: require('@/assets/pc/news/news_4.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-22',
        },
        {
          img: require('@/assets/pc/news/news_5.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-23',
        },
        {
          img: require('@/assets/pc/news/news_6.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-24',
        },
        {
          img: require('@/assets/pc/news/news_1.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-19',
        },
        {
          img: require('@/assets/pc/news/news_2.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-20',
        },
        {
          img: require('@/assets/pc/news/news_3.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-21',
        },
        {
          img: require('@/assets/pc/news/news_4.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-22',
        },
        {
          img: require('@/assets/pc/news/news_5.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-23',
        },
        {
          img: require('@/assets/pc/news/news_6.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-24',
        },
        {
          img: require('@/assets/pc/news/news_1.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-19',
        },
        {
          img: require('@/assets/pc/news/news_2.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-20',
        },
        {
          img: require('@/assets/pc/news/news_3.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-21',
        },
        {
          img: require('@/assets/pc/news/news_4.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-22',
        },
        {
          img: require('@/assets/pc/news/news_5.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-23',
        },
        {
          img: require('@/assets/pc/news/news_6.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-24',
        },
        {
          img: require('@/assets/pc/news/news_1.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-19',
        },
        {
          img: require('@/assets/pc/news/news_2.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-20',
        },
        {
          img: require('@/assets/pc/news/news_3.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-21',
        },
        {
          img: require('@/assets/pc/news/news_4.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-22',
        },
        {
          img: require('@/assets/pc/news/news_5.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-23',
        },
        {
          img: require('@/assets/pc/news/news_6.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-24',
        },
        {
          img: require('@/assets/pc/news/news_1.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-19',
        },
        {
          img: require('@/assets/pc/news/news_2.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-20',
        },
        {
          img: require('@/assets/pc/news/news_3.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-21',
        },
        {
          img: require('@/assets/pc/news/news_4.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-22',
        },
        {
          img: require('@/assets/pc/news/news_5.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-23',
        },
        {
          img: require('@/assets/pc/news/news_6.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-24',
        },
        {
          img: require('@/assets/pc/news/news_1.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-19',
        },
        {
          img: require('@/assets/pc/news/news_2.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-20',
        },
        {
          img: require('@/assets/pc/news/news_3.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-21',
        },
        {
          img: require('@/assets/pc/news/news_4.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-22',
        },
        {
          img: require('@/assets/pc/news/news_5.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-23',
        },
        {
          img: require('@/assets/pc/news/news_6.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-24',
        },
        {
          img: require('@/assets/pc/news/news_1.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-19',
        },
        {
          img: require('@/assets/pc/news/news_2.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-20',
        },
        {
          img: require('@/assets/pc/news/news_3.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-21',
        },
        {
          img: require('@/assets/pc/news/news_4.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-22',
        },
        {
          img: require('@/assets/pc/news/news_5.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-23',
        },
        {
          img: require('@/assets/pc/news/news_6.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-24',
        },
        {
          img: require('@/assets/pc/news/news_1.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-19',
        },
        {
          img: require('@/assets/pc/news/news_2.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-20',
        },
        {
          img: require('@/assets/pc/news/news_3.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-21',
        },
        {
          img: require('@/assets/pc/news/news_4.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-22',
        },
        {
          img: require('@/assets/pc/news/news_5.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-23',
        },
        {
          img: require('@/assets/pc/news/news_6.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-24',
        },
        {
          img: require('@/assets/pc/news/news_1.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-19',
        },
        {
          img: require('@/assets/pc/news/news_2.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-20',
        },
        {
          img: require('@/assets/pc/news/news_3.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-21',
        },
        {
          img: require('@/assets/pc/news/news_4.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-22',
        },
        {
          img: require('@/assets/pc/news/news_5.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-23',
        },
        {
          img: require('@/assets/pc/news/news_6.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-24',
        },
        {
          img: require('@/assets/pc/news/news_1.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-19',
        },
        {
          img: require('@/assets/pc/news/news_2.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-20',
        },
        {
          img: require('@/assets/pc/news/news_3.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-21',
        },
        {
          img: require('@/assets/pc/news/news_4.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-22',
        },
        {
          img: require('@/assets/pc/news/news_5.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-23',
        },
        {
          img: require('@/assets/pc/news/news_6.png'),
          title: '新闻标题',
          content:
            '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容',
          time: '2020-20-24',
        },
      ],
      hotNews: {
        title: '热门新闻',
        content: [
          {
            img: require('@/assets/pc/news/hot/hot_1.png'),
            content:
              '新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题',
            time: '2020-20-20',
          },
          {
            img: require('@/assets/pc/news/hot/hot_2.png'),
            content:
              '新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题',
            time: '2020-20-20',
          },
          {
            img: require('@/assets/pc/news/hot/hot_3.png'),
            content:
              '新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题',
            time: '2020-20-20',
          },
          {
            img: require('@/assets/pc/news/hot/hot_1.png'),
            content:
              '新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题',
            time: '2020-20-20',
          },
          {
            img: require('@/assets/pc/news/hot/hot_2.png'),
            content:
              '新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题',
            time: '2020-20-20',
          },
          {
            img: require('@/assets/pc/news/hot/hot_3.png'),
            content:
              '新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题',
            time: '2020-20-20',
          },
          {
            img: require('@/assets/pc/news/hot/hot_1.png'),
            content:
              '新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题',
            time: '2020-20-20',
          },
        ],
      },
      headerData: [
        {
          img: require('@/assets/pc/news/header/news_header_1.png'),
          title:
            '昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置',
          content:
            '昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置',
          time: '2020-20-20',
        },
        {
          img: require('@/assets/pc/news/header/news_header_1.png'),
          title:
            '昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置',
          content:
            '昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置',
          time: '2020-20-21',
        },
        {
          img: require('@/assets/pc/news/header/news_header_1.png'),
          title:
            '昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置',
          content:
            '昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置昊泰资讯位置',
          time: '2020-20-22',
        },
      ],
      initialIndex: 0,
    });

    data.all.map(v => {
      v.time = v.time.split('-');
      v.time[1] = v.time[1] + '月';
      return v;
    });

    const handleChange = idx => (data.initialIndex = idx);

    return { data, handleChange };
  },
};
</script>

<style lang="scss" scoped>
.news-header {
  @include center();
  display: flex;
  justify-content: space-between;
  margin-bottom: rem(88);
  height: rem(493);
  .news-nav-swipe {
    height: 100%;
    width: rem(896);
    .nav-swipe-item {
      position: relative;
      height: 100%;
    }
  }
  .news-header-container {
    width: rem(638);
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-left: rem(33);
    padding-right: rem(20);
    box-shadow: 0 0 10px 0 rgba(230, 230, 230, 0.7);
    p:nth-of-type(1) {
      margin-top: rem(82);
      font-size: rem(30);
      line-height: 1.5em;
      font-weight: bold;
      letter-spacing: 1px;
      @include hh_ellipsis(2);
    }
    p:nth-of-type(2) {
      margin: rem(66) 0 rem(50);
      font-size: rem(27);
      line-height: 1.5em;
      color: #999;
      @include hh_ellipsis(3);
    }
    span {
      font-size: rem(12);
      color: #999;
    }
  }
}
.news {
  @include center();
  display: flex;
  justify-content: space-between;
  .news-left-container {
    display: flex;
    flex-direction: column;
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: rem(1000);
      li {
        position: relative;
        width: rem(481);
        height: rem(588);
        box-shadow: 0 0 10px 0 rgba(230, 230, 230, 0.7);
        margin-bottom: rem(60);
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        transition: all 0.3s;
        top: 0;
        cursor: pointer;
        &:hover {
          top: -10px;
          .l-cont p:nth-of-type(1) {
            text-decoration: underline;
            color: $primary-color;
          }
        }
        .l-cont {
          display: flex;
          flex-direction: column;
          img {
            width: 100%;
          }
          p:nth-of-type(1) {
            margin: rem(27) rem(49) rem(30) rem(34);
            font-size: rem(28);
            line-height: 1em;
            font-weight: bold;
          }
          p:last-child {
            margin: 0 rem(85) rem(42) rem(34);
            font-size: rem(24);
            color: #999999;
            line-height: 1.4em;
            @include hh_ellipsis(3);
          }
        }
        .l-tag {
          position: absolute;
          left: 0;
          top: 0;
          width: rem(110);
          height: (118);
          box-sizing: border-box;
          -moz-box-sizing: border-box;
          -webkit-box-sizing: border-box;
          padding-top: rem(19);
          padding-left: rem(21);
          padding-bottom: rem(9);
          color: #fff;
          background-color: $primary-color;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          span:nth-of-type(1) {
            font-size: rem(33);
          }
          span:nth-of-type(2) {
            font-size: rem(17);
          }
          span:nth-of-type(3) {
            font-size: rem(12);
          }
        }
      }
    }
  }
  .news-right-hot {
    margin-left: rem(176);
    > p {
      margin-top: rem(10);
      margin-bottom: rem(61);
      font-size: rem(34);
      font-weight: bold;
      letter-spacing: 1px;
    }
    ul {
      display: flex;
      flex-direction: column;
      li {
        display: flex;
        justify-content: space-between;
        margin-bottom: rem(77);
        cursor: pointer;
        &:hover {
          background-color: $primary-color;
          color: #fff;
          div {
            p:last-child {
              color: #fff;
            }
          }
        }
        &:last-child {
          margin-bottom: 0;
        }
        img {
          width: rem(102);
          margin-right: rem(33);
        }
        div {
          p:nth-of-type(1) {
            font-size: rem(18);
            line-height: 2.4em;
            @include hh_ellipsis(2);
          }
          p:last-child {
            font-size: rem(12);
            color: #999999;
          }
        }
      }
    }
  }
}
</style>
<style lang="scss">
.news-nav-swipe {
  img {
    height: rem(493);
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
      bottom: rem(0);
      li {
        margin-left: rem(27);
        &:first-child {
          margin-left: 0;
        }
        button {
          width: rem(16);
          height: rem(16);
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
      width: rem(20) !important;
      height: rem(20) !important;
    }
  }
}
</style>
