---
title: This
---

#### This
This实质上指向了为变量开辟的内存单元，即指向栈。

#### Demo1 this指向global

```ts
const obj = {
    id: 1,
    foo: function(){
        console.log(this.id)
    }
}
obj.foo(); //undefined
```
修改如下，在foo里保存this
```ts
const obj = {
    id: 1,
    foo: function(){
        const self = this; // this指向为obj变量开辟的内存单元
        console.log(self.id)
    }
}
obj.b; //1
```
不论内部嵌套多少层，都是用的整个变量指向的内存地址。