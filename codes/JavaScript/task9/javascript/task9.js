//增加了一个span节点，所以建立数组内容是用了另一个方法
//前序遍历
	function preOrder(node,arr){
		if(node!=null)
		{
			arr.push(node);
			//传入一个空数组，在数组里面按前序遍历的数序push进去，后面进行改变样式
			for(var i=0;i<node.childNodes.length;i++)
			{
				if(node.childNodes[i].nodeName.toLowerCase()=="div")//找出元素名为div的节点，避开span节点
				{
					preOrder(node.childNodes[i],arr);
				  //preOrder(node.nextElementSibling,arr);
				}
			}
			//nextElementSibling,返回当前元素在其父元素的子元素节点中的后一个元素节点,如果该元素已经是最后一个元素节点,则返回null,该属性是只读的.
			//firstElementChild，第一个元素子节点，避开空节点
			//preOrder(node.lastElementChild,arr);
		}
	}
	
//中序遍历
	function inOrder(node,arr){
		if(node!=null)
		{
			for(var i=0;i<node.childNodes.length;i++)
			{
				if(node.childNodes[i].nodeName.toLowerCase()=="div")
				{
					if(node.firstChild.innerHTML=="1")//中序要把root节点放中间
					{
						arr.push(node);//这步会在数组中添加三个root节点，索引分别为0，2，还有中间
					}
					preOrder(node.childNodes[i],arr);
				  //preOrder(node.nextElementSibling,arr);
				}
			}
			//preOrder(node.nextElementSibling,arr);
			//preOrder(node.lastElementChild,arr);
		}
		arr.shift();arr.shift();arr.shift();//去掉多余的root节点0，2
		arr.unshift(node.childNodes[2]);//把上一步去掉的two1加进来
	}

//后续遍历
	function postOrder(node,arr){
		if(node!=null)
		{
			for(var i=0;i<node.childNodes.length;i++)
			{
				if(node.childNodes[i].nodeName.toLowerCase()=="div")
				{
					preOrder(node.childNodes[i],arr);
				  //preOrder(node.nextElementSibling,arr);
				}
			}
			//preOrder(node.lastElementChild,arr);
			arr.push(node);//根节点在最后
		}
	}

//改变样式
	function changeStyle(el){
		var divNodeArr=document.getElementsByTagName("div");//获取需要用到的节点
		for(var i=0;i<divNodeArr.length;i++)
		{
			divNodeArr[i].style.backgroundColor="#fff";//一开始都为白色
			divNodeArr[i].style.color="black";
		}
		el.style.backgroundColor="#d45d5c";//遍历到的某个节点显示不同颜色
		el.style.color="white";
	}

//遍历间隔
	function animation(arr,i){
		var delay=setInterval(function(){
			//若用for循环15个节点显示样式的话，不能间隔发生，会一下子全部显示样式，与预期不符合
			//通过setInterval可以间隔一段时间显示节点样式
			if(i>arr.length-1)//i超过14则停止循环，且通过一个语句将左后显示的arr[14]变回白色
			{
         arr[arr.length-1].style.backgroundColor="#fff";//需要执行这步把arr[14]的颜色关闭
				 arr[arr.length-1].style.color="black";clearInterval(delay);
				 if(search1.value!="")
				 {
				 	alert("找不到输入的元素内容！！");
				 }
				 //return ;
			}
			else
			{
				changeStyle(arr[i]);//其余显示样式
				if(arr[i].firstChild.innerHTML==search1.value)
				{
         	alert("已经找到相对应的节点！！");
         	clearInterval(delay);
				}
			}
			++i;
		},800);//间隔0.8s
	}

//绑定按钮
	function btn(root,fn){//点击按钮后执行遍历，fn为三种遍历算法中的其中一种
		var i=0,arr=[];
		fn(root,arr);
		animation(arr,i);//根据返回来的arr,animation执行间隔显示
	}

//具体按钮事件
 	var root=document.getElementById("one");
  var search1=document.getElementById("search1");
	var allDiv=document.getElementsByTagName("div");
	console.log(allDiv.length);
	var header=document.getElementById("header");//设置父容器，将其里面的后代div设为event.target
				  header.addEventListener("click",function(){//将指定的监听器注册到 EventTarget 上，当该对象触
				                              //发指定的事件时，指定的回调函数就会被执行。
				    if(event.target.nodeName.toLowerCase()=="div")//将节点名小写，target 事件属性可返回事件的
				                                   //目标节点（触发该事件的节点）
				      {
				       	
				       	for(var i=0;i<allDiv.length;i++)
				       	{
				       		allDiv[i].style.backgroundColor="white";//只显示被点击的，之前点击的还原
				       		allDiv[i].style.color="black";
				       	}
				       	event.target.style.backgroundColor="#d45d5c";
				       	event.target.style.color="white";
				       	var event1=event.target;//将event.target保存在另一个地方，后面点击delete1时，event.target会变为button
				       	
				       	//删除事件
				       	delete1.onclick=function(){
							 		var de=confirm("您确定要删除："+event1.firstChild.innerHTML+" "+"吗？");
							    if(de)
							      {
							        removeElement(event1);//以为前面为了放置li，新建了一个父节点div，所以最好删除的是li的父节点
							      }
							 	};

							 	//增加节点
							 	add1.onclick=function(){
							 		var addDiv=document.createElement("div");
							 		var addSpan=document.createElement("span");
							 		addSpan.innerHTML=search1.value;
							 		addDiv.appendChild(addSpan);
							 		addDiv.style.backgroundColor="white";
							 		addDiv.style.color="black";
							 		event1.appendChild(addDiv);
							 	};
				      }
				  });

//移除后代节点
function removeElement(_element){
	var _parentElement = _element.parentNode;
	if(_parentElement){
	      _parentElement.removeChild(_element);
	}
}

//清除所有效果
clear.onclick=function(){
	var allDiv=document.getElementsByTagName("div");
	for(var i=0;i<allDiv.length;i++)
   	{
   		allDiv[i].style.backgroundColor="white";
   		allDiv[i].style.color="black";
   		console.log("a");
   	}
} 

//前序按钮
	function qianxu(){
		btn(root,preOrder);
	}
//中序按钮
	function zhongxu(){
		btn(root,inOrder);
	}
//后序按钮
	function houxu(){
		btn(root,postOrder);
	}

