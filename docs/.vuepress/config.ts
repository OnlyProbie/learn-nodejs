import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-CN',
  title: 'NodeJS中文教程',
  description: '',
  base: '/learn-nodejs/',
  themeConfig: {
    logo: 'https://nodejs.org/static/images/favicons/favicon.ico',
    repo: 'https://github.com/OnlyProbie/learn-nodejs',
    editLink: false,
    contributors: false,
    navbar: [], // 导航栏配置
    sidebar: [ // 侧边栏配置
      {
        text: 'NodeJS 中文教程',
        link: '/',
        children: [
          {
            text: '快速开始',
            // link: '/quick-start/',
            children: [
              {
                text: 'NodeJS 简介',
                link: '/quick-start/nodejs简介.md'
              },
              {
                text: 'NodeJS 简史',
                link: '/quick-start/nodejs简史.md'
              }
            ]
          },
          {
            text: '入门',
            link: '/getting-start/'
          },
        ]
      }
    ]
  },
})