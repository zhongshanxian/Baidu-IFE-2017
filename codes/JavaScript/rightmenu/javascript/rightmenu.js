main.oncontextmenu=function(e){//当点击右键时
	window.event.returnValue=false;//组织浏览器自带的右键菜单
  var etop=e.clientY,bodyheight=document.body.clientHeight;//获取显示屏高
  var eleft=e.clientX,bodywidth=document.body.clientWidth;//获取显示屏宽
  if(bodywidth-eleft<152&&bodyheight-etop>=142)//当右边不够位置，则显示在左边
  {
  	menu.style.top=etop+"px";
    menu.style.left=eleft-152+"px";
  }
  else if(bodyheight-etop<142&&bodywidth-eleft>=152)//当下面不够位置，则显示在上面
  {
  	menu.style.top=etop-142+"px";
    menu.style.left=eleft+"px";
  }
  else if(bodyheight-etop<142&&bodywidth-eleft<152)//位于右下角，右下都不够位置，显示在左上
  {
  	menu.style.top=etop-142+"px";
  	menu.style.left=eleft-152+"px";
  }
  else//其他正常显示在右下
  {
  	menu.style.top=etop+"px";
    menu.style.left=eleft+"px";
  }
  menu.style.display="block";
}
main.onclick=function(){//左点击菜单消失
	menu.style.display="none";
}
/*var a1=document.getElementsByTagName("a");
a1[1].onclick=function(){
	menu.style.display="none";
}*/
