//参考王京的代码

//定义一个json,把需要的正则放进去
var reg = {
	enter: /\n/gm,//匹配换行，多行
	header: /^[#]{1,6}\s(.*)\n/gm,//匹配多行h
	olist: /(\d\.\s(.*\n))+/g,//一次性把ol全都匹配完,因为没有m，所以不是像标题那样一个个分开
	code: /(`{3}\n)([^`]*)(\n`{3})/g,//匹配代码块
	eletem: /^\d+\.\s(.*)\n/gm,//多行匹配,将原先的整体代码分开，前面一个或多个数字
	ulist: /^(?:-|\*|\+)\s(.*)\n/gm,//匹配li
	quote: /(?:\n|^)[>]\s((?:.+\n)+)/g,//匹配blockquote
	img: /!\[(.+)\]\((.*)\)\n/gm,//匹配图片
	a: /\[(.+)\]\((.*)\)\n/gm,//匹配链接
	hr: /^\*{3,}\n/gm,//匹配分割线
	em: /\*(.*)\*/gm,//匹配斜体
	strong: /\*{2}(.*)\*{2}/gm//匹配粗体
}

function mdHeader(header){//分别转化6个不同的h
	let n = header.match(/^([#]{1,6})/)[0].length;//将header匹配前面的#，判断#的个数
	return '<h'+n+'>'+header.substr(n+1,header.length-1)+'</h'+n+'>';//利用substr截取标题部分
}

function mdOlist(olist){
	olist = olist.replace(reg.eletem, '<li>$1</li>');//多个匹配结果
	return '<ol>'+olist+'</ol>';//将li放进ol
}

var change = function(){
	text =this.value;
	text = text.replace( reg.code, '<pre>$2</pre>');
	text = text.replace( reg.header, mdHeader);//匹配了的多个h，分别执行mdHeader，每次传入的参数header为各个匹配结果
	text = text.replace( reg.olist, mdOlist);//匹配了的多个li，分别执行mdOlist，每次传入的参数olist为各个匹配结果
	text = text.replace( reg.ulist, '<li>$1</li>');//转化ul
	text = text.replace( reg.quote, '<blockquote>$1</blockquote>');//转化blockquote
	text = text.replace( reg.img," <img src=$2 alt=$1>");//转化图片
	text = text.replace( reg.a," <a href=$2>"+"$1"+"</a>");//转化链接
	text = text.replace( reg.hr,"<hr>");//转化分割线

	text = text.replace( reg.strong,"<strong>$1</strong>");//转化加粗，粗体优先转化，否则全部转化成斜体
	text = text.replace( reg.em,"<em>$1</em>");//转化斜体
	
	text = text.replace( reg.enter, '<br />');//最后转化换行符，若过早转化，则会导致有\n的正则匹配不正确
	//写入文本框
	wordtext.innerHTML = text;
}

//定义一个初始化
var initText = function(textNode){//传入节点
	textNode.value = "# Markdown在线编辑器\n" +//写入内容
					"# 一级标题\n## 二级标题\n### 三级标题\n#### 四级标题\n##### 五级标题\n###### 六级标题\n\n" +
					"> 这里是一段引用\n这里是一段引用\n\n" +
					"1. 有序列表\n2. 有序列表\n3. 有序列表\n\n" +
					"- 无序列表\n- 无序列表\n- 无序列表\n\n" +
					"```\n// 代码段\n```\n\n"+
					"![img](http://s.cn.bing.net/th?id=OJ.e0f081ry0kLzqA&w=75&h=75&pid=MSNJVFeeds)\n\n"+
					"[img](http://s.cn.bing.net/th?id=OJ.e0f081ry0kLzqA&w=75&h=75&pid=MSNJVFeeds)\n\n"+
					"**粗体**\n\n"+
					"*斜体*";
	change.call(textNode);//将该节点执行change函数
}

markdowntext.oninput = change;//实时监听markdowntext里面的内容，立刻执行change
initText( markdowntext );
//加载完页面，一开始没内容，所以oninput之后，wordtext也没显示
//然后进行初始化，初始化最后一步就是markdowntext执行change，有内容
//若修改markdowntext，则通过oninput命令执行change
