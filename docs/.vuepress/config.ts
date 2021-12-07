import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-CN',
  title: 'NodeJS中文教程',
  description: '',
  base: '/learnnodejs/',
  themeConfig: {
    logo: 'https://nodejs.org/static/images/favicons/favicon.ico',
    repo: 'https://github.com/OnlyProbie/learn-nodejs',
    editLink: false,
  },
})