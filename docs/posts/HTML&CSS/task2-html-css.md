# Lesson

+ [task2-零基础HTML及CSS编码（一）](http://ife.baidu.com/course/detail/id/92)

# Requirements

+ 实践并掌握CSS的颜色、字体、背景、边框、盒模型、简单布局等样式的定义方式
+ HTML 及 CSS 代码结构清晰、规范

# Task

+ [task2 preview](https://codepen.io/zhongshanxian/pen/mWyqYN)
+ [task2 source code](https://github.com/zhongshanxian/Baidu-IFE-2017/blob/master/codes/HTML%26CSS/task2-html-css.html)

### html

```html
<header>
    <h1>古风</h1>
      <!--导航链接-->
      <nav>
        <ul>
          <li><a href="#part1">古风兴起</a></li>
          <li><a href="#part2">古风图片</a></li>
          <li><a href="#part3">表格</a></li>
          <li><a href="#part4">注册</a></li>
        </ul>
      </nav>
</header>
<!--文章-->
<article id="part1">
    <h3>古风兴起</h3>
    <h4>古风入门</h4>
    <p>作者：xian  2017-02-25</p>
    <p class="text-indent">随着人们对古代越来越清醒的认识，古代的文学、思想、习俗等等已经不再是秘密；现代社会的利己、金钱观念等不良思想、观念，也冲击着人们的心灵，使人们陷入迷惘与愁苦当中。因此，有一部分人就利用古代的思想文化、诗词歌赋等等，提升自己的精神境界，在这个物欲横流的世界中保持自己的本真。<br>这里，我只想说一下古风的<strong>图片和服装</strong>。我在微博上关注了一位专画古风图片的大大：<a href="http://weibo.com/u/1789124483?topnav=1&wvr=6&topsug=1&is_hot=1" target="_blank">伊吹鸡腿子</a>，也关注了一个萌萌的妹子：<a href="http://weibo.com/u/2831094660?topnav=1&wvr=6&topsug=1" target="_blank">小豆蔻儿</a>，她是一个非常喜欢汉服的软妹。</p>
    <img src="http://wx1.sinaimg.cn/mw1024/ab957279gy1fd356cc5mmj209q08en01.jpg"><img src="http://wx2.sinaimg.cn/mw1024/ab957279gy1fd356assxej209c08dq7g.jpg">
    <p class="text-indent">除了古风图片和汉服，还有一个神奇的存在：<strong>古风歌曲</strong>。随着古风歌曲影响力的不断扩散和古风同好的不断增加，越来越多才华横溢的音乐人加入古风圈，伴随着第一个古风团队墨明棋妙的成立，古风开始正式走上原创道路。原创团队的出现，是古风发展的一个重要里程碑。从此古风圈就像一个不再幼稚的孩子，开始走上独立之路。古风歌曲不再单纯依靠外物来创作，开始有了自己的灵魂，而这种独创性更是造就了古风的独特魅力。<br>然而，古风歌手是很少露脸的，但他们的声音绝对好听。（友情链接：<a href="http://www.weibo.com/u/1744348630?topnav=1&wvr=6&topsug=1">慕寒</a> ，<a href="http://weibo.com/xiaoqu10?refer_flag=1001030101_&is_all=1#_rnd1488088899772">小曲儿</a>，<a href="http://weibo.com/u/2266537042?topnav=1&wvr=6&topsug=1&is_all=1">银临</a>）----吓到我了，小曲儿居然发自拍。</p>
</article>
<article id="hf">
    <h3>汉服的介绍</h3>
    <h4>汉服的款式</h4>
    <p>作者：xian 2017-02-26</p>
    <p class="text-indent">古代服饰史研究者高春明于1996年出版的<em> 《中国衣冠服饰大辞典》 </em>将<a href="https://zh.wikipedia.org/wiki/%E6%B1%89%E6%9C%8D" target="_blank">汉服</a>定义为：<strong>①辽代服制中的汉族服饰；②汉代服饰；③泛指一般的汉族服装</strong>。<br>
      近年来有“汉服运动”支持者的观点认为，“汉服”是“以华夏汉族的礼仪文化为基础，通过历代汉人王朝推崇周礼、象天法地而形成的具有独特华夏民族文化风貌性格、明显区别于其它民族传统服装的服装体系。”</p>
    <div align="center">
      <img src="http://ww4.sinaimg.cn/bmiddle/a163c684jw1e6b46lo3kwj20m8123gpc.jpg">
    </div>
    <ul>
      <li>袄裙</li>
      <li>褙子</li>
      <li>道袍</li>
      <li>对襟半臂襦裙</li>
      <li>交领襦裙</li>
      <li>齐胸襦裙</li>
      <li>曲裾</li>
      <li>裋褐</li>
      <li>圆领袍</li>
      <li>坦领半臂襦裙</li>
      <li>直裾</li>
      <li>朱子深衣</li>
    </ul>
</article>
<section id="part2">
    <h3>古风图片</h3>
    <blockquote>
    <div style="box-shadow:0px 0px 10px #00aa77;">
      <p>最适合做手机壁纸的图片</p>
      <img src="http://wx4.sinaimg.cn/mw1024/6aa3df83gy1fcgpc1mws2j20gj0rktee.jpg" width=330px>
    </div>
    <div>
      <p>很真实的图片</p>
      <img src="http://wx1.sinaimg.cn/mw1024/6aa3df83gy1fbv250n5d9j20gj0rk123.jpg" width=330px>
    </div>
    <div style="box-shadow:0px 0px 10px #0000aa;">
      <p>我保证这不是黄图</p>  
      <img src="http://ww4.sinaimg.cn/mw1024/6aa3df83gw1fbg6zx9co8j20fr0q9acd.jpg" width=330px>
    </div>
    <div style="box-shadow:0px 0px 10px #cc0000;">
      <p>每一张图片都美到窒息</p>
      <img src="http://ww2.sinaimg.cn/mw1024/6aa3df83gw1fazf8gi60jj20gj0rkthp.jpg" width=330px>
    </div>
    <div style="box-shadow:0px 0px 10px #111111;">
      <p>这张是上上张图片的正脸</p>
      <img src="http://ww1.sinaimg.cn/mw1024/6aa3df83gw1faxizn239jj20gj0rk0xo.jpg" width=330px>
    </div>
    </blockquote>
</section>
<section id="part3">
    <h3>表格</h3>
    <h4>表单</h4>
    <p>作者：xian 2017-02-25</p>
    <ol>
      <li>Au</li>
      <li>Ag</li>
      <li>Cu</li>
    </ol>
    <p>零食清单</p>
    <table border="0" cellspacing="0" cellpadding="0" width=100%>
      <tr style="background:#333333;color:white;">
        <th width=30%>品种</th>
        <th width=30%>单价</th>
        <th width=20%>数量</th>
        <th width=20%>总价</th>
      </tr>
      <tr>
        <td>章鱼烧</td>
        <td>￥10</td>
        <td>1</td>
        <td>￥10</td>
      </tr>
      <tr>
        <td>烤玉米</td>
        <td>￥8</td>
        <td>2</td>
        <td>￥16</td>
      </tr>
      <tr>
        <td>鸡排</td>
        <td>￥10</td>
        <td>1</td>
        <td>￥10</td>
      </tr>
      <tr>
        <td>热珍珠奶茶</td>
        <td>￥15</td>
        <td>1</td>
        <td>￥15</td>
      </tr>   
      <tr style="background:#cccccc;">
        <td>合计</td>
        <td colspan="3">￥51</tr>
      </tr>
    </table>
</section>
  <!--侧边栏-->
<aside id="part4">
    <h3>注册</h3>
    <p>新用户请注册，并按照提示完成填写资料</p>
    <form action="#" method="post">
      <div>
      <lable>请输入邮箱地址： </lable>
        <input id="email" type="email" placeholder="请输入您的邮箱">
      </div>
    <p>请按照邮箱格式填写：@***.com</p>
      <div id="password-box">
      <lable>请输入密码： </lable><input id="password" type="password" placeholder="请输入您的密码"> <br /><br />
      </div>
      <div>
      <lable>请重复输入密码： </lable><input id="password" type="lablesword" placeholder="请再次输入您的密码">
      </div>
    <p>密码请为6-16位英文数字</p>
      <div id="sex1">
      <lable>性别：</lable>
        <input type="radio" name="sex" checked>男 <input type="radio" name="sex">女  <br /><br />
      </div>
      <div>
      <lable>城市：</lable>
        <select id="place">
        <option>北京</option>
        <option>广州</option>
        <option>东莞</option>
        </select> <br /><br />
      </div>
      <div>
      <lable id="hobby/hobbies">爱好：</lable>
        <input type="checkbox">运动 
        <input type="checkbox">艺术 
        <input type="checkbox">科学 <br /><br />
      </div>
      <div>
      <lable>个人描述：</lable>
        <textarea id="personal description" placeholder="输入您的个人描述"></textarea><br /><br />
      </div>
        <input id="submit" type="submit" value="确认提交">
    </form>
</aside>
  <!--页脚-->
<footer><p>版权所有&copy;xian
              <script type="text/javascript">
               document.write(new Date().getFullYear());
              </script>
          </p>
</footer>
```

### css

```css
<style type="text/css">
    html
    {
      background:#cdcdcd;
    }
    nav li
    {
      float:left;
      padding-right:45px;
      font-size:12px;
    }
    nav ul
    {
      position:absolute;
      top:5px;
      right:0px;
    }
    nav li a:link{color:white;text-decoration:none;}
    nav li a:hover,nav li a:visited{color:#bbbbbb;}
    h1
    {
      position:relative;
      top:-10px;
      left:25px;
      color:#cdcdcd;
    }
    h4
    {
      color:gray;
    }
    p
    {
      font-size:17px;
    }
    h4+p
    {
      color:gray;
      font-size:10px;
    }
    header
    {
      background:rgba(0,0,0,0.85);
      width:100%;
      height:65px;
      position:absolute;
      top:0px;
      right:3px;
    }
    #part1
    {
      background:white;
      position:relative;
      top:70px;
      margin:18px;
      padding:25px 20px 27px 20px;
      box-shadow:5px 5px 6px gray;
    }
    .text-indent
    {
      text-indent:2em;
    }
    #part1 img
    {
      margin:10px 20px 20px 20px;
      box-shadow:4px 4px 5px gray;
    }
    #hf
    {
      background:white;
      margin:18px;
      padding:25px 20px 60px 20px;
      box-shadow:5px 5px 6px gray;
      position:relative;
      top:80px;
    }
    #hf li
    {
      float:left;
      padding-right:45px;
      font-size:17px;
    }
    #hf img
    {
      width:250px;
    }
    #part2 
    {
      background:white;
      margin:18px;
      padding:25px 20px 60px 20px;
      box-shadow:5px 5px 6px gray;  
      position:relative;
      top:90px;
    }
    #part2 div
    {
      border:1px solid #dddddd;
      box-shadow:0px 0px 10px #007700;
      width:330px;
      padding:10px 25px 25px 25px;
      margin-top:30px;
      text-align:center;
    }
    #part2 p
    {
        font-size:20px;
    }
    #part3
    {
      background:white;
      margin:18px;
      padding:25px 20px 60px 20px;
      box-shadow:5px 5px 6px gray;  
      position:relative;
      top:100px;
    }
    #part3 table
    {
      border-right:1px solid gray;
      border-bottom:1px solid gray;
      text-align:center;
    } 
    #part3 table th,td
    {
      border-left:1px solid gray;border-top:1px solid gray;
    } 
    #part4
    {
      background:white;
      margin:18px;
      padding:25px 20px 35px 20px;
      box-shadow:5px 5px 6px gray;  
      position:relative;
      top:105px;
    }
    #part4 div
    {
      display:inline;
    }
    #part4 lable
    {
      margin-left:300px;
      text-align:right;
      width:240x;
      height:35px;
    }
    #part4 div+p
    {
      font-size:10px;
      color:gray;
      margin-left:433px;
    }
    #password-box
    {
      margin-left:30px;
    }
    #sex1,#sex1+div,#sex1+div+div
    {
      margin-left:80px;
    }
    #sex1+div+div+div
    {
      margin-left:50px;
      position:relative;
      top:-70px;
    }
    #part4 textarea
    {
      width:500px;
      height:80px;
      position:relative;
      top:70px;
    }
    #submit
    {
      width:100%;
      height:37px;
      border:1px solid #3434ff;
      border-radius:6px;
      background:#3434ff;
      color:white;
      font-size:15px;
    }
    footer
    {
      background:rgba(0,0,0,0.85);
      width:100%;
      height:65px;
      margin:0px;
      padding:0px;
      position:relative;
      top:108px;
      left:-8px;
      width:1346px;
    }
    footer p
    {
      color:white;
      font-size:13px;
      position:relative;
      padding:20px 45%;
    }   
</style>
```

# Notes
+ [RUNOOB.COM(CSS3)](http://www.runoob.com/css3/css3-tutorial.html)