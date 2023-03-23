var color=["blue","red","pink","yellow","orange","green"];
console.log(color);

/*
for(statement;condiction;increment/decrement)
{
    block of code
}
*/

var newList=[];

for(let i=0;i<color.length;i++)
{
    //console.log(color[i]);    
     
    //var newList=color[i]
     //console.log(newList);

   newList.push(color[i]);
   //console.log(newList);
}
console.log(newList)

let newList1=[];
for(let i=0;i<3;i++) //static
{ 
   newList1.push(color[i]);
 
}
console.log(newList1);

let newList2=[];
for(let i=0;i<color.length;i++) //dynamic
{
  newList2.push(color[i]);
  if(i==2)
  {
   break;//jump out from the loop
  }
}
console.log(newList2);

for(let j=1;j<=10;j++)
{
   console.log(j); 
   if(j==5)
   {
    break;
   }
}