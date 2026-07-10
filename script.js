function showtime()
   {
   var dt = new Date();
   var h = dt.getHours();
   var m = dt.getMinutes();
   var s = dt.getSeconds();
   
   var d = dt.getDate();
   var mm = dt.getMonth();
   var y = dt.getFullYear();
   mm++;
   
   var day= dt.getDay();
   var dayname="";
   if(day==0){
   dayname="Sunday";
   }
   else if(day==1)
   {
   dayname="Monday";
   }
   else if(day==2)
   {
   dayname="Tuesday";
   }
   else if(day==3)
   {
   dayname="Wednesday";
   }
   else if(day==4)
   {
   dayname="Thursday";
   }
   else if(day==5)
   {
   dayname="Friday";
   }
   else if(day==6)
   {
   dayname="Saturday";
   }
   
   var z= "AM";
   if(h>12){
     z="PM";
	h= h-12;
	}
   var time = twodigit(h)+":"+twodigit(m)+":"+twodigit(s)+""+z;
   document.getElementById("h1").innerHTML=time;
   
   var date =  dayname+","+twodigit(d)+"-"+twodigit(mm)+"-"+y;
   document.getElementById("h3").innerHTML =date;
   
   setTimeout(showtime,1000);
   }
   function twodigit(x)
   {
   if(x<10)
   {
    return "0"+x;
	}
	else
	{
	return x;
	}
	}