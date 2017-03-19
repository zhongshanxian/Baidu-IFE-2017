# Lesson

+ [task10-Flexbox 布局练习](http://ife.baidu.com/course/detail/id/114)

# Requirements

+ 学习如何flex进行布局，学习如何根据屏幕宽度调整布局策略。
+ 屏幕宽度小于640px时，调整Flexbox的属性以实现第四个元素移动到最前面的效果，而不要改动第一个元素的边框颜色与高度实 现效果图。

# Task

+ [task10 preview](https://codepen.io/zhongshanxian/pen/zZEWvX)
+ [task10 source code](https://github.com/zhongshanxian/Baidu-IFE-2017/blob/master/codes/HTML%26CSS/task10-flexbox.html)

### html

```html
<body>
  <div class="item">
    <div class="item1">2</div>
    <div class="item2">3</div>
    <div class="item3">4</div>
    <div class="item4">4</div>
  </div>
</body> 
```

### css

```css
  <style type="text/css">
    .item
    {
      display:flex;
      justify-content:space-between;
      align-items:center;
    }
    .item div
    {
      width:150px;
    }
    .item1
    {
      height:120px;
      border:1px solid red;
    }
    .item2
    {
      height:100px;
      border:1px solid red;
    }
    .item3
    {
      height:40px;
      border:1px solid red;
    }
    .item4
    {
      height:200px;
      border:1px solid blue;
    }
    @media only screen and (max-width:640px)
    {
      .item
      {
       flex-wrap:wrap;
       align-items: flex-start;
       margin:0 38px;
      }
      .item1
      {
        order:2;
      }
      .item2
      {
        order:3;
      }
      .item3
      {
        order:4;
      }
      .item4
      {
        order:1;
        margin-bottom:20px;
      }
      body
      {
        overflow-x:scroll;
        width:598px;
      }
    }
  </style>
```

# Notes

+ 左右两边紧贴浏览器及居中显示
   
```css
<style type="text/css">
  .item
  {
    display:flex;/*设置flex模式*/
    justify-content:space-between;/*两边紧贴浏览器，其他等宽*/
    align-items:center;/*item以中间为轴线*/
  }
</style>
```
+ 屏幕<640px时，通过order，将蓝色框放在第一

```html
<style type="text/css">
  .item1
  {
    order:2;
  }
  .item2
  {
    order:3;
  }
  .item3
  {
    order:4;
  }
  .item4
  {
    order:1;/*数字即顺序*/
  }
</style>
```