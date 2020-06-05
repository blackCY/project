/**
 * pc端路由
 */
// import lazyLoadView from '@/utils/lazyLoadView';
// import(/* webpackPrefetch: true */ /* webpackChunkName: 'toRem' */ '@/utils/toRem').then(({ default: func }) => {
//   func();
// });

export default [
  {
    path: '/',
    name: 'PC',
    meta: {
      isKeepAlive: true,
    },
    component: () => import(/* webpackChunkName: "pc" */ '@/pages/pc/views'),
  },
  {
    path: '/intro',
    component: () => import(/* webpackChunkName: "layout" */ '@/pages/pc/common/Layout'),
    children: [
      {
        path: '',
        name: 'PCIntroIndex',
        meta: {
          isKeepAlive: true,
        },
        component: () => import(/* webpackChunkName: "PCIntroIndex" */ '@/pages/pc/views/Intro'),
      },
    ],
  },
  {
    path: '/news',
    // name: 'PCNews',
    component: () => import(/* webpackChunkName: "layout" */ '@/pages/pc/common/Layout'),
    children: [
      {
        path: '',
        name: 'PCNewsImportant',
        meta: {
          isKeepAlive: true,
        },
        component: () => import(/* webpackChunkName: "pcNewsImportant" */ '@/pages/pc/views/News/Important'),
      },
    ],
  },
  {
    path: '/invite',
    component: () => import(/* webpackChunkName: "layout" */ '@/pages/pc/common/Layout'),
    children: [
      {
        path: '',
        name: 'PCInviteSociety',
        meta: {
          isKeepAlive: true,
        },
        component: () => import(/* webpackChunkName: "PCInviteSociety" */ '@/pages/pc/views/Invite/Society'),
      },
      {
        path: '/invite/apply-for',
        name: 'PCInviteApplyFor',
        meta: {
          isKeepAlive: true,
        },
        component: () => import(/* webpackChunkName: "PCInviteApplyFor" */ '@/pages/pc/views/Invite/ApplyFor'),
      },
      {
        path: '/invite/:id',
        name: 'PCInviteDetails',
        meta: {
          isKeepAlive: true,
        },
        component: () => import(/* webpackChunkName: "PCInviteDetails" */ '@/pages/pc/views/Invite/Details'),
      },
    ],
  },
  {
    path: '/services',
    component: () => import(/* webpackChunkName: "layout" */ '@/pages/pc/common/Layout'),
    children: [
      {
        path: '',
        name: 'PCServiceLabor',
        props: {
          nav: '/services',
        },
        meta: {
          isKeepAlive: true,
        },
        component: () => import(/* webpackChunkName: "PCServiceLabor" */ '@/pages/pc/views/Services/Labor'),
      },
    ],
  },
  {
    path: '/industry',
    component: () => import(/* webpackChunkName: "layout" */ '@/pages/pc/common/Layout'),
    children: [
      {
        path: '',
        name: 'PCIndustry',
        props: {
          nav: '/industry',
        },
        meta: {
          isKeepAlive: true,
        },
        component: () => import(/* webpackChunkName: "PCServiceLabor" */ '@/pages/pc/views/Industry'),
      },
    ],
  },
  {
    path: '/privacy',
    component: () => import(/* webpackChunkName: "layout" */ '@/pages/pc/common/Layout'),
    children: [
      {
        path: '',
        name: 'PCPrivacy',
        meta: {
          isKeepAlive: true,
        },
        component: () => import(/* webpackChunkName: "PCServiceLabor" */ '@/pages/pc/views/Privacy'),
      },
    ],
  },
  {
    path: '/connection',
    component: () => import(/* webpackChunkName: "layout" */ '@/pages/pc/common/Layout'),
    children: [
      {
        path: '',
        name: 'PCConnection',
        meta: {
          isKeepAlive: true,
        },
        component: () => import(/* webpackChunkName: "PCServiceLabor" */ '@/pages/pc/views/Connection'),
      },
    ],
  },
];
