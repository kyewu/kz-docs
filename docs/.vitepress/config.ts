import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "听风的蝉",
  description: "document site",
  lastUpdated: true,
  vite: {
    server: {
      port: 5174, // i use 5173 to in postgres, so change the port to 5174
    },
  },
  head: [["link", { rel: "icon", href: "/assets/favicon.ico" }]],
  markdown: {
    theme:{
      light: 'material-theme-lighter',
      dark: 'material-theme-darker'
    }
  },
  themeConfig: {

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      {text: '面试题', link: "/interview/"},
      { text: "VitePress", link: "/vitepress/" },
      { text: "Vue", link: "/vue/" },
      { text: "Nest", link: "/nest/" },
    ],
    sidebar: {
      "/vitepress/": [
        {
          text: "内容",
          items: [
            { text: "简介", link: "/vitepress/" }, // /path/ map to /path/index.md
            { text: "快速开始", link: "/vitepress/quickstart" },
            { text: "路由", link: "/vitepress/route" },           
          ],
        },
      ],
      "/vue/": [
        {
          text: 'Vue',
          collapsed: true,
          items: [
            { text: "简介", link: "/vue/" }
          ]
        },
        {
          text: '开始',
          collapsed: true,
          items: [
            { text: "快速开始", link: "/vue/quickstart" },
            { text: "props", link: "/vue/props" },
          ]
        }
      ],
      "/interview/": [
        {
          text: '面试题',
          items: [
            { text: "简介", link: "/interview/" }
          ]
        },
        {
          text: 'Javascript',
          collapsed: true,
          items: [
            { text: "内容", link: "/interview/javascript" }
          ]
        }
      ],
      "/nest/": [],
    },
    socialLinks: [{ icon: "github", link: "https://github.com/kyewu/kz-docs" }],
  },
});
