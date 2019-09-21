title: BFC
speaker: 桑白皮
prismTheme: okaidia

<slide class="bg-apple aligncenter" image=".dark">

# BFC {.text-landing.text-shadow}

By sky {.text-intro}

<slide class="bg-apple aligncenter" image=".dark">

# 什么是BFC

BFC的全称是`Block Formatting Context`。满足以下条件之一的HTML盒子模型即可被称为块级格式化上下文：

- `float`的值不为`none`
- `position`的值不为`relative`或者`static`
- `display`的值为`table-cell`、`table-caption`、`inline-block`、`flex`、`inline-flex`、`grid`、`inline-grid`
- `overflow`的值不为`visible`

<slide class="bg-apple aligncenter" image=".dark">

# 创建块级格式化上下文

- 根元素（html）
- 浮动元素（元素的`float`不是`none`）
- 绝对定位元素（元素的`position`是`absolute`或者`fixed`）
- 行内块元素（元素的`display`为`inline-block`）
- 表格单元格（元素的`display`为`table-cell`，HTML表格单元格默认为该值）
- 表格标题（元素的`display`为`table-caption`，HTML表格标题默认为该值）
- 匿名表格单元格元素（元素的`display`为`table`、`table-row`、`table-row-group`、`table-header-group`、`table-footer-group`【分别是`table`、`row`、`tbody`、`thead`、`tfoot`的默认属性】或`inline-table`）
- `overflow`值不为`visible`的块级元素
- `display`值为`flow-root`的元素
- `contain`值为`layout`、`content`或者`paint`的元素
- 弹性元素（`display`为`flex`或者`inline-flex`元素的直接子元素）
- 网格元素（`display`为`grid`或者`inline-grid`元素的直接子元素）
- 多列容器（元素的`column-count`或者`column-width`不为`auto`，包括`column-count`为**1**）
- `column-span`为`all`的元素始终会创建一个新的BFC，即使该元素没有包裹在一个多列容器中

<slide class="bg-apple" image=".dark">

# 常见的BFC使用场景

:::{.content-left}

- 清除浮动
- 外边距塌陷

:::

:::{.content-right}

```html
html
  head
    meta(charset=utf-8)
    title 清除浮动
  body
    div(style="overflow: hidden;")
      div(style="float: left;")
```

```html
html
  head
    meta(charset=utf-8)
    title 外边距塌陷
  body
    div
      div(style="margin: 20px")
        div(style="margin: 20px")
```

:::
