# Lesson

+ [task4-定位和居中问题](http://ife.baidu.com/course/detail/id/95)

# Requirements

+ 深入了解position等CSS属性
+ 思考不同情况下（如灰色高度是根据内容动态变化的）水平垂直居中的解决方案。
+ 动手试一试各种情况的组合，父元素和子元素分别取不同的 position 值。思考 position 属性各种取值的真正含义，尤其是 absolute 究竟是相对谁而言的。
+ 注意测试不同情况，尤其是极端情况下的效果。

# Task

+ [task4 preview](https://codepen.io/zhongshanxian/pen/VpaQmR?editors=1100)
+ [task4 source code](https://github.com/zhongshanxian/Baidu-IFE-2017/blob/master/codes/HTML%26CSS/task4-position.html)

### html

```html
<div>
	   小曲儿，知名古风音乐唱作人。中国原创音乐基地热门歌手，平纱落雁原创音乐团队成员，在“古风圈”颇负盛名，2012年发行的个人首张原创古风专辑《曲倾天下》倍受好评。2014年发行的个人第二张原创古风专辑《曲终人未散》更赢得了广大粉丝的追捧。另外还有《上邪》、《三生一梦》等歌曲，深受听众喜爱。<br /><br />
	  代表作《上邪》<br />
	【文案】<br />
	　　公元二零一二年，陕西西安考古又发现一墓葬，通过墓志铭可判断其为一位将军与一位宗室女子合葬墓，主墓室存放双人合葬棺椁，但合葬棺内却仅有一具男性尸骨。意外的是，墓志铭上该宗室女子封号与史册记载的一位同时代的和亲公主封号一致。<br />
	【歌词片段】<br />
	　　你嫁衣如火灼伤了天涯，从此残阳烙我心上如朱砂。都说你眼中开倾世桃花，却如何一夕桃花雨下。<br />
</div>
<footer>
	<p>版权所有&copy;xian
		<script type="text/javascript">
		    document.write(new Date().getFullYear());
		</script>
    </p>
</footer>
```

### css

```css
<style type="text/css">
	@media screen and (min-width:884px)
	{
	  html
	  {
	    color:white;
	    background-image:url("https://github.com/zhongshanxian/Baidu-IFE-2017/blob/master/docs/assets/img/quer.jpg?raw=true");
	  }
	  div
	  { 
	    /*利用渐变设置圆弧切角*/
	    background:
	      radial-gradient(circle at top left,
	      rgba(200,200,200,0.5) 50px, rgba(200,200,200,0.1) 0) top left,
	      radial-gradient(circle at bottom right,
	      rgba(200,200,200,0.5) 50px, rgba(200,200,200,0.1) 0) bottom right;
	    /*将div分为上下两个板块*/
	    background-size: 50% 100%;
	    background-repeat: no-repeat;
	    background-color:rgba(70,50,50,0.7);
	    padding:40px;
	    position:absolute;
	    top:50%;/*上偏移50%*/
	    left:50%;/*下偏移50%*/
	    transform: translate(-50%, -50%);/*2D转换，向左向上移动div的50%距离*/
	    text-indent:2em;
	  }
	  footer
	  {
	    text-align:right;
	    font-size:12px;
	    color:white;
	  }
	}
	/*设置小屏显示*/
	@media screen and (max-width:884px)
	{ 
	  html
	  {
	    color:white;
	    background-image:url("https://github.com/zhongshanxian/Baidu-IFE-2017/blob/master/docs/assets/img/quer.jpg?raw=true");
	  }
	  div
	  { 
	     background:
	      radial-gradient(circle at top left,
	      rgba(200,200,200,0.5) 50px, rgba(200,200,200,0.1) 0) top left,
	      radial-gradient(circle at bottom right,
	      rgba(200,200,200,0.5) 50px, rgba(200,200,200,0.1) 0) bottom right;
	    background-size: 50% 100%;
	    background-repeat: no-repeat;
	    background-color:rgba(70,50,50,0.7);
	    padding:40px;
	    margin:0 auto;
	    text-indent:2em;
	  }
	  footer
 	 {
	    position:absolute;
	    right:10px;
	    font-size:12px;
	    color:black;
	  }
	}
</style>
```

# Notes
+ CSS揭秘（第三版）
   + 四角圆弧切角教程

```css
<style>
div
	{
	background:
		      radial-gradient(circle at top left,
		      rgba(200,200,200,0.5) 50px, rgba(200,200,200,0.1) 0) top left,
		      radial-gradient(circle at bottom right,
		      radial-gradient(circle at top right,
		      rgba(200,200,200,0.5) 50px, rgba(200,200,200,0.1) 0) top right,
		      radial-gradient(circle at bottom right,
		      rgba(200,200,200,0.5) 50px, rgba(200,200,200,0.1) 0) bottom right,
		      radial-gradient(circle at bottom left,
		      rgba(200,200,200,0.5) 50px, rgba(200,200,200,0.1) 0) bottom left;
		    /*将div分为四个板块*/
		    background-size: 50% 50%;
		    background-repeat: no-repeat;/*避免出现四个切角都在 每个板块的右下角*/
	}
</style>
```
+ [position属性](https://css-tricks.com/centering-css-complete-guide/)
