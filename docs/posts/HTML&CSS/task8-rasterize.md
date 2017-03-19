# Lesson

+ [task8-响应式网格（栅格化）布局](http://ife.baidu.com/course/detail/id/104)

# Requirements

+ 使用 HTML 与 CSS 实现类似 BootStrap 的响应式 12 栏网格布局，根据屏幕宽度，元素占的栏数不同。
+ 网格布局的作用在于更有效地控制元素在网页中所占比例的大小。

# Task

+ [task8 preview](http://codepen.io/zhongshanxian/pen/gmoeOb)
+ [task8 source code](https://github.com/zhongshanxian/Baidu-IFE-2017/blob/master/codes/HTML%26CSS/task8-rasterize.html)

### html

```html
<section class="container">
    <div class="row">
      <div class="col-1-4 col-2-6"><p></p></div><!--嵌套一个p,用来调间距padding-->
      <div class="col-1-4 col-2-6"><p></p></div>
      <div class="col-1-4 col-2-12"><p></p></div>
    </div>
    <div class="row">
      <div class="col-1-3 col-2-3"><p></p></div>
      <div class="col-1-6 col-2-6"><p></p></div>
      <div class="col-1-3 col-2-3"><p></p></div>
    </div>
    <div class="row">
      <div class="col-1-1 col-2-2"><p></p></div>
      <div class="col-1-1 col-2-2"><p></p></div>
      <div class="col-1-2 col-2-8"><p></p></div>
      <div class="col-1-2 col-2-3"><p></p></div>
      <div class="col-1-6 col-2-3"><p></p></div>
    </div>
  </section> 
```

### css

```css
<style type="text/css">/*部分代码*/
.container
    {
      width:100%;
      padding:10px 15px;
    }
    [class*='col-']/*所有class中含有col-的元素*/
    {
      float:left;
      height:70px;
      padding:10px;
      width:8.33%;
    }
    .col-1-1{ width: 8.33%;}
    .col-1-2{ width: 16.66%;}
    .col-1-3{ width: 25%;}
    .col-1-4{ width: 33.33%;}
    .col-1-6{ width: 50%;}   
    .row
    {
        padding:0 10px;
    }
     [class*='col-'] > p/*所有class中含有col-的元素里面的p*/
    {
       background-color: #d45d5c; 
       height:50px;
       border:1px solid #555;
    }
    @media only screen and (max-width:768px)
    {
      .col-2-1{ width: 8.33%;}
      .col-2-2{ width: 16.66%;}
      .col-2-3{ width: 25%;}
      .col-2-4{ width: 33.33%;}
      .col-2-6{ width: 50%;} 
      .col-2-8{ width:66.66%;}
      .col-2-12{ width:100%;}
    }

</style>
```

# Notes

+ 自定义col-的宽度width
   
```css
<style type="text/css">
  [class*='col-']/*所有class中含有col-的元素*/
    {
      float:left;
      height:70px;
      padding:10px;
      width:8.33%;
    } 
</style>
```
+ 利用p的嵌套，设置间距

```html
<style type="text/css">
  [class*='col-'] > p/*所有class中含有col-的元素里面的p*/
    {
       background-color: #d45d5c; 
       height:50px;
       border:1px solid #555;
    } 
</style>
```