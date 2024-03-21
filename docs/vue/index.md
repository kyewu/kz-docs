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
  - [unplugin-vue-router](https://github.com/posva/unplugin-vue-router) - 文件系统为基础的路由
  - [vite-plugin-vue-layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) - 页面布局
- [unplugin-vue-components](unplugin-vue-components) - 自动加载组件
- [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) - 自动导入composition API

<script setup>
import { ref } from 'vue'
import { useData } from 'vitepress'

const {page} = useData()
</script>

<style lang="sass">

</style>