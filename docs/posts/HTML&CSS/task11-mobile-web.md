# Lesson

+ [task11-移动Web页面布局实践](http://ife.baidu.com/course/detail/id/116)

# Requirements

+ 掌握移动Web开发在页面架构和布局的方法及差异性
+ 掌握移动Web开发页面调试的方法

# Task

+ [task11 preview](https://codepen.io/zhongshanxian/pen/VpdzvR?editors=1100)
+ [task11 source code](https://github.com/zhongshanxian/Baidu-IFE-2017/blob/master/codes/HTML%26CSS/task11-mobile-web.html)

### html

```html
<body>(部分代码)
  <section class="section2"><!--利用flex布局-->
    <div><a href="#"><img src="https://github.com/zhongshanxian/Baidu-IFE-2017/blob/master/docs/assets/img/img3.jpg?raw=true"></a><br><span>分栏一</span><br>分栏小标题</div>
    <div class="div2"><a href="#"><img src="https://github.com/zhongshanxian/Baidu-IFE-2017/blob/master/docs/assets/img/img3.jpg?raw=true"></a><br><span>分栏二</span><br>分栏小标题</div>
    <div><a href="#"><img src="https://github.com/zhongshanxian/Baidu-IFE-2017/blob/master/docs/assets/img/img3.jpg?raw=true"></a><br><span>分栏三</span><br>分栏小标题</div>
  </section>
</body> 
```

### css

```css
<style type="text/css">/*部分css代码*/
  .section2/*fleex布局*/
  {
    display:flex;
    justify-content:space-around;
    position:relative;
    top:125px;
    text-align:center;
    margin-bottom:10px;
  }
  .section2 div
  {
    width:33.33%;
    font-size:14px;
    color:#888;
    padding-bottom:5px;
  }
  .div2
  {
    border-left:2px solid #ccc;
    border-right:2px solid #ccc;
  }
  .section2 img
  {
    width:60%;
    margin-top:7px;
  }
  .section2 span
  {
    font-size:18px;  
    color:black;
  }
</style>
```

# Notes

+ 移动端完全显示
   
```html
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport">
```
+ 让超链接或者点击的面积大一些

```css
<style type="text/css">
  header li a
    {
      padding:20% 18%;
      text-decoration:none;
      font-size:20px;
      color:#646464;
      line-height:60px;/*设置行高使其充满盒子*/
    }
</style>
```