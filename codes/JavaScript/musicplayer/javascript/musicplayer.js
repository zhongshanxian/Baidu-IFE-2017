var songsource=["song/hetuhuyan.mp3","song/dongliqianniankongcheng.mp3","song/hetubuliangren.mp3","song/HITAcaiwei.mp3","song/HITAmeijianxue.mp3"];
var arrsongimg=["style/img/huyan.jpg","style/img/qianniankongcheng.jpg","style/img/buliangren.jpg","style/img/caiwei.jpg","style/img/meijianxue.jpg"];
var arrsongname=["狐言","千年空城","不良人","采薇","眉间雪"];
var arrsongsinger=["河图","东篱","河图","HITA","HITA"];
var songnum=0,lovelist=[],flag=0;

console.log(shunxu.style.display);
micpause.onclick=function(){
	timerange.play();
	micplay.style.display="block";
	micpause.style.display="none";
}
micplay.onclick=function(){
	timerange.pause();
	micplay.style.display="none";
	micpause.style.display="block";
}
var end=setInterval(function(){
	if((timerange.ended&&flag==0))
	{
		songnum++;
		nextsong();
		console.log("shunxu");
	}
	else if((timerange.ended&&flag==1))
	{
	  var endsuiji=setInterval(function(){
	  	if(timerange.ended)
	  	{
	  		songnum=Math.floor(Math.random()*arrsongsinger.length);
	  		nextsong();
	  		console.log("suiji");
	  	}
	  	nextmic.onclick=function(){
				miclovefull.style.display="none";
				miclove.style.display="block";
				songnum=Math.floor(Math.random()*arrsongsinger.length);
				nextsong();
			}
	  },1000);
	}
	else if((timerange.ended&&flag==2))
	{
		timerange.setAttribute('loop',true);
		console.log("danqu");
	}
	var minute1=parseInt(Math.round(timerange.currentTime)/60);
	var second1=parseInt(Math.round(timerange.currentTime)%60);
	if(second1<10)
	{
		timego.innerHTML=minute1+":0"+second1;
	}
	else
	{
		timego.innerHTML=minute1+":"+second1;
	}
	var minute2=parseInt(Math.round(timerange.duration)/60);
	var second2=parseInt(Math.round(timerange.duration)%60);
	if(second2<10)
	{
		timeall.innerHTML=minute2+":0"+second2;
	}
	else
	{
		timeall.innerHTML=minute2+":"+second2;
	}
},1000);
console.log(timerange.src);
nextmic.onclick=function(){
	miclovefull.style.display="none";
	miclove.style.display="block";
	if(flag==0)
	{
		songnum++;
		console.log("shunxu");
	}
	else if(flag==1)
	{
		songnum=Math.floor(Math.random()*arrsongsinger.length);
	}
	else if((timerange.ended&&flag==2))
	{
		console.log("danqu");
	}
	nextsong();
}
function nextsong(){
	if(songnum<arrsongsinger.length)
	{
		songname.innerHTML=arrsongname[songnum];
		songsinger.innerHTML=arrsongsinger[songnum];
		songimg.src=arrsongimg[songnum];
		timerange.src=songsource[songnum];
	}
	if(songnum>=arrsongsinger.length)
	{
		songnum=0;
		songname.innerHTML=arrsongname[songnum];
		songsinger.innerHTML=arrsongsinger[songnum];
		songimg.src=arrsongimg[songnum];
		timerange.src=songsource[songnum];
	}
	micplay.style.display="block";
	micpause.style.display="none";
	timerange.play();
	for(var i=0;i<lovelist.length;i++)
	{
		if(lovelist[i]==timerange.src)
		{
			miclove.style.display="none";
			miclovefull.style.display="block";
		}
	}
}
miclove.onclick=function(){
	miclove.style.display="none";
	miclovefull.style.display="block";
	if(lovelist.indexOf(timerange.src)===-1)
	{
		lovelist.push(timerange.src);
	}
	
	console.log(lovelist);
}
miclovefull.onclick=function(){
	miclovefull.style.display="none";
	miclove.style.display="block";
	for(var i=0;i<lovelist.length;i++)
	{
		if(timerange.src==lovelist[i])
		{
			lovelist.splice(lovelist.indexOf(timerange.src), 1);
		}
	}
	console.log(lovelist);
}
deletemic.onclick=function(){
	songsource.splice(songnum, 1);
	arrsongsinger.splice(songnum, 1);
	arrsongname.splice(songnum, 1);
	arrsongimg.splice(songnum, 1);
	nextsong();
}

shunxu.onclick=function(){
	flag=1;
	timerange.removeAttribute('loop');
	shunxu.style.display="none";
	suiji.style.display="block";
	danqu.style.display="none";
}
suiji.onclick=function(){
	flag=2;
	timerange.setAttribute('loop',true);
	shunxu.style.display="none";
	suiji.style.display="none";
	danqu.style.display="block";
}
danqu.onclick=function(){
	flag=0;
	timerange.removeAttribute('loop');
	shunxu.style.display="block";
	suiji.style.display="none";
	danqu.style.display="none";
}
