//将对应的歌曲src，图片，歌名，歌手放进数组中，用一个index即可获取相对应的信息
var songsource=["song/hetuhuyan.mp3","song/dongliqianniankongcheng.mp3","song/hetubuliangren.mp3","song/HITAcaiwei.mp3","song/HITAmeijianxue.mp3"];
var arrsongimg=["style/img/huyan.jpg","style/img/qianniankongcheng.jpg","style/img/buliangren.jpg","style/img/caiwei.jpg","style/img/meijianxue.jpg"];
var arrsongname=["狐言","千年空城","不良人","采薇","眉间雪"];
var arrsongsinger=["河图","东篱","河图","HITA","HITA"];
//定义songnum，喜爱歌曲的数组，用flag判断播放模式
var songnum=0,lovelist=[],flag=0;

//暂停按钮点击后，出现播放按钮
micpause.onclick=function(){
	timerange.play();//控制音频播放
	micplay.style.display="block";
	micpause.style.display="none";
}

//播放按钮点击后，出现暂停按钮
micplay.onclick=function(){
	timerange.pause();//控制音频暂停
	micplay.style.display="none";
	micpause.style.display="block";
}

//每隔一秒检查是否结束，这是检测时间显示
var end=setInterval(function(){
	if((timerange.ended&&flag==0))//结束后且为顺序模式，则按顺序继续下一首
	{
		songnum++;
		nextsong();//调用下一首歌函数
		link1.innerHTML=" ";//删除下载链接
	}
	else if((timerange.ended&&flag==1))//结束后且为随机模式，则按随机继续下一首
	{
	  link1.innerHTML=" ";//删除下载链接
	  //若随机获取到的songnum与原来的相同，则播放下一首
	  if(Math.floor(Math.random()*arrsongsinger.length)!==songnum)
	  {
	  	songnum=Math.floor(Math.random()*arrsongsinger.length);//获取0-有多少首歌的随机数
	  }
	  else
	  {
	  	songnum+=1
	  }
	  nextsong();//调用下一首歌函数
	}
	else if((timerange.ended&&flag==2))//结束后且为单曲模式，则不断循环
	{
		link1.innerHTML=" ";
		//自动单曲循环
	}
	//获取当前时间
	var minute1=parseInt(Math.round(timerange.currentTime)/60);//获取分钟
	var second1=parseInt(Math.round(timerange.currentTime)%60);//获取秒
	if(second1<10)//秒的显示
	{
		timego.innerHTML=minute1+":0"+second1;
	}
	else
	{
		timego.innerHTML=minute1+":"+second1;
	}
	//获取总时间
	var minute2=parseInt(Math.round(timerange.duration)/60);//获取分钟
	var second2=parseInt(Math.round(timerange.duration)%60);//获取秒
	if(second2<10)
	{
		timeall.innerHTML=minute2+":0"+second2;
	}
	else
	{
		timeall.innerHTML=minute2+":"+second2;
	}
},1000);

//nextmic点击则songnum++
nextmic.onclick=function(){
	link1.innerHTML=" ";
	miclovefull.style.display="none";//清除love显示
	miclove.style.display="block";
	if(flag==0)
	{
		songnum++;//顺序模式，点击下一首则下一首
	}
	else if(flag==1)
	{
		//若随机获取到的songnum与原来的相同，则播放下一首
	  if(Math.floor(Math.random()*arrsongsinger.length)!=songnum)
	  {
	  	songnum=Math.floor(Math.random()*arrsongsinger.length);//获取0-有多少首歌的随机数
	  }
	  else
	  {
	  	songnum=songnum+1;
	  }
	}
	else if(flag==2)
	{
		songnum++;//单曲模式，点击下一首则下一首
	}
	nextsong();//调用下一首函数
}

