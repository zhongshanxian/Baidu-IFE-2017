//点击登录。打开遮罩层及登录页面
login.onclick=function(){
	//zhanghao.value=" ";//清空数据，或者保留账号
	key.value=" ";
	close1.style.left="0";
	close1.style.top="0";
	mask.style.display="block";
	close1.style.transform="scale(0,0)";//要在这里定义轨迹，才会显示动画
	window.setTimeout(function(){
      	close1.style.transform="scale(1,1)";//动画
      },100);
	close1.style.display="block";
	yes.style.display="none";
}
//点击遮罩层，关闭所有弹出层
mask.onclick=function(){
	mask.style.display="none";
	close1.style.display="none";
	yes.style.display="none";
}
//点击X关闭
close2.onclick=function(){
	mask.style.display="none";
	close1.style.display="none";
	yes.style.display="none";
}
//点击登录页面，取消默认事件，增加拖动事件
close1.onclick=function(event){

	event.stopPropagation();//取消默认事件

	var ismousedown = false;
	var dialogleft,dialogtop;
	var downX,downY;
	dialogleft =close1.offsetLeft;
	dialogtop = close1.offsetTop;
	//获取按下鼠标的位置
	close1.onmousedown = function(e){
		close1.style.cursor="default";
		ismousedown = true;
		downX = e.clientX;
		downY = e.clientY;
	}
	//鼠标移动，则close1跟着移动
	close1.onmousemove = function(e){
		if(ismousedown){
		close1.style.top = e.clientY - downY +dialogtop+ "px";
		close1.style.left= e.clientX - downX +dialogleft+ "px";
		}
	}
	/*松开鼠标时要重新计算当前窗口的位置*/
	close1.onmouseup = function(){
		dialogleft = parseInt(close1.offsetLeft);
		dialogtop = parseInt(close1.offsetTop);
		ismousedown = false;
	}
}
//登录按钮点击
comein.onclick=function(){
	if(zhanghao.value!=" "&&key.value!=" ")
	{
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
	else
	{
		mask.style.display="block";
		close1.style.display="block";
		yes.style.display="none";
	}
}

 
