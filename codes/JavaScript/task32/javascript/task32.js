
  var key3,flag1,flag2,flag3,flag4,flag5;//进行最后的全局验证

  //点击时出现要求 函数*****
	//点击name
	name1.onclick=function(){
		_pDis(p11);
	}
  //点击key
	key11.onclick=function(){
		_pDis(p21);
	}
	//点击key
	key12.onclick=function(){
		_pDis(p31);
	}
	//点击email
	email1.onclick=function(){
		_pDis(p41);
	}
	//点击phone
	phone1.onclick=function(){
		_pDis(p51);
	}
	//*****

	//失去焦点进行验证函数*****
	//name失去焦点时
	function nameblur(){
		testName();
	}
	//key11
	function key11blur(){
		testKey11();
	}
	//key12
	function key12blur(){
		testKey12();
	}
	//email1
	function email1blur(){
		testEmail1();
	}
	//phone1
	function phone1blur(){
		testPhone1();
	}
	//*****

	//只有被选中的输入框，下方才会显示填写要求
	function _pDis(_p1){
		_p1.style.display="block";//只显示选中的
	}

	//验证*****
	//验证名字填写是否符合格式
	function testName(){
		//name1的正则表达式
		var reg1=/[0-9a-z_A-Z_]{4,}/g,//英文名字
			  reg2=/[\u4e00-\u9fa5]{2,}/g;//中文名字
		if(name1.value.match(reg1)||name1.value.match(reg2))//匹配中文或英文
	    {
	     	trueDis(one,name1,p11,"名字输入正确");
	     	flag1=true;
	    }
	  else
		  {
		  	errorDis(one,name1,p11,"4-16个字符");
		  	flag1=false;
		  }
	}
	//验证密码
	function testKey11(){
		//key11的正则表达式
		var reg1=/(\d)+|(\w)+/g;//密码
		var str1=[];
		key3=key11.value;
		if(key11.value.match(reg1)&&key11.value.length>=8)//匹配中文或英文
	    {
	     	trueDis(two,key11,p21,"密码可用");
	     	flag2=true;
		    for(var i=0;i<key11.value.length;i++)
				{
					str1[i]="*";
				}
			  key11.value=str1.join("");
	    }
	  else
		  {
		  	errorDis(two,key11,p21,"8位（数字+密码）");
		  	flag2=false;
		  }
		console.log(key3);
	}
	//再次验证密码
	function testKey12(){
		var str2=[];
		if(key12.value==key3&&key3.length>=8)//匹配中文或英文
	    {
	     	trueDis(three,key12,p31,"密码确认成功");
	     	flag3=true;
	     	for(var i=0;i<key12.value.length;i++)
				{
					str2[i]="*";
				}
			  key12.value=str2.join("");
	    }
	  else
		  {
		  	errorDis(three,key12,p31,"密码错误");
		  	flag3=false;
		  }
	}
	//验证邮箱
	function testEmail1(){
		//email1的正则表达式
		var reg3=/^(\w)+@(\w)+(\.\w+)$/g;//邮箱
		if(email1.value.match(reg3))//匹配中文或英文
	    {
	     	trueDis(four,email1,p41,"邮箱输入正确");
	     	flag4=true;
	    }
	  else
		  {
		  	errorDis(four,email1,p41,"邮箱格式@xx.xxx");
		  	flag4=false;
		  }
	}
	//验证手机
	function testPhone1(){
		//phone1的正则表达式
		var reg4=/\d{11}/g;//邮箱
		if(phone1.value.match(reg4)&&phone1.value.length==11)//匹配中文或英文
	    {
	     	trueDis(five,phone1,p51,"手机输入正确");
	     	flag5=true;
	    }
	  else
		  {
		  	errorDis(five,phone1,p51,"手机位数不够");
		  	flag5=false;
		  }
	}
  //*****

	//提交验证整体验证有无错误 
	submit.onclick=function(){
		if(flag1&&flag2&&flag3&&flag4&&flag5)
		{
			alert("输入正确！");
		}
		else
		{
			alert("输入有误，请修改！");
		}
	}

	//输入正确时显示函数
	function trueDis(_num,_name,_p1,_text){
    if(_num.lastChild.id!=_p1.id)
	    {
	    	_num.removeChild(_num.lastChild);//移除错误提示
	    }
    _p1.style.display="block";//正确提示
    _p1.style.color="green";
    _p1.innerHTML=_text;
    _name.style.border="1px solid green";
	}

	//输入错误时显示函数
	function errorDis(_num,_name,_p1,_text){
  	_p1.innerHTML=_text;
  	_p1.style.color="red";
  	_p1.style.display="block";
  	if(_num.lastChild.id!=_p1.id)//防止显示多个错误提示
	    {
	    	_num.removeChild(_num.lastChild);
	    }
  	_name.style.border="1px solid red";
	}
