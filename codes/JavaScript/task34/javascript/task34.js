var chess = document.getElementById("chess");
var context = chess.getContext("2d");//创建对象

var tangle=0;//定义旋转角度

context.strokeStyle = "#ddd";//设置线条颜色

window.onload=function(){//页面加载完成后画棋盘
	drawChessBox();
};

//画棋盘函数
var drawChessBox = function(){
	for(var i=0; i<11; i++)
		{
			context.moveTo(1+i*40, 1);//横坐标每次加30，纵坐标不变
			context.lineTo(1+i*40, 401);//终点坐标
			context.stroke();//调用划线
			context.moveTo(1, 1+i*40);//纵坐标每次加30，横坐标不变
			context.lineTo(400, 1+i*40);//终点坐标
			context.stroke();//调用划线
		}
}
searchBtn.onclick=function(){
	var searchText=document.getElementById("searchText").value;
	//连续输入同一个指令，连续一个方向旋转
	//左转指令
	if(searchText=="TUN LEF")
	{
		tangle=tangle-90;
		if(tangle==-360)
		{
			tangle=0;//若蓝边在上，则tangle为0
		}
		tan.style.transform="rotate("+tangle+"deg)";
	}
	//右转指令
	if(searchText=="TUN RAG")
	{
		tangle=tangle+90;
		if(tangle==360)
		{
			tangle=0;
		}
		tan.style.transform="rotate("+tangle+"deg)";
	}
	//后转指令
	if(searchText=="TUN BAC")
	{
		tangle=tangle+180;
		if(tangle==360||tangle==-360)
		{
			tangle=0;
		}
		tan.style.transform="rotate("+tangle+"deg)";
	}
	//直走指令
	if(searchText=="GO")
	{
		if((tangle==0)&&tan.offsetTop>=83)//规定范围，放置走出棋盘
			{
				tan.style.top=(tan.offsetTop-40)+"px";
			}
		if((tangle==270||tangle==-90)&&tan.offsetLeft>=90)//蓝边在左，规定范围，放置走出棋盘
			{
				tan.style.left=(tan.offsetLeft-40)+"px";
			}
		if((tangle==180||tangle==-180)&&tan.offsetTop<=363)//蓝边在下，规定范围，放置走出棋盘
			{
				tan.style.top=(tan.offsetTop+40)+"px";
			}
		if((tangle==90||tangle==-270)&&tan.offsetLeft<=370)//蓝边在右，规定范围，放置走出棋盘
			{
				tan.style.left=(tan.offsetLeft+40)+"px";
			}
	}
}