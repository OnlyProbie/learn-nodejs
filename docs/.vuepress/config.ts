import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-CN',
  title: 'NodeJS中文教程',
  description: '',

  themeConfig: {
    logo: 'https://nodejs.org/static/images/favicons/favicon.ico',
  },
})