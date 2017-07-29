# Lesson

+ [task3-三栏式布局](http://ife.baidu.com/course/detail/id/94)

# Requirements

+ 掌握position与float的概念以及在布局时的用法
+ 左右两栏宽度固定，中间一栏根据父元素宽度填充满，最外面的框应理解为浏览器。
  背景色为 #eee 区域的高度取决于三个子元素中最高的高度。
+ 改变中间一栏的内容长度，以确保在中间一栏较高和右边一栏较高时，父元素的高度始终为子元素中最高的高度。

# Task

+ [task3 preview](https://codepen.io/zhongshanxian/pen/mWVPWV)
+ [task3 source code](https://github.com/zhongshanxian/Baidu-IFE-2017/blob/master/codes/HTML%26CSS/task3-three-columns.html)

### html

```html
<div id="main">
	<!--第一第二栏-->
  <div id="two-columns">
		<!--第一栏-->
    <div id="team">
      <a href="http://baike.baidu.com/link?url=AeQZhQmvPtD_aM7DlLj5OE8cyKQpsS7mV2ObCeD2bfemOl0SPzZsKtOmhyFVvOo9ouBLmUZadPTJ-8HBSUesdz0ipiB0w0hLUWCbvDltz9MTcC3cKBDYZq8iqSGiLB4G" target="_blank"><img src="http://pic.baike.soso.com/p/20100627/20100627002110-1194661232.jpg" alt="team logo" width=100>
     		<p>墨明棋妙</p>
      </a>
    </div>
    <!--第二栏-->
    <div id="introduce">
      <h2>墨明棋妙</h2><br />
      <p> 墨明棋妙原创音乐团队，成立于2007年1月6日，由ediq与小狮子丢丢发起组织，聚集了全国各地一群对传统与流行音乐有相同爱好和理念的朋友，成员在曲，词，演奏，演唱，后期制作，mv制作，美工，宣传等方面各展其长。音乐作品风格多元，以“古风”见长。团队倡导“流行相对论”“万有引力向古风”的创作思想，将传统民乐与流行元素相结合，并融合古体与现代诗词的文字精华，打造富有现代气息又不失古韵的系列音乐作品。</p><br />
      <h4>村歌</h4>
        <p><span class="first-letter">墨</span>香千里迎佳客，</p>
        <p><span class="first-letter">明</span>溪轻入子牙河。</p>
        <p><span class="first-letter">棋</span>盘纵横黑白子，</p>
        <p><span class="first-letter">妙</span>音拨醉满城歌。</p><br />
      <h4>宗旨</h4>
        <p>以旋律相识，凭文字相知，用歌声会友。让我们一起建设传统与流行音乐爱好者共同的家园
        墨村的“万有引力定律”和“相对论”：</p>
        <p>1.“万有引力向古风”</p>
        <p>古风，永远的主打歌</p>
        <p>2.“流行相对论”</p>
        <p>摇滚？饶舌？RP？EG？一切皆有可能。</p>
        <p>最后~</p>
        <p>“墨村是我家 繁荣靠大家”！^ ^~ </p><br /> 
      <h4 align="right">
      	<a href="http://weibo.com/mmqmusic?refer_flag=1005055013_&is_all=1" target="_blank">more information...</a>
      </h4>
    </div>
  </div>
		<!--第三栏-->
    <div id="person">
	    <a href="http://weibo.com/fairyaki?refer_flag=1005055013_&is_hot=1" target="_blank"><img src="http://tva3.sinaimg.cn/crop.0.15.750.750.180/6b16d997jw8fckqe4enxxj20ku0lpabd.jpg" alt="one" width=110 height=110></a>
	    <a href="http://weibo.com/qingnong?from=feed&loc=at&nick=清弄&is_all=1" target="_blank"><img src="http://tva3.sinaimg.cn/crop.1.0.748.748.180/67c07811jw8fag9gj9po4j20ku0ksq3d.jpg" alt="two" width=110 height=110></a>
	    <a href="http://weibo.com/i2staremma?from=feed&loc=at&nick=小愛的媽&is_hot=1" target="_blank"><img src="http://tva4.sinaimg.cn/crop.0.1.1242.1242.180/6a3f3c81jw8f8845rzjwrj20yi0ykafh.jpg" alt="three" width=110 height=110></a>
	    <a href="http://weibo.com/hita1226?from=feed&loc=at&nick=HITA" target="_blank"><img src="http://tva1.sinaimg.cn/crop.0.0.750.750.180/69d845bbjw8f3smpwf26sj20ku0ku759.jpg" alt="four" width=110 height=110></a>
    </div>
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
* 
{
  margin:0;
  padding:0;
}
#main 
{
  width:auto;/*根据里面的三栏宽度而改变*/
  float:left;/*三栏都浮动，若父元素不浮动，则溢出*/
  margin:20px;
  background-image:url(http://pic.baike.soso.com/p/20130522/20130522171955-500631263.jpg);
  padding:20px;
  border:2px solid #558B8B;
}
#two-columns
{
  float:left;
  width:100%;/*在预留位置后，充满*/
  margin-right:-195px;/*为右边栏腾出空间*/
}
#team
{
  width:200px;
  float:left;
  border:2px solid #ccc;
  background:white;
  padding:15px;
  box-sizing:border-box;
}
#team p
{
  padding-top:35px;
  text-shadow:0 0 1px #f77;
}
#team img
{
  float:left;
}
#introduce
{
  width:auto;/*div中，除去第一栏的空间，剩下第二栏auto*/
  border:2px solid #ccc;
  background:white;
  margin-left:220px;
  margin-right:215px;
  padding:20px;
  box-sizing:border-box;
}
#introduce p
{
  text-indent:2em;/*缩进*/
}
#team > a:link{color:#A52A2A;text-decoration:none;}
h4 > a:link{color:#6495ED;text-decoration:none;}
.first-letter
{
  color:#008B00;
}
#person
{
  width:150px;
  float:left;
  border:2px solid #ccc;
  background:white;
  padding:20px;
}
#person img
{
  margin:15px 20px 12px 20px;
  box-shadow:0 0 7px black;
}
footer
{
  font-size:12px;
  text-align:center;
}
/*小屏显示滚动条*/
@media only screen and (max-width:959px)
{
  body
  {
    overflow-x:scroll;
    width:944px;
  }
}
</style>
```

# Notes
+ CSS设计指南（第三版）
+ [float属性](http://www.runoob.com/cssref/pr-class-float.html)
+ 要在流动栏的左右侧流出足够的空间给旁边两栏

```css
<style type="text/css">
#introduce
{
  width:auto;
  /*float:left;  */
  border:2px solid #ccc;
  background:white;
  margin-left:220px;
  margin-right:215px;
  padding:20px;
  box-sizing:border-box;
}
</style>
```