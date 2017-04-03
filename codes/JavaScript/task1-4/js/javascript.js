//task 1
function getValue1()
{
  var text=document.getElementById("aqi-input").value;
  document.getElementById("aqi-display").innerText=text;  //注意span标签值的修改需要使用innerHTML input的值用value
}


//task 2
function paixu2()
{
  var aqiData = [
  ["北京", 90],
  ["上海", 50],
  ["福州", 10],
  ["广州", 50],
  ["成都", 90],
  ["西安", 100]
];
var aqiList=document.getElementById("aqi-list");
/*利用冒泡排序*/
for(var i=0;i<aqiData.length-1;i++)
  {
    for(var j=i+1;j<aqiData.length;j++)
      {
        if(aqiData[i][1]<aqiData[j][1])
        {
          var temp=aqiData[j];
          aqiData[j]=aqiData[i];
          aqiData[i]=temp;
        }
      }
  }
 /*添加li*/
for(var i=0;i<aqiData.length;i++)
  {
    if(aqiData[i][1]>=60)
      {
        var li=document.createElement("li");//创建一个li元素节点
        li.innerHTML=aqiData[i];//添加文本
        aqiList.appendChild(li);
      }
  }
}


//task 3
function paixu3()
{
var source=document.getElementById("source");
var resort=source;
var resort1=document.getElementById("resort1");//放置排序结果
var bList=document.getElementsByTagName("b");

  
for(var i=1;i<source.childNodes.length-1;i+=2)//提取<b>中的数字进行冒泡排序
  {
    for(var j=i+2;j<resort.childNodes.length;j+=2)
      {  
        if(resort.childNodes[i].childNodes[1].innerHTML<resort.childNodes[j].childNodes[1].innerHTML)
          {
            var temp=resort.childNodes[j].innerHTML;
            resort.childNodes[j].innerHTML=resort.childNodes[i].innerHTML;
            resort.childNodes[i].innerHTML=temp;
          }
      }
  }
for(var i=1;i<resort.childNodes.length;i+=2)
  {
        var li=document.createElement("li");//创建一个li元素节点
        li.innerHTML="第"+(i+1)/2+"名"+" "+resort.childNodes[i].innerHTML;//添加文本
        resort1.appendChild(li);//显示在resort列表中
  }
}

//task 4 函数部分
//左侧入
function leftIn4()
{
  var inputNum=document.getElementById("input4").value;
  if(isNaN(inputNum)||inputNum=="")
    {
      alert("请输入数字！！");
    }
  else
    {
      createLeftLi4(inputNum);
    }
}
function createLeftLi4(num){
  var list4=document.getElementById("list4");
  var li= document.createElement("li");
  li.innerHTML=num;
  list4.insertBefore(li,list4.childNodes[0]);
}
//右侧入
function rightIn4()
{
  var inputNum=document.getElementById("input4").value;
  if(isNaN(inputNum)||inputNum=="")
    {
      alert("请输入数字！！");
    }
  else
    {
      createRightLi4(inputNum);
    }
}
function createRightLi4(num){
  var list4=document.getElementById("list4");
  var li= document.createElement("li");
  li.innerHTML=num;
  list4.appendChild(li);
}
function leftOut4()
{
  var list4=document.getElementById("list4");
  var left1=confirm("确定要移除左边第一个数字："+list4.firstChild.innerHTML+" "+"吗？");
  if(left1)
    {
      list4.removeChild(list4.firstChild);
    }
}
function rightOut4()
{
  var list4=document.getElementById("list4");
  var right1=confirm("确定要移除右边第一个数字："+list4.lastChild.innerHTML+" "+"吗？");
  if(right1)
    {
      list4.removeChild(list4.lastChild);
    }
}



  


