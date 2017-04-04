
//task 4 函数部分
//左侧入
function leftIn4()
{
  var inputNum=document.getElementById("input4").value;
  var reg1=/(\w+|[\u4e00-\u9fa5]+)(\r|\t|,|，| |、|)/g;
  //var reg=/[\u4e00-\u9fa5]+/g;//匹配一个或多个中文字符，Unicode编码
  if(inputNum.match(reg1))
    {
      var arr1=inputNum.replace(reg1," $1").split(" ");
      arr1.shift();
      for(var z=0;z<arr1.length;z++)
        {
          createLeftLi4(arr1[z]);
        }
    }
  else if(inputNum=="")
    {
      alert("请输入内容")
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
  var reg1=/(\w+|[\u4e00-\u9fa5]+)(\r|\t|,|，|、| |)/g;
  if(inputNum.match(reg1))
    {
      var arr1=inputNum.replace(reg1," $1").split(" ");
      arr1.shift();
      for(var z=0;z<arr1.length;z++)
        {
          createRightLi4(arr1[z]);
        }
    }
  else if(inputNum=="")
    {
      alert("请输入内容")
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
function search6()
{
  var list4=document.getElementById("list4");
  var search61=document.getElementById("search61").value;
  //var reg2=/search61/g;
  for(var i=0;i<list4.childNodes.length;i++)
    {
      if(list4.childNodes[i].innerHTML.match(search61))
        {
          list4.childNodes[i].style.backgroundColor="black";
        }
    }
}
function clear62()
{
  var list4=document.getElementById("list4");
  for(var i=0;i<list4.childNodes.length;i++)
    {
       list4.childNodes[i].style.backgroundColor="#d45d5c";
    }
}
function clear6()
{
  var list4=document.getElementById("list4");
  var s=confirm("是否确定清空全部方块？");
  if(s)
    {
      for(var i=list4.childNodes.length-1;i>=0;i--)
        {
          list4.removeChild(list4.childNodes[i]);
        }
    }
}
