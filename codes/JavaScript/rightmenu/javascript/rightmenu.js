main.oncontextmenu=function(e){
	window.event.returnValue=false;
  var etop=e.clientY,bodyheight=document.body.clientHeight;
  var eleft=e.clientX,bodywidth=document.body.clientWidth;
  if(bodywidth-eleft<152&&bodyheight-etop>=142)
  {
  	menu.style.top=etop+"px";
    menu.style.left=eleft-152+"px";
  }
  else if(bodyheight-etop<142&&bodywidth-eleft>=152)
  {
  	menu.style.top=etop-142+"px";
    menu.style.left=eleft+"px";
  }
  else if(bodyheight-etop<142&&bodywidth-eleft<152)
  {
  	menu.style.top=etop-142+"px";
  	menu.style.left=eleft-152+"px";
  }
  else
  {
  	menu.style.top=etop+"px";
    menu.style.left=eleft+"px";
  }
  menu.style.display="block";
}
main.onclick=function(){
	menu.style.display="none";
}
/*var a1=document.getElementsByTagName("a");
a1[1].onclick=function(){
	menu.style.display="none";
}*/
