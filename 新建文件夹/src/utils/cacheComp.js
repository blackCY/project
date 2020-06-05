import router from '../router';
import store from '../store';
import { ADD_KEEP_ALIVE_ROUTER } from '../store/modules/keepAlive/mutations-types';

/**
 * 处理缓存组件
 */
router.beforeEach((to, from, next) => {
  const isCache = to.meta.isKeepAlive && !store.getters['keepAlive/keepInclude'].includes(to.name);
  if (isCache) {
    store.commit(`keepAlive/${ADD_KEEP_ALIVE_ROUTER}`, { include: to.name });
  }
  next();
});
