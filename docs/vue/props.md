---
title: props
---

### How to use

#### 1. Complex props with type
In this scenario, we input complex props which include nested object.
We can give default value by withDefaults.

::: code-group

```vue{4,7} [Card.vue]
<script setup>
import type { Params, CardItemType } from './types'

const props = withDefaults(defineProps<Params>(), {
  imgHeight: 'h-40',
  width: 'w-80',
  card: () => ({ image: '', title: 'title' }), // give default value
})
</script>
```

```vue [index.vue]
<script setup lang="ts">
import CardImage from '@assets/images/course/course_0.jpg'
import type { CardItemType } from '@/types'

const cardList: CardItemType[] = [
  {
    image: CardImage,
    title: '2024新考纲-软件设计师（软考中级） 一站式通关课程',
  },
]
</script>

<template>
  <card v-for="(card, index) in cardList" :key="index" :card="card" img-height="h-38" width="w-67.5" />
</template>
```


```ts [types.d.ts]
export interface Params {
  card: CardItemType
  imgHeight?: string
  width?: string
}

export interface CardItemType {
  image: string
  title?: string
  desc?: string
  url?: string
}
```
:::

