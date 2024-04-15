### Import image

#### Default import
```vue
<script setup lang="ts">
import imgIcon from '@assets/imgs/home/img_1.png'
</script>

<template>
<img :src="imgIcon" />
</template>
```

### Dynamic import image :tada:Recommend
::: code-group
```ts{3} [public-use.ts]
// Get assets
export const getAssetsFile = (name: string): string => {
    return new URL(`../assets/${name}`, import.meta.url).href
}

export const getImagePath = (name: string): string => {
    if(!name) return '';
    let prefixPath = 'imgs';
    if(/^course/.test(name)) prefixPath = `${prefixPath}/course`;
    if(/^banner/.test(name)) prefixPath = `${prefixPath}/banner`;
    return new URL(`../assets/${prefixPath}/${name}`, import.meta.url).href
}
```

```vue [Card.vue]
<script setup lang="ts">
const imgIcon = ref(getImagePath('img_1.png'));
</script>

<template>
<img :src="imgIcon" />
</template>
```
:::