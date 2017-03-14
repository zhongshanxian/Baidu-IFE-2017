# Lesson

+ [task7-实现常见的技术产品官网的页面架构及样式布局](http://ife.baidu.com/course/detail/id/102)

# Requirements

+ 学习掌握如何在没有标注的情况下实现设计稿到页面的精确转变
+ 设计稿是有一定宽度的，这个宽度为页面的最小宽度，也就是说，当浏览器窗口宽度小于设计稿宽度时，允许出现横向滚动条
+ 在Chrome中完美实现与设计稿的各项字体、布局、内外边距等样式

# Task

+ [task7 preview](https://codepen.io/zhongshanxian/pen/xqgxWy)
+ [task7 source code](https://github.com/zhongshanxian/Baidu-IFE-2017/blob/master/codes/HTML%26CSS/task7-web%20page%20structure.html)

### html

```html
<body><!--部分代码，轮播图部分-->
  <div id="myCarousel" class="carousel slide">
        <!-- 轮播（Carousel）指标 -->
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>   
        <!-- 轮播（Carousel）项目 -->
        <div class="carousel-inner" id="carousel-page">
          <div class="item active">
            <p style="font-size:20px;margin-bottom:25px;">新世界/<span style="color:red;">01</span></p>
            <p style="font-size:10px;color:gray;line-height:30px;width:300px;text-align:left;margin:0 auto 45px;">新世界是个新世界新世界是个新世界新世界是个新世界<br>新世界是个新世界新世界是个新世界新世界是个新世界<br>新世界是个新世界新世界是个新世界新世界是个新世界<br>新世界是个新世界新世界是个新世界</p>
            <div>
              <a href="#">更多详情</a>
            </div>
          </div>
          <div class="item">
            <p style="font-size:20px;margin-bottom:25px;">新世界/<span style="color:red;">02</span></p>
            <p style="font-size:10px;color:gray;line-height:30px;width:300px;text-align:left;margin:0 auto 45px;">新世界是个新世界新世界是个新世界新世界是个新世界<br>新世界是个新世界新世界是个新世界新世界是个新世界<br>新世界是个新世界新世界是个新世界新世界是个新世界<br>新世界是个新世界新世界是个新世界</p>
            <div>
              <a href="#">更多详情</a>
            </div>
          </div>
          <div class="item">
            <p style="font-size:20px;margin-bottom:25px;">新世界/<span style="color:red;">03</span></p>
            <p style="font-size:10px;color:gray;line-height:30px;width:300px;text-align:left;margin:0 auto 45px;">新世界是个新世界新世界是个新世界新世界是个新世界<br>新世界是个新世界新世界是个新世界新世界是个新世界<br>新世界是个新世界新世界是个新世界新世界是个新世界<br>新世界是个新世界新世界是个新世界</p>
            <div>
              <a href="#">更多详情</a>
            </div>
          </div>
        </div>
      </div>
</body>
```

### css

```css
<style type="text/css">/*部分代码*/
/*设置select的样式*/
#part2 select
{
  width:240px;
  height:36px;
  margin:0 25px 0 0;
  /*很关键：将默认的select选择框样式清除*/
  -webkit-appearance:none;
  appearance:none;
  -moz-appearance:none;
  padding:7px;
  background:url("https://github.com/zhongshanxian/Baidu-IFE-2017/blob/master/docs/assets/img/select.png?raw=true") white no-repeat 212px 8px;
  color:#444;
}
/*设置尖角*/
#tan
{
  border:22px solid;
  border-color:transparent white transparent transparent;
  height:0px;
  width:0px;
  float:right;
  position:relative;
  top:-170px;;
}
</style>
```

# Notes

+ CSS设计指南（第三版）
   + 弹出层的尖角

```css
<style type="text/css">
  #tan
  {
    border:22px solid;/*size*/
    border-color:transparent white transparent transparent;/*方向*/
    height:0px;
    width:0px;
  }
</style>
```
+ 报名表处利用bootstrap的栅格布局实现

```html
<div id="write" class="row">
  <div id="item" class="col-xs-5">
  </div>
  <div id="information" class="col-xs-7">
  </div>
</div>

```