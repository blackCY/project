<template>
  <div class="connection">
    <div class="conn-contact-us">
      <span>联系我们</span>
      <div class="contact-us-cont">
        <div class="cont-left">
          <ul>
            <li v-for="item in data.contactUs" :key="item.title">
              <span>{{ item.title }}:</span>
              <div>
                <span v-for="con in item.cont" :key="con">{{ con }}</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="cont-right">
          <img v-lazy="data.mark" />
          <span>微信公众号</span>
        </div>
      </div>
    </div>
    <div class="conn-suggest">
      <span>意见留言</span>
      <el-input type="textarea" v-model="data.form"></el-input>
      <button @click="handleSubmit">提交</button>
    </div>
    <p>或者请将意见反馈发送至邮箱2423232@163.com</p>
  </div>
</template>

<script>
import { reactive } from '@vue/composition-api';
export default {
  name: 'PCConnection',
  setup(props, { root }) {
    const data = reactive({
      contactUs: [
        {
          title: '电话',
          cont: ['023-63017888', '0521-57162722', '021-20922898'],
        },
        {
          title: '传真',
          cont: ['023-67550949'],
        },
        {
          title: '地址',
          cont: ['重庆市北部新区霞路金贸时代北区1幢1单元12楼'],
        },
      ],
      mark: require('@/assets/pc/connection/mark.png'),
      form: '',
    });

    const handleSubmit = () => {
      let message = '',
        type = '';
      if (data.form) {
        message = '提交成功';
        type = 'success';
      } else {
        message = '提交失败';
        type = 'error';
      }

      root.$message({
        message,
        duration: 1500,
        type,
      });
    };
    return { data, handleSubmit };
  },
};
</script>

<style lang="scss" scoped>
.connection {
  width: 100%;
  background-color: #f6f6f6;
  padding-top: rem(157);
  margin-top: rem(-5);
  margin-bottom: -5rem;
  padding-bottom: 5rem;
  .conn-contact-us,
  .conn-suggest,
  p {
    @include center();
  }
  .conn-contact-us {
    position: relative;
    margin-bottom: rem(97);
    background-color: #fff;
    > span {
      position: absolute;
      left: rem(-120);
      top: rem(20);
    }
    .contact-us-cont {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 rem(133) 0 rem(36);
      box-sizing: border-box;
      padding: rem(78) rem(58);
      .cont-left {
        font-size: rem(16);
        ul {
          li {
            margin-bottom: rem(55);
            display: flex;
            &:last-child {
              margin-bottom: 0;
            }
            > div {
              display: flex;
              margin-left: rem(12);
              span {
                margin-left: rem(54);
                &:first-child {
                  margin-left: 0;
                }
              }
            }
          }
        }
      }
      .cont-right {
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          margin-bottom: rem(16);
        }
      }
    }
  }
  .conn-suggest {
    position: relative;
    height: rem(260);
    padding-bottom: rem(67);
    span {
      position: absolute;
      left: rem(-120);
      top: rem(20);
    }
    button {
      position: absolute;
      right: rem(131);
      bottom: 0;
      border: none;
      outline: none;
      background-color: $primary-color;
      color: #fff;
      font-size: rem(17);
      width: rem(120);
      height: rem(40);
      cursor: pointer;
    }
  }
  > p {
    width: 100%;
    height: rem(73);
    text-align: center;
    line-height: rem(73);
    color: #fff;
    background-color: $primary-color;
    font-size: rem(19);
    margin-top: rem(77);
  }
}
</style>
<style lang="scss">
.el-textarea {
  textarea {
    resize: none;
    height: rem(260);
    font-size: rem(20);
  }
}
</style>