//匹配信息函数
function matchmessage(num){
	songname.innerHTML=arrsongname[num];//显示对应信息
	songsinger.innerHTML=arrsongsinger[num];
	songimg.src=arrsongimg[num];
	timerange.src=songsource[num];
}
//下一首函数
function nextsong(){
	if(songnum<arrsongsinger.length)//当songnum<总歌数
	{
		matchmessage(songnum);
	}
	if(songnum>=arrsongsinger.length)//大于则回归0
	{
		songnum=0;
		matchmessage(songnum);
	}
	//切换玩立即播放 
	micplay.style.display="block";
	micpause.style.display="none";
	timerange.play();
	//前面清除完上一首歌的lovehtn，现在显示正在播放歌曲的lovebtn
	for(var i=0;i<lovelist.length;i++)
	{
		if(lovelist[i]==timerange.src)//有则显示，无则不显示
		{
			miclove.style.display="none";
			miclovefull.style.display="block";
		}
	}
}

//love点击则变lovefull
miclove.onclick=function(){
	miclove.style.display="none";
	miclovefull.style.display="block";
	//如果lovelist里面有则不再添加
	if(lovelist.indexOf(timerange.src)===-1)
	{
		lovelist.push(timerange.src);
	}
	console.log(lovelist);
	document.getElementById("lovelist").innerHTML="";
	for(var i=0;i<lovelist.length;i++)
	{
		document.getElementById("lovelist").innerHTML+=lovelist[i]+"<br>";
	}
}

//lovefull点击，取消收藏
miclovefull.onclick=function(){
	miclovefull.style.display="none";
	miclove.style.display="block";
	for(var i=0;i<lovelist.length;i++)
	{
		if(timerange.src==lovelist[i])
		{
			lovelist.splice(lovelist.indexOf(timerange.src), 1);//删除数组里面的索引值
		}
	}
	console.log(lovelist);
	document.getElementById("lovelist").innerHTML="";
	for(var i=0;i<lovelist.length;i++)
	{
		document.getElementById("lovelist").innerHTML+=lovelist[i]+"<br>";
	}
}

//删除播放列表中的歌曲
deletemic.onclick=function(){
	//同步删除收藏列表
	for(var i=0;i<lovelist.length;i++)
	{
		if(timerange.src==lovelist[i])
		{
			lovelist.splice(lovelist.indexOf(timerange.src), 1);//删除数组里面的索引值
		}
	}
	document.getElementById("lovelist").innerHTML="";
	for(var i=0;i<lovelist.length;i++)
	{
		document.getElementById("lovelist").innerHTML+=lovelist[i]+"<br>";
	}

	songsource.splice(songnum, 1);
	arrsongsinger.splice(songnum, 1);
	arrsongname.splice(songnum, 1);
	arrsongimg.splice(songnum, 1);
	nextsong();
	document.getElementById("songnamelist").innerHTML=arrsongname;
}

//随机播放
shunxu.onclick=function(){
	flag=1;
	timerange.removeAttribute('loop');
	shunxu.style.display="none";
	suiji.style.display="block";
	danqu.style.display="none";
}

//单曲播放
suiji.onclick=function(){
	flag=2;
	timerange.setAttribute('loop',true);
	shunxu.style.display="none";
	suiji.style.display="none";
	danqu.style.display="block";
}

//顺序播放
danqu.onclick=function(){
	flag=0;
	timerange.removeAttribute('loop');
	shunxu.style.display="block";
	suiji.style.display="none";
	danqu.style.display="none";
}

download1.onclick=function(){
	link1.href=timerange.src;
	link1.innerHTML="点击链接即可下载："+timerange.src;
}

addfile1.onclick=function(){
	var addsongname=prompt("添加的歌名（不能为空）：","");
	var addsongsinger=prompt("添加的歌曲的歌手（不能为空）：","");
	var addsongimg=prompt("添加的歌曲的图片（不能为空）：","");
	var addsongsource=prompt("添加的歌曲的详细路径（不能为空）：","");
	if(addsongname==""||addsongsinger==""||addsongimg==""||addsongsource==""||addsongname==" "||addsongsinger==" "||addsongimg==" "||addsongsource==" ")
	{
		alert("输入内容不符合要求，添加失败！");
	}
	else
	{
		if(addsongname)
		{
			arrsongname.push(addsongname);
		}
		if(addsongsinger)
		{
			arrsongsinger.push(addsongsinger);
		}
		if(addsongimg)
		{
			arrsongimg.push(addsongimg);
		}
		if(addsongsource)
		{
			songsource.push(addsongsource);
		}
	}
}
