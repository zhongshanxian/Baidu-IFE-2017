var reg1=/^(133|153|180|181|189|130|131|132|145|155|156|185|186|134|135|136|137|138|139|147|150|151|152|157|158|159|182|183|184|187|188)\d{8}/g;
//电信，联通，移动的电话号码前三位，加后面8位数字
var reg2=/(\b\w+\b) \1/g;//正则表达式中的第一个子匹配标号无\1，所以加空格后重新出现一遍,边界
var regtext;//获取用户输入的字串及电话号码
phone.onclick=function(){//检测电话号码
	regtext=document.getElementById("regtext").value;
	if(regtext.match(reg1))
	{
		dis.innerHTML="结果：电话号码有效";
		dis.style.color="green";
	}
	else
	{
		if(regtext=="")
		{
			dis.innerHTML="结果：电话号码不能为空！";
		}
		else
		{
			dis.innerHTML="结果：电话号码无效！";
		}
		dis.style.color="red";
	}
}
word.onclick=function(){//检测相邻重复 单词
	regtext=document.getElementById("regtext").value;
	if(regtext.match(reg2))
	{
		dis.innerHTML="结果：字符串中有相邻重复单词";
		dis.style.color="green";
	}
	else
	{
		if(regtext=="")
		{
			dis.innerHTML="结果：字符串不能为空！";
		}
		else
		{
			dis.innerHTML="结果：字符串中无相邻重复单词！";
		}
		dis.style.color="red";
	}
}