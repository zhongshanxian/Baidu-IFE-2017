login.onclick=function(){//点击登录。打开遮罩层及登录页面
	//zhanghao.value=" ";//清空数据，或者保留账号
	key.value=" ";
	mask.style.display="block";
	close1.style.transform="scale(0,0)";//要在这里定义轨迹，才会显示动画
	window.setTimeout(function(){
      	close1.style.transform="scale(1,1)";//动画
      },100);
	close1.style.display="block";
	yes.style.display="none";
}
mask.onclick=function(){//点击遮罩层，关闭所有弹出层
	mask.style.display="none";
	close1.style.display="none";
	yes.style.display="none";
}
close2.onclick=function(){
	mask.style.display="none";
	close1.style.display="none";
	yes.style.display="none";
}
close1.onclick=function(event){
	event.stopPropagation();
}
comein.onclick=function(){
	var time1=setTimeout(function(){
		close1.style.display="none";
		yes.style.transform="scale(0,0)";//要在这里定义轨迹，才会显示动画
	  window.setTimeout(function(){
      	yes.style.transform="scale(1,1)";
      },550);
    yes.style.display="block";
	},500);
	var time2=setTimeout(function(){//3秒后自动关闭，也可点击X或者遮罩层关闭
		mask.style.display="none";
		close1.style.display="none";
		yes.style.display="none";
	},3000);
}