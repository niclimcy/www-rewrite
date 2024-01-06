import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LineageOS",
  description: "LineageOS Android Distribution",
  base: "/www-rewrite/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: 'lineage-light.svg',
      dark: 'lineage-dark.svg',
      alt: 'LineageOS Logo'
    },
    siteTitle: false,

    nav: [
      { text: 'Blog', link: '/blog/' },
      { text: 'Engineering', link: '/engineering/' },
      { text: 'About', link: '/about' },
      { text: 'Community', link: '/community' },
      { text: 'Legal', link: '/legal' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LineageOS' }
    ]
  }
})
