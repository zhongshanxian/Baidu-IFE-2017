# Lesson

+ [task6-通过HTML及CSS模拟报纸排版](http://ife.baidu.com/course/detail/id/99)

# Requirements

+ 深入掌握CSS中的字体、背景、颜色等属性的设置
+ 进一步练习CSS布局
+ 在Chrome中完美实现符合标注中的各项说明

# Task

+ [task6 preview](https://codepen.io/zhongshanxian/pen/EWydbQ?editors=1100)
+ [task6 source code](https://github.com/zhongshanxian/Baidu-IFE-2017/blob/master/codes/HTML%26CSS/task6-newspaper.html)

### html

```html
<body>
  <header>
    <div id="red-box">
      <p>ife.baidu.com</p>
    </div>
    <p id="date">2017.03</p>   
  </header>
  <article>
    <section id="part1">
      <div id="part1-photo">
        <div id="box-green">
        </div>
        <div id="box-red">
        </div>
      </div>
      <div id="part1-word">
        <p id="p1">Rachel<br>Archaic-singer</p>
        <p id="p2">She is an archaic singer,and 《锦鲤抄》 is her masterpiece.</p>
        <p id="p3">700</p>
        <p id="p4">3.2</p>
        <div id="css">
          <p id="p5">古风</p>
            <p id="p6">archaic singer</p>
        </div>
      </div>
    </section>
    <section id="part2">
      <div id="what">
      </div>
      <div id="when">
      </div>
      <div id="how">
      </div>
    </section>
    <section id="part3">
      <div id="part3-title">
        <h3><span>THE</span> MASTERPIECE </h3>
        <h3 id="of">OF ANCIENT FIELD</h3>
        <p>古风领域</p>
      </div>
      <div id="part3-word">
      </div>
    </section>
    <section id="part4">
      <div id="part4-photo">  
        <div id="box-black">
          <div id="word">
            <p>古风领域<span>有名气的古风歌手</span></p>
          </div>
        </div>
      </div>
      <div id="part4-word"><br />
        <ul>
        </ul>
        <div id="red-box2">
          <p>0</p>
          <div>
            <p><span>ONE TWO <br>THREE FOUR FIVE</span> archaic singer archaic singer archaic singer</p>
          </div>
        </div>
        <div id="last-box">
          <!--<blockquote>hello world hello world hello world hello world hello world hello world hello world hello world hello world</blockquote>-->
          <div id="ql">“</div>
          <p>archaic singer <br>archaic singer abc archaic singer abc archaic singer abc archaic singer abc archaic</p>
          <div id="qr">”</div>
        </div>
      </div>
    </section>    
  </article>
  <footer>
    <p>ife.baidu.com</p>
  </footer>
</body>
```

### css

```css
<style type="text/css">
/*部分代码/*
section  /*内容居中*/
{
max-width: 892px;
margin: 1em calc(50% - 446px);
}
#part1
{
  margin-top:25px;
}
#part1-photo
{
  width:641px;
  height:301px;
  background-image:url(https://github.com/zhongshanxian/Baidu-IFE-2017/blob/master/docs/assets/img/yinlin1.jpg?raw=true);  
  float:left;
}
</style>
```

# Notes

+ CSS揭秘（第三版）
   + 固定页脚的位置

```css
<style type="text/css">
	body
	{
	  display:flex;
	  flex-flow:column;
	  min-height:100vh;
	}
	article
	{
	  flex:1;
	}
</style>
```
+ 页尾处的冒号可以使用伪类实现

```css
<style type="text/css">
	blockquote
	{
	  font-size:14px;
	  color:#5a5b5b;
	  font-style:oblique;
	  font-family:"SimHei";
	  margin-top:35px;
	}
	blockquote:before {
	  color: #d45d5c;
	  content: "\201C";
	  font-size:72px;
	  position:absolute;
	  left:-50px;
	  top: 55px;
	  line-height: 0.1em;
	}
	blockquote:after {
	  color:#d45d5c;
	  content: "\201D";
	  font-size: 72px;
	  position:absolute;
	  right:10px;
	  bottom: -45px;
	  line-height: 0.1em;
	}
</style>
```