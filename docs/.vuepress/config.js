const nav = require('./nav');
const sidebar= require('./sidebar')
module.exports = {
  title: '知码学院',
  description: '君哥带你上王者',
  head: [
      ['link', {rel: 'icon', href: '/favicon.ico'}]
  ],
  markdown: {
      lineNumbers: true
  },
  // 导航栏
  themeConfig: {
    // 导航栏 Logo
    logo: '/assets/img/logo.png',
    // 导航栏链接
    nav: nav,
    // 侧边栏
    sidebar: sidebar,
    // 深度为 2 时，提取 h2 和 h3 标题
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    searchMaxSuggestoins: 10,
    serviceWorker: {
        updatePopup: {
            message: "有新的内容.",
            buttonText: '更新'
        }
    },
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页 ！'
  }
}