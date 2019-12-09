import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home', // 首页
      name: 'home',
      component: home
    },
    {
      path: '/wiki', // 百科
      name: 'wiki',
      component: resolve => require(['@/pages/wiki/index'], resolve)
    },
    {
      path: '/strategy/assetRecite', // 投资策略---资产背书
      name: 'assetRecite',
      component: resolve => require(['@/pages/strategy/assetRecite'], resolve)
    },
    {
      path: '/about', // 关于---我们
      name: 'about',
      component: resolve => require(['@/pages/about/about'], resolve)
    },
    {
      path: '/newView', // 动态
      name: 'newView',
      component: resolve => require(['@/pages/newView/index'], resolve)
    },
    {
      path: '/newsDetail', // 新闻详情
      name: 'newsDetail',
      component: resolve => require(['@/pages/newView/newsDetail'], resolve)
    },
    {
      path: '/faq', // 常见问题
      name: 'faq',
      component: resolve => require(['@/pages/faq/faq'], resolve)
    }
  ]
})
