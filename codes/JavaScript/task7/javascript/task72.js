//前序遍历
	function preOrder(node,arr){
		if(node!=null)
		{
			arr.push(node);
			//传入一个空数组，在数组里面按前序遍历的数序push进去，后面进行改变样式
			preOrder(node.firstElementChild,arr);
			//firstElementChild，第一个元素子节点，避开空节点
			preOrder(node.lastElementChild,arr);
		}
	}
//中序遍历
	function inOrder(node,arr){
		if(node!=null)
		{
			preOrder(node.firstElementChild,arr);//每个节点的左分支都执行一边原函数
			//若只用arr.push(node.firstElementChild),无法做到循环效果
			arr.push(node);
			preOrder(node.lastElementChild,arr);
		}
	}
//后续遍历
	function postOrder(node,arr){
		if(node!=null)
		{
			preOrder(node.firstElementChild,arr);
			preOrder(node.lastElementChild,arr);
			arr.push(node);//根节点在最后
		}
	}
//改变样式
	function changeStyle(el){
		var divNodeArr=document.getElementsByTagName("div");//获取需要用到的节点
		for(var i=0;i<divNodeArr.length;i++)
		{
			divNodeArr[i].style.backgroundColor="#fff";//一开始都为白色
		}
		el.style.backgroundColor="#d45d5c";//遍历到的某个节点显示不同颜色
	}
//遍历间隔
	function animation(arr,i){
		var delay=setInterval(function(){
			//若用for循环15个节点显示样式的话，不能间隔发生，会一下子全部显示样式，与预期不符合
			//通过setInterval可以间隔一段时间显示节点样式
			if(i>arr.length-1)//i超过14则停止循环，且通过一个语句将左后显示的arr[14]变回白色
			{
         arr[arr.length-1].style.backgroundColor="#fff";//需要执行这步把arr[14]的颜色关闭
				 clearInterval(delay);
				 //return ;
			}
			else
			{
				changeStyle(arr[i]);//其余显示样式
			}
			++i;
		},800);//间隔0.6s
	}
//绑定按钮
	function btn(root,fn){//点击按钮后执行遍历，fn为三种遍历算法中的其中一种
		var i=0,arr=[];
		fn(root,arr);
		animation(arr,i);//根据返回来的arr,animation执行间隔显示
	}
//具体按钮事件
	var root=document.getElementById("one");
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

