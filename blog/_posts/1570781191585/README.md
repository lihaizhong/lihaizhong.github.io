---
author: sky
location: 浙江杭州	移动
tags: 
  - JavaScript
  - vue
  - Object.defineProperty
date: Fri Oct 11 2019 16:06:31 GMT+0800 (GMT+08:00)
---

# Vue源码解析之代理模式

不知不觉，Vue从诞生到现在已经走过了四个年头了。在这期间，前端发生了天翻地覆的变化，前端工作越来越复杂，前端应用维护也越来越困难，传统的开发模式已经无法满足现阶段的开发与维护了，这时候各种工具的出现使我们从刀耕火种的*jQuery时代*进化到了以三大框架为基础的*工业化时代*。三大框架抽离了我们对DOM层的直接操作，使前端开发更加专注于对业务的梳理、数据的处理以及组件的复用。

::: tip
几天前，Vue作者尤雨溪宣布`Vue 3.0 pre-alpha`版本发布，有兴趣的同学可以[点击这里](https://github.com/vuejs/vue-next)查看。由于 3.0 还太新，本人还没有去了解其源码，今天我们还是继续探讨 2.0 的源码，聊聊 2.0 源码中的一些思想和理念吧。
:::

我们在使用Vue的时候有没有发现，我们明明在`data`和`props`中写的属性，在`computed`中写的属性，在`methods`中写的方法，却能直接使用**Vue的实例**或者**Vue组件的实例**访问。那Vue是如何实现的呢？今天我们就来好好讲讲藏在Vue中的设计模式 —— 代理模式。

## 代理模式

代理模式的定义就是把对目标对象的访问，交给另一个代理对象来操作。

在我们的日常开发中其实有很多东西可能都是利用代理模式来实现的。比如我们与后端交互一定会使用`Ajax`技术，但是原生的`Ajax`写法太麻烦了，我们往往都是使用第三方封装的库来调用`Ajax`请求。每个第三方库对外抛出的名称可能不同，但是他们底层都是调用了`XMLHttpRequest`这个类。在这个过程中，我们并不会直接操作`XMLHttpRequest`，而是通过**代理人**（第三方`Ajax`库）帮助我们去调用，从而实现简单高效的`Ajax`请求，这就是一种典型的代理模式。

## Vue中的代理模式

前面我们已经举了一个第三方工具库利用代理模式封装`Ajax`请求的栗子，那Vue是如何实现对`data`、`props`、`computed`、`methods`中的属性的代理的呢？

这里要讲的是在ES5之后出现的一个对象上的方法 —— `Object.defineProperty`。我们知道`Object.defineProperty`在Vue中起到至关重要的作用，Vue的响应式数据设计就是依赖这个属性。然而Vue并不仅仅只是利用它来实现响应式数据，其实Vue充分利用`Object.defineProperty`这个属性来实现响应式数据和对象代理。

在Vue中有一个特定的方法`proxy`，这个方法的作用就是实现Vue的对象代理。

首先，我们来看看`proxy`的实现。

```javascript
/**
 * @param {object} target 这里往往是Vue的实例或者Vue组件的实例
 * @param {object} sourceKey 这里往往是被代理对象，也就是我们实际要操作的对象
 * @param {string} key 被代理的属性名称，也是我们在Vue的实例或者Vue组件的实例上操作的属性名称
 */
function proxy(target, sourceKey, key) {
  // 修改属性的get操作
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key]
  }

  // 修改属性的set操作
  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val
  }

  // 实现代理的重要方法
  Object.defineProperty(target, key, sharedPropertyDefinition)
}
```

以上就是Vue代理模式的实现。Vue利用修改对象属性的`get`和`set`方法，实现了对`data`、`props`、`computed`、`methods`对象属性的代理。这样的实现方式，既可以保留我们习惯的开发方式设置属性值，又可以优雅的读取对象的属性值。在我们的日常开发中，我们也可以学习使用这种方式来优雅的完成一些特殊的操作。

## 结论

代理模式是一种思想，这种思想其实在我们开发中经常用到，有些时候可能只是我们没有意识到这本身就是一种设计模式。Vue很好的利用了代理模式和`Object.defineProperty`，实现了优雅的读取和设置数据。在日常开发中，我们应该好好利用代理模式来封装我们的代码。同时，合理的利用`Object.defineProperty`可以使我们的代码更加优雅，甚至可以提升我们的应用程序的性能（具体原因可以去查看[Object.defineProperty](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)的描述符设置）。