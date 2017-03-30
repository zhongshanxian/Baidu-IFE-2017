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

