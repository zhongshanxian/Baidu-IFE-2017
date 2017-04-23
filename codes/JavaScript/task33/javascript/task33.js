//选择是否在校，显示不同的填写项
student.onclick=function(){
	radio1.style.display="block";
	radio2.style.display="none";
  school.style.display="block";
  company.style.display="none";
}
worker.onclick=function(){
	radio2.style.display="block";
	radio1.style.display="none";
  company.style.display="block";
  school.style.display="none";
}

//选择城市，学校变化
place.onclick=function(){
	var time1=setInterval(function(){
		if(place.value==option1.value)
		{
	    if(placeschool.childNodes.length==2)
	    {
	    	placeschool.removeChild(placeschool.lastChild);
	    	placeSchool("广东工业大学","中山大学","华南理工大学","guangzhou");
	    }
	    clearInterval(time1);
		}
		if(place.value==option2.value)
		{
      if(placeschool.childNodes.length==2)
      {
      	placeschool.removeChild(placeschool.lastChild);
      	placeSchool("复旦大学","华东理工大学","上海第二军医大学","shanghai");
      }
      clearInterval(time1);
		}
		if(place.value==option3.value)
		{
	    if(placeschool.childNodes.length==2)
	    {
	    	placeschool.removeChild(placeschool.lastChild);
	    	placeSchool("南京大学","东南大学","南京理工大学","jiangsu");
	    }
	    clearInterval(time1);
		}
		if(place.value==option4.value)
		{
	    if(placeschool.childNodes.length==2)
	    {
	    	placeschool.removeChild(placeschool.lastChild);
	    	placeSchool("浙江大学","浙江理工大学","温州大学","zhejiang");
	    }
	    clearInterval(time1);
		}
		if(place.value==option5.value)
		{
	    if(placeschool.childNodes.length==2)
	    {
	    	placeschool.removeChild(placeschool.lastChild);
	    	placeSchool("哈尔滨工业大学","哈尔滨医科大学","哈尔滨理工大学","haerbin");
	    }
	    clearInterval(time1);
		}
	},200);
}

//创建城市--学校
function placeSchool(_text1,_text2,_text3,_select2Id){
	var select2=document.createElement("select");
	var option61=document.createElement("option"),
	    option62=document.createElement("option"),
	    option63=document.createElement("option");
		option61.innerHTML=_text1;
		option62.innerHTML=_text2;
		option63.innerHTML=_text3;
		select2.appendChild(option61);
		select2.appendChild(option62);
		select2.appendChild(option63);
		select2.style.width="200px";
		placeschool.appendChild(select2);
}


