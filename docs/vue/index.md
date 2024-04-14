---
layout: doc
---

[[toc]]
## Preset
### UI框架
- [UnoCss](https://github.com/antfu/unocss)
### Icons
- [Iconify](https://iconify.design/) 图标库

### Plugin
- :tada: [Vue Router](https://github.com/vuejs/router) 
  - :tada: [unplugin-vue-router](https://github.com/posva/unplugin-vue-router) - 文件系统为基础的路由
  - :tada: [vite-plugin-vue-layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) - 页面布局
- :tada: [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components) - 自动加载组件
- :tada: [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) - 自动导入composition API
- :tada: [VueUse](https://github.com/antfu/vueuse) - Composition API工具合集
- :tada: [Vue Macros](https://vue-macros.dev/zh-CN/guide/bundler-integration.html) - 扩展宏
- [vite-ssg-sitemap](https://github.com/jbaubree/vite-ssg-sitemap) - 站点地图
- :tada: [vite-plugin-vue-devtools](https://github.com/webfansplz/vite-plugin-vue-devtools) -调试

### Commit Plugins
- [husky](https://typicode.github.io/husky/get-started.html)
- [lint-staged](https://typicode.github.io/husky/get-started.html)
- [commit lint](https://commitlint.js.org/guides/local-setup.html)

### Code Style
- [Eslint](https://eslint.org/) use [@antfu/eslint-config](https://github.com/antfu/eslint-config) 单引号，无分号

### Dev Tools
- Vs Code extensions
   - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) 图标内联显示和自动补全
   - Eslint
   - Vite
   - Volar
   - i18n Ally - i18n支持

<script setup>
import { ref } from 'vue'
import { useData } from 'vitepress'

const {page} = useData()
</script>

<style lang="sass">

</style>