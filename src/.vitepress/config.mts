import { defineConfig } from 'vitepress'

const currentYear = new Date().getFullYear();

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LineageOS",
  description: "LineageOS Android Distribution",
  base: "/www-rewrite/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: '/lineage-light.svg',
      dark: '/lineage-dark.svg',
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
      { icon: 'github', link: 'https://github.com/LineageOS' },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm491-80h69v-69l-69 69Zm-457 0h73l120-120h85L392-200h64l120-120h85L541-200h65l120-120h34v-440H200v509l69-69h85L234-200Zm72-200-56-56 177-177 80 80 147-147 56 56-203 204-80-80-121 120ZM200-200v-560 560Z"/></svg>'
        },
        link: 'https://status.lineageos.org',
        ariaLabel: 'Status'
      },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/></svg>'
        },
        link: 'https://wiki.lineageos.org',
        ariaLabel: 'Wiki'
      }
    ],

    footer: {
      message: `
      Need to get in Contact? Check out <a target="_blank" href="https://www.reddit.com/r/LineageOS/">r/LineageOS!</a> <br />
      Need a Press Kit? Get our <a target="_blank" href="https://docs.google.com/presentation/d/1VmxFrVqkjtNMjZbAcrC4egp8C_So7gjJR3KuxdJfJDo/edit?usp=sharing">Public Brand Guide</a> <br />
      PayPal: <a target="_blank" href="https://paypal.me/LineageOS">paypal.me/LineageOS</a> <br />
      Patreon: <a target="_blank" href="https://patreon.com/LineageOS">patreon.com/LineageOS</a> <br />
      Note: LineageOS LLC is not a 501(c)(3) non-profit, as such donations are not tax-exempt.
      `,
      copyright: `<b>&copy; 2016 - ${currentYear} The LineageOS Project</b>`
    }
  }
})
