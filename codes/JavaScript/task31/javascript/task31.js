window.onload=function(){//onload

	/*var name1=document.getElementById("name1"),
			btn1=document.getElementById("btn1"),
			one=document.getElementById("one"),
		  icon1=document.getElementById("icon1"),
		  p11=document.getElementById("p11")*/

  //btn1的正则表达式
	var reg1=/[0-9a-z_A-Z_]{4,}/g,//英文名字
			reg2=/[\u4e00-\u9fa5]{2,}/g;//中文名字

	//btn2的正则表达式
	var reg3=/^(\w)+@(\w)+(\.\w+)$/g;//邮箱

	//btn3的正则表达式
	var reg4=/^((\d){4})(\-)((\d){1,2})(\-)((\d){1,2})$/g;//日期

	//检测名字
	btn1.onclick=function(){
		if(name1.value.match(reg1)||name1.value.match(reg2))//匹配中文或英文
	    {
	     	trueDis(icon1,one,name1,p11);
	    }
	  else
		  {
		  	errorDis("名字为4-16个字符",p11,name1,one,icon1);
		  }
	}

	//检测邮箱
	btn2.onclick=function(){
		if(email1.value.match(reg3))//匹配邮箱格式
	    {
	     	trueDis(icon2,two,email1,p21);
	    }
	  else
		  {
		  	errorDis("请输入正确的邮箱地址（@xx.xxx）",p21,email1,two,icon2);
		  }
	}

	//检测日期
	btn3.onclick=function(){
		if(date1.value.match(reg4))//匹配日期格式
	    {
	     	trueDis(icon3,three,date1,p31);
	    }
	  else
		  {
		  	errorDis("请检查日期格式xxxx-xx-xx",p31,date1,three,icon3);
		  }
	}

	//填写错误时显示
	function errorDis(text,_p1,_name,_num,_icon){
		var p1=document.createElement("p");//创建一个p
  	p1.innerHTML=text;
  	p1.style.color="red";
  	_p1.style.display="none";
  	if(_num.lastChild.id!=_p1.id)//防止显示多个错误提示
	    {
	    	_num.removeChild(_num.lastChild);
	    }
  	_name.style.border="1px solid red";
  	_num.appendChild(p1);
  	if(_icon.childNodes.length!=0)
	    {
	    	_icon.removeChild(_icon.lastChild);//防止移除存在的true样式
	    }
	}

	//填写正确时显示
	function trueDis(_icon,_num,_name,_p1){
		var img1=document.createElement("img");//true样式
    img1.src="img/true.png";
    img1.style.width="40px";
	    if(_icon.childNodes.length!=0)
	    {
	    	_icon.removeChild(_icon.lastChild);//防止产生多个true样式
	    }
    _icon.appendChild(img1);
    if(_num.lastChild.id!=_p1.id)
	    {
	    	_num.removeChild(_num.lastChild);//移除错误提示
	    }
    _p1.style.display="block";//正确提示
    _p1.style.color="green";
    _p1.innerHTML="输入正确";
    _name.style.border="1px solid green";
	}

}//onload
