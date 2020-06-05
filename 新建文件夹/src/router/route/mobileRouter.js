/**
 * 移动端路由
 */
// import lazyLoadView from '@/utils/lazyLoadView';

export default [
  {
    path: '/',
    name: 'Mobile',
    meta: {
      isKeepAlive: true,
    },
    component: () => import(/* webpackChunkName: "mobile" */ '../../pages/mobile'),
  },
];
