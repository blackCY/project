import {} from './mutations-types';

const state = {
  navList: [
    {
      id: 0,
      title: '集团简介',
      link: '/intro',
      itemList: [
        {
          itemId: 0,
          title: '关于昊泰',
        },
        {
          itemId: 1,
          title: '企业文化',
        },
        {
          itemId: 2,
          title: '组织架构',
        },
        {
          itemId: 3,
          title: '企业资质',
        },
        {
          itemId: 4,
          title: '企业荣誉',
        },
      ],
    },
    {
      id: 1,
      title: '集团产业',
      link: '/industry',
      itemList: [
        {
          itemId: 0,
          title: '空巷',
        },
        {
          itemId: 1,
          title: '产业园',
        },
        {
          itemId: 2,
          title: '泰硕工业',
        },
        {
          itemId: 3,
          title: '小区',
        },
        {
          itemId: 4,
          title: '集团分司',
        },
      ],
    },
    {
      id: 2,
      title: '新闻动态',
      link: '/news',
      itemList: [
        {
          itemId: 0,
          title: '集团要闻',
        },
        {
          itemId: 1,
          title: '通知公告',
        },
        {
          itemId: 2,
          title: '媒体报道',
        },
      ],
    },
    {
      id: 3,
      title: '昊泰服务',
      link: '/services',
      itemList: [
        {
          itemId: 0,
          title: '劳务派遣',
          icon: 'el-icon-tickets',
        },
        {
          itemId: 1,
          title: '人力外包',
          icon: 'el-icon-document-remove',
        },
        {
          itemId: 2,
          title: '校企合作',
          icon: 'el-icon-document-delete',
        },
        {
          itemId: 3,
          title: '猎头服务',
          icon: 'el-icon-document-copy',
        },
        {
          itemId: 4,
          title: '人力资源服务',
          icon: 'el-icon-document-checked',
        },
        {
          itemId: 5,
          title: '人才基地建设',
          icon: 'el-icon-document',
        },
      ],
    },
    {
      id: 4,
      title: '政策法规',
      link: '/privacy',
    },
    {
      id: 5,
      title: '人才招聘',
      link: '/invite',
      itemList: [
        {
          itemId: 0,
          title: '社会招聘',
        },
        {
          itemId: 1,
          title: '校园招聘',
        },
      ],
    },
    {
      id: 6,
      title: '联系昊泰',
      link: '/connection',
    },
  ],
};

export default {
  namespaced: true,
  state,
};
