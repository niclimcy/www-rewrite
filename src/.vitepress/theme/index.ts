// https://vitepress.dev/guide/custom-theme
import ArticlesLayout from './components/ArticlesLayout.vue'

import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme-without-fonts'
import '@fontsource-variable/roboto-flex'
import "@fontsource-variable/roboto-mono"
import 'material-symbols'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('articles', ArticlesLayout)
  }
} satisfies Theme
