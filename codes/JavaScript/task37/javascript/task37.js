var chinese=document.getElementsByName("chinese1"),
		math=document.getElementsByName("math1"),
		english=document.getElementsByName("english1"),
		score=document.getElementsByName("score1");

//升序
Chinesesup.onclick=function(){
	sortup(chinese);
}
mathup.onclick=function(){
	sortup(math);
}
Englishup.onclick=function(){
	sortup(english);
}
scoreup.onclick=function(){
	sortup(score);
	console.log(score);
}

//降序
Chinesesdown.onclick=function(){
	sortdown(chinese);
}
mathdown.onclick=function(){
	sortdown(math);
}
Englishdown.onclick=function(){
	sortdown(english);
}
scoredown.onclick=function(){
	sortdown(score);
}

//升序函数
function sortup(arr1)
{
	console.log(arr1);
	for(var i=0;i<arr1.length-1;i++)
	{
		for(var j=i+1;j<arr1.length;j++)
		{
			if(parseInt(arr1[i].innerHTML)>parseInt(arr1[j].innerHTML))
			{
				var temp=arr1[i].parentNode.innerHTML;
				arr1[i].parentNode.innerHTML=arr1[j].parentNode.innerHTML;
				arr1[j].parentNode.innerHTML=temp;
			}
		}
	}
}

//降序函数
function sortdown(arr1)
{
	console.log(arr1);
	for(var i=0;i<arr1.length-1;i++)
	{
		for(var j=i+1;j<arr1.length;j++)
		{
			if(parseInt(arr1[i].innerHTML)<parseInt(arr1[j].innerHTML))
			{
				var temp=arr1[i].parentNode.innerHTML;
				arr1[i].parentNode.innerHTML=arr1[j].parentNode.innerHTML;
				arr1[j].parentNode.innerHTML=temp;
			}
		}
	}
}

//在底部增加一行
add1.onclick=function(){
	var td11=document.createElement("td"),
			td12=document.createElement("td"),
			td13=document.createElement("td"),
			td14=document.createElement("td"),
			td15=document.createElement("td"),
			tr1=document.createElement("tr");
	td11.style.width="120px";
	td11.style.height="40px";
	td11.style.borderLeft="2px solid #bbb";
	td11.style.borderTop="2px solid #bbb";
	td11.setAttribute("contenteditable",true);//添加可编辑属性

	td12.style.width="120px";
	td12.style.height="40px";
	td12.style.borderLeft="2px solid #bbb";
	td12.style.borderTop="2px solid #bbb";
	td12.setAttribute("contenteditable",true);
	td12.setAttribute("name","chinese1");

	td13.style.width="120px";
	td13.style.height="40px";
	td13.style.borderLeft="2px solid #bbb";
	td13.style.borderTop="2px solid #bbb";
	td13.setAttribute("contenteditable",true);
	td13.setAttribute("name","math1");

	td14.style.width="120px";
	td14.style.height="40px";
	td14.style.borderLeft="2px solid #bbb";
	td14.style.borderTop="2px solid #bbb";
	td14.setAttribute("contenteditable",true);
	td14.setAttribute("name","english1");

	td15.style.width="120px";
	td15.style.height="40px";
	td15.style.borderLeft="2px solid #bbb";
	td15.style.borderTop="2px solid #bbb";
	td15.setAttribute("contenteditable",true);
	td15.setAttribute("name","score1");

	tr1.style.borderLeft="2px solid #bbb";
	tr1.style.borderTop="2px solid #bbb";
	tr1.appendChild(td11);
	tr1.appendChild(td12);
	tr1.appendChild(td13);
	tr1.appendChild(td14);
	tr1.appendChild(td15);
	tbody.appendChild(tr1);
	console.log(tbody.childNodes.length);
}

//删除底部一行
delete1.onclick=function(){
	tbody.removeChild(tbody.lastElementChild);//删除最后一个元素节点，排除空文本节点
}