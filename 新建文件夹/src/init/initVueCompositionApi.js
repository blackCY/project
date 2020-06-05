import Vue from 'vue';
import { Lazyload } from 'vant';
import VueCompositionApi from '@vue/composition-api';
import VueLazyLoad from 'vue-lazyload';
import store from '../store';
import '../plugins/element';
import '../plugins/vant';

/**
 * 注册 @vue/composition-api 以及 全局 useProvider
 * 注册 Provider 状态
 *
 * @export
 * @param {*}
 * @returns
 */
export default function initVueCompositionApi() {
  Vue.use(VueCompositionApi);
  Vue.use(Lazyload, {
    lazyComponent: true,
  });
  Vue.use(VueLazyLoad);

  return function setup() {
    return {
      store,
    };
  };
}
