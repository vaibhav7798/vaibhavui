/*
condictional statements are:
 1]if 
 2]if else
 3]if else if
 4]switch
 */

 var a=50;

 if(a<30) //if 
 {
  console.log("number is greater");
 }
 else
 {
    console.log("number is smaller");
 }

  var number=50;

 if(number==30)//else if
 {console.log("number is equal to 30");}
 else if(number==25)
 {console.log("number is equal to 25");}
 else if(number==50)
 {console.log("number is equal to 50");}
 else
 {console.log("number is equal to particulor number");}


 var str="vaibhav";

 switch(str)
 {
  case "rahul":
    console.log(str);
    break;
    
   case "sachin":
      console.log(str);
      break;

   case "pawan":
      console.log(str);
      break;
      
   case "vaibhav":
      console.log("case matched.."+str);
      break;
      
   default:
      console.log("default");
      break;   
 }