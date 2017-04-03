//task 4
//左侧入
function leftIn4()
{
  var inputNum=document.getElementById("input4").value;
  if(isNaN(inputNum)||inputNum==""||inputNum<10||inputNum>100)
    {
      alert("请输入 10-100 的数字！！");
    }
  else
    {
      if(list4.childNodes.length>60)
        {
          alert("序列中的数字个数已大于60（>60），无法继续添加！");
        }
      else
        {
          createLeftLi4(inputNum);
        }
    }
}
function createLeftLi4(num){
  var list4=document.getElementById("list4");
  var li= document.createElement("li");
  var div= document.createElement("div");
  div.style.height="100px";
  li.innerHTML=num;
  li.style.height=num+"px";
  div.appendChild(li);
  list4.insertBefore(div,list4.childNodes[0]);
}
//右侧入
function rightIn4()
{
  var inputNum=document.getElementById("input4").value;
  if(isNaN(inputNum)||inputNum==""||inputNum<10||inputNum>100)
    {
      alert("请输入 10-100 的数字！！");
    }
  else
    {
      if(list4.childNodes.length>60)
        {
          alert("序列中的数字个数已大于60（>60），无法继续添加！");
        }
      else
        {
          createRightLi4(inputNum);
        }
    }
}
function createRightLi4(num){
  var list4=document.getElementById("list4");
  var li= document.createElement("li");
  var div= document.createElement("div");
  div.style.height="100px";
  li.innerHTML=num;
  li.style.height=num+"px";
  div.appendChild(li);
  list4.appendChild(div);
}
function leftOut4()
{
  var list4=document.getElementById("list4");
  var left1=confirm("确定要移除左边第一个数字："+list4.firstChild.firstChild.innerHTML+" "+"吗？");
  if(left1)
    {
      list4.removeChild(list4.firstChild);
    }
}
function rightOut4()
{
  var list4=document.getElementById("list4");
  var right1=confirm("确定要移除右边第一个数字："+list4.lastChild.firstChild.innerHTML+" "+"吗？");
  if(right1)
    {
      list4.removeChild(list4.lastChild);
    }
}
//排序
function paixu5()
{
  var list4=document.getElementById("list4");
  for(var i=0;i<list4.childNodes.length-1;i++)
  {
    for(var j=i+1;j<list4.childNodes.length;j++)
     {
        if(list4.childNodes[i].childNodes[0].innerHTML<list4.childNodes[j].childNodes[0].innerHTML)
       {
          var temp=list4.childNodes[j].innerHTML;
          list4.childNodes[j].innerHTML=list4.childNodes[i].innerHTML;
          list4.childNodes[i].innerHTML=temp;
       }
      }
 }
}
