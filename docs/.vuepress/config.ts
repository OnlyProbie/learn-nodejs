import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-CN',
  title: 'NodeJS中文教程',
  description: '',
  base: '/learn-nodejs/',
  head: [
    ['link', { rel: 'icon', href: 'https://nodejs.org/static/images/favicons/favicon.ico' }]
  ],
  themeConfig: {
    logo: 'https://nodejs.org/static/images/favicons/favicon.ico',
    repo: 'https://github.com/OnlyProbie',
    editLink: false,
    contributors: false,
    navbar: [
      {
        text: 'VitePress',
        link: 'https://vitepress.vuejs.org/'
      }
    ], // 导航栏配置
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
                text: 'Node.js 简介',
                link: '/quick-start/1.Introduction-to-Node.js.md'
              },
              {
                text: 'Node.js 简史',
                link: '/quick-start/2.A-brief-history-of-Node.js.md'
              },
              {
                text: '如何安装 Node.js',
                link: '/quick-start/3.How-to-install-Node.js.md'
              },
              {
                text: '使用 Node.js 需要了解多少 JavaScript ？',
                link: '/quick-start/4.How-much-JavaScript-do-you-need-to-know-to-use-Node.js.md'
              },
              {
                text: 'Node.js 和浏览器之间的差异',
                link: '/quick-start/5.Differences-between-Node.js-and-the-Browser.md'
              }
            ]
          },
          {
            text: '入门',
            // link: '/getting-start/'
            children: [
              {
                text: 'V8 JavaScript 引擎',
                link: '/getting-start/1.The-v8-javascript-engine.md'
              },
              {
                text: '在命令行运行 Node.js 脚本',
                link: '/getting-start/2.Run-Node.js-scripts-from-the-command-line.md'
              },
              {
                text: '如何退出 Node.js 程序',
                link: '/getting-start/3.How-to-exit-from-a-Node.js-program.md'
              },
              {
                text: '如何从 Node.js 读取环境变量',
                link: '/getting-start/4.How-to-read-environment-variables-from-Node.js.md'
              },
              {
                text: '如何使用 Node.js REPL',
                link: '/getting-start/5.How-to-use-the-Node.js-REPL.md'
              },
              // {
              //   text: 'V8 JavaScript 引擎',
              //   link: '/getting-start/1.The-v8-javascript-engine.md'
              // },
              // {
              //   text: 'V8 JavaScript 引擎',
              //   link: '/getting-start/1.The-v8-javascript-engine.md'
              // },
              // {
              //   text: 'V8 JavaScript 引擎',
              //   link: '/getting-start/1.The-v8-javascript-engine.md'
              // },

              // Differences-between-Node.js-and-the-Browser
            ]
          },
        ]
      }
    ]
  },
})