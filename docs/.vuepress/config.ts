import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-CN',
  title: 'NodeJS 教程中文版',
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
        text: 'NodeJS 教程中文版',
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
              {
                text: '从命令行接收参数',
                link: '/getting-start/6.Node.js-accept-arguments-from-the-command-line.md'
              },
              {
                text: '使用 Node.js 输出到命令行',
                link: '/getting-start/7.Output-to-the-command-line-using-Node.js.md'
              },
              {
                text: '接受来自 Node.js 命令行的输入',
                link: '/getting-start/8.Accept-input-from-the-command-line-in-Node.js.md'
              },
              {
                text: 'Node.js文件使用导出的公开功能',
                link: '/getting-start/9.Expose-functionality-from-a-Node.js-file-using-exports.md'
              },
              {
                text: 'npm 包管理器简介',
                link: '/getting-start/10.An-introduction-to-the-npm-package-manager.md'
              },
              {
                text: 'npm 在哪里安装软件包？',
                link: '/getting-start/11.Where-does-npm-install-the-packages.md'
              },
              {
                text: '如何使用或执行使用 npm 安装的包',
                link: '/getting-start/12.How-to-use-or-execute-a-package-installed-using-npm.md'
              },
              // {
              //   text: 'package.json 指南',
              //   link: '/getting-start/13.The-package.json-guide.md'
              // },
              // {
              //   text: 'package-lock.json 文件',
              //   link: '/getting-start/14.The-package-lock.json-file.md'
              // },
              // {
              //   text: '查找已安装的 npm 包版本',
              //   link: '/getting-start/15.Find-the-installed-version-of-an-npm-package.md'
              // },
              // {
              //   text: '安装旧版本的 npm 包',
              //   link: '/getting-start/16.Install-an-older-version-of-an-npm-package.md'
              // },
              // {
              //   text: '将所有 Node.js 依赖项更新到最新版本',
              //   link: '/getting-start/17.Update-all-the-Node.js-dependencies-to-their-latest-version.md'
              // },
              // {
              //   text: '使用 npm 进行语义版本控制',
              //   link: '/getting-start/18.Semantic-Versioning-using-npm.md'
              // },
              // {
              //   text: '卸载 npm 包',
              //   link: '/getting-start/19.Uninstalling-npm-packages.md'
              // },
              // {
              //   text: 'npm 全局或本地包',
              //   link: '/getting-start/20.npm-global-or-local-packages.md'
              // },
              // {
              //   text: 'npm dependencies 和 devDependencies',
              //   link: '/getting-start/21.npm-dependencies-and-devDependencies.md'
              // },
              // {
              //   text: 'Node.js 包运行程序 npx',
              //   link: '/getting-start/22.The-npx-Node.js-Package-Runner.md'
              // },
              // {
              //   text: 'Node.js 事件循环',
              //   link: '/getting-start/23.The-Node.js-Event-Loop.md'
              // },
              // {
              //   text: '理解 process.nextTick()',
              //   link: '/getting-start/24.Understanding-process.nextTick().md'
              // },
              // {
              //   text: '理解 setImmediate()',
              //   link: '/getting-start/25.Understanding-setImmediate().md'
              // },
              // {
              //   text: '发现 JavaScript 计时器',
              //   link: '/getting-start/26.Discover-JavaScript-Timers.md'
              // },
              // {
              //   text: 'JavaScript 异步编程和回调,
              //   link: '/getting-start/27.JavaScript-Asynchronous-Programming-and-Callbacks.md'
              // },
              // {
              //   text: '理解 JavaScript Promise',
              //   link: '/getting-start/28.Understanding-JavaScript-Promises.md'
              // },
              // {
              //   text: '带有 Async 和 Await 的现代异步 JavaScript',
              //   link: '/getting-start/29.Modern-Asynchronous-JavaScript-with-Async-and-Await.md'
              // },
              // {
              //   text: 'Node.js 事件发射器',
              //   link: '/getting-start/30.The-Node.js-Event-emitter.md'
              // },
              // {
              //   text: '构建一个 HTTP 服务器',
              //   link: '/getting-start/31.Build-an-HTTP-Server.md'
              // },
              // {
              //   text: '使用 Node.js 发出 HTTP 请求',
              //   link: '/getting-start/32.Making-HTTP-requests-with-Node.js.md'
              // },
              // {
              //   text: '使用 Node.js 发出 HTTP POST 请求',
              //   link: '/getting-start/33.Make-an-HTTP-POST-request-using-Node.js.md'
              // },
              // {
              //   text: '使用 Node.js 获取 HTTP 请求正文数据',
              //   link: '/getting-start/34.Get-HTTP-request-body-data-usingNode.js.md'
              // },
              // {
              //   text: '在 Node.js 中使用文件描述符',
              //   link: '/getting-start/35.Working-with-file-descriptors-in-Node.js.md'
              // },
              // {
              //   text: 'Node.js 文件统计信息',
              //   link: '/getting-start/36.Node.js-file-stats.md'
              // },
              // {
              //   text: 'Node.js 文件路径',
              //   link: '/getting-start/37.Node.js-File-Paths.md'
              // },
              // {
              //   text: '使用 Node.js 读取文件',
              //   link: '/getting-start/38.Reading-files-with-Node.js.md'
              // },
              // {
              //   text: '使用 Node.js 编写文件',
              //   link: '/getting-start/39.Writing-files-with-Node.js.md'
              // },
              // {
              //   text: '在 Node.js 中使用文件夹',
              //   link: '/getting-start/40.Working-with-folders-in-Node.js.md'
              // },
              // {
              //   text: 'Node.js fs 模块',
              //   link: '/getting-start/41.The-Node.js-fs-module.md'
              // },
              // {
              //   text: 'Node.js 路径模块',
              //   link: '/getting-start/42.The-Node.js-path-module.md'
              // },
              // {
              //   text: 'Node.js 操作系统模块',
              //   link: '/getting-start/43.The-Node.js-os-module.md'
              // },
              // {
              //   text: 'Node.js 事件模块',
              //   link: '/getting-start/44.The-Node.js-events-module.md'
              // },
              // {
              //   text: 'Node.js http 模块',
              //   link: '/getting-start/45.The-Node.js-http-module.md'
              // },
              // {
              //   text: 'Node.js 缓冲区',
              //   link: '/getting-start/46.Node.js-Buffers.md'
              // },
              // {
              //   text: 'Node.js 流',
              //   link: '/getting-start/47.Node.js-Streams.md'
              // },
              // {
              //   text: 'Node.js，开发和生产的区别',
              //   link: '/getting-start/48.Node.js-the-difference-between-development-and-production.md'
              // },
              // {
              //   text: 'Node.js 中的错误处理',
              //   link: '/getting-start/49.Error-handling-in-Node.js.md'
              // },
              // {
              //   text: '如何在 Node.js 中记录对象',
              //   link: '/getting-start/50.How-to-log-an-object-in-Node.js.md'
              // },
              // {
              //   text: '带有 TypeScript 的 Node.js',
              //   link: '/getting-start/51.Node.js-with-TypeScript.md'
              // },
              // {
              //   text: '带有 WebAssembly 的 Node.js',
              //   link: '/getting-start/52.Node.js-with-WebAssembly.md'
              // },
              // Differences-between-Node.js-and-the-Browser
            ]
          },
        ]
      }
    ]
  },
})