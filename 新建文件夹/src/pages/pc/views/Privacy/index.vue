<template>
  <div class="policy">
    <div class="policy-nav" ref="policyNav">
      <div class="nav-container">
        <div class="nav-img-cont" ref="navImgCont">
          <img v-for="item in data.nav" :key="item" v-lazy="item" />
        </div>
        <div class="nav-empty-cont" ref="navEmptyCont"></div>
      </div>
    </div>

    <ul class="policy-container">
      <li v-for="(item, idx) in data.currentCont" :key="idx" @click="selectSlideTab($event, idx)">
        <div class="policy-left">
          <img v-lazy="item.img" />
          <p>{{ item.title }}</p>
        </div>

        <div class="policy-cont">
          <ul class="cont-tag">
            <li
              v-for="(tagItem, tagIdx) in item.content"
              :key="tagIdx"
              :data-list="tagIdx"
              :class="tagIdx === 0 && 'is-active'"
            >
              {{ tagItem.tag }}
            </li>
          </ul>

          <ul class="cont-con">
            <li v-for="(conItem, conIdx) in data.cont[idx]" :key="conIdx">
              {{ conItem }}
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive, onMounted, onUnmounted } from '@vue/composition-api';
export default {
  name: 'PCPolicy',
  setup(props,  { refs }) {
    const data = reactive({
      activeIndex: 0,
      nav: [
        require('@/assets/pc/privacy/nav/policy_1.png'),
        require('@/assets/pc/privacy/nav/policy_2.png'),
        require('@/assets/pc/privacy/nav/policy_3.png'),
        require('@/assets/pc/privacy/nav/policy_4.png'),
      ],
      currentCont: [
        {
          img: require('@/assets/pc/privacy/cont/cont_1.png'),
          title: '条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
          content: [
            {
              tag: '劳动法栏目',
              cont: [
                '劳动法栏目-条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
                '条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
                '条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
                '条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
                '条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
                '条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
              ],
            },
            {
              tag: '劳动法栏目2',
              cont: [
                '劳动法栏目2--条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
                '条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
                '条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
                '条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
                '条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
                '条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
              ],
            },
            {
              tag: '劳动法栏目3',
              cont: [
                '劳动法栏目3---条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
                '条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
                '条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
                '条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
                '条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
                '条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
              ],
            },
          ],
        },
        {
          img: require('@/assets/pc/privacy/cont/cont_2.png'),
          title: '条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
          content: [
            {
              tag: '劳动法栏目',
              cont: [
                '劳动法栏目4-条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
                '条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
                '条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
                '条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
                '条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
                '条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
              ],
            },
            {
              tag: '劳动法栏目2',
              cont: [
                '劳动法栏目5--条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
                '条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
                '条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
                '条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
                '条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
                '条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
              ],
            },
            {
              tag: '劳动法栏目3',
              cont: [
                '劳动法栏目6---条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
                '条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
                '条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
                '条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
                '条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
                '条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
              ],
            },
          ],
        },
        {
          img: require('@/assets/pc/privacy/cont/cont_3.png'),
          title: '条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
          content: [
            {
              tag: '劳动法栏目',
              cont: [
                '劳动法栏目7-条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
                '条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
                '条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
                '条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
                '条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
                '条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
              ],
            },
            {
              tag: '劳动法栏目2',
              cont: [
                '劳动法栏目8--条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
                '条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
                '条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
                '条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
                '条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
                '条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
              ],
            },
            {
              tag: '劳动法栏目3',
              cont: [
                '劳动法栏目9---条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
                '条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
                '条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
                '条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
                '条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
                '条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称条纹名称',
              ],
            },
          ],
        },
      ],
      cont: [],
    });

    let timer = null;

    const handleNav = () => {
      refs['navEmptyCont'].innerHTML = refs['navImgCont'].innerHTML;
      function fun() {
        if (refs['policyNav'].scrollLeft >= 600) {
          refs['policyNav'].scrollLeft = 0;
        } else {
          refs['policyNav'].scrollLeft++;
        }
      }

      timer = setInterval(fun, 30);
    };

    const selectSlideTab = (e, idx) => {
      if (!e.target.dataset.list) return;

      const parent = e.target.parentNode.children;

      for (let i = 0, len = parent.length; i < len; i++) {
        if (!parent[i].classList.contains('is-active')) {
          continue;
        } else {
          parent[i].classList.remove('is-active');
        }
      }
      e.target.classList.add('is-active');

      let curr = data.currentCont[idx].content[e.target.dataset.list * 1].cont;
      data.cont.splice(idx, 1, curr);
    };

    onMounted(() => {
      data.currentCont.forEach(v => data.cont.push(v.content[0].cont));

      handleNav();
    });

    onUnmounted(() => clearInterval(timer));

    return { data, selectSlideTab };
  },
};
</script>

<style lang="scss" scoped>
.policy {
  @include center();
  margin-top: rem(80);

  .policy-nav {
    overflow: hidden;
    margin-bottom: rem(127);
    .nav-img-cont,
    .nav-empty-cont {
      float: left;
    }
    .nav-container {
      width: 500%;
      float: left;
    }
    img {
      width: rem(361);
    }
  }

  ul.policy-container {
    > li {
      display: flex;
      justify-content: space-between;
      margin-bottom: rem(130);
      .policy-left {
        img {
          width: rem(613);
        }
        p {
          padding-right: rem(30);
          @include ellipsis();
          font-size: rem(29);
          font-weight: bold;
          margin-top: rem(22);
          width: rem(613);
          box-sizing: border-box;
        }
      }
      .policy-cont {
        width: rem(830);
        .cont-tag {
          display: flex;
          width: 100%;
          background-color: #eee;
          margin-bottom: rem(50);
          li {
            height: rem(57);
            width: rem(198);
            line-height: rem(57);
            font-size: rem(27);
            text-align: center;
            cursor: pointer;
            font-weight: 549;
            &:hover {
              background-color: $primary-color;
              color: #fff;
            }
          }
        }
        .cont-con {
          width: 100%;
          li {
            height: rem(60);
            line-height: rem(60);
            width: 100%;
            font-size: rem(24);
            color: #666;
            padding: 0 rem(88) 0 rem(37);
            border: 1px solid #dfdde0;
            box-sizing: border-box;
            font-weight: 549;
            margin-top: -1px;
            &:nth-of-type(1) {
              margin-top: 0;
            }
            @include ellipsis();
            cursor: pointer;
            &::before {
              content: '';
              display: inline-block;
              width: rem(9);
              height: rem(9);
              border-radius: 50%;
              background-color: #666;
            }
            &:hover {
              background-color: $primary-color;
              color: #fff !important;
              &::before {
                background-color: #fff !important;
              }
            }
          }
        }
      }
    }
  }
}
.is-active {
  background-color: $primary-color;
  color: #fff !important;
}
</style>
