---
title: Hoisting
---

### Hoisting
变量提升中，函数优先.

#### 场景1
```ts
foo() // 1

function foo() {
    console.log(1);
}

var foo = function() {
    console.log(2);
}
```
以上代码，执行结果是1，代码引擎解释：
```ts
function foo() {
    console.log(1);
}

var foo;
foo()

foo = function() {
    console.log(2);
}
var
```

#### 场景2 多个相同函数，后者覆盖前者
```ts
foo(); // 3

function foo() {
    console.log(1);
}

function foo() {
    console.log(3);
}

var foo = function() {
    console.log(2)
}
```
解释如下：
```ts
function foo() {
    console.log(3);
}

var foo;
foo = function() {
    console.log(2);
}
```
