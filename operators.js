var a=30;
var b=a+50;
console.log("result is:"+b);

//Assignment operators
var x=80;
var y=30;
//var x=x+y;
   x+=y;
console.log(x);

//var x=x-y;
x-=y;
console.log(x);

//postfix and prefix operators (increment/decrement operators)

var p=1;
console.log(p);
console.log(p++);//postfix
console.log(p);

var f=5;
console.log(f);
console.log(f--);//postfix
console.log(f);

var t=8;
console.log(t);
console.log(++t);//prefix
console.log(t);

var r=10;
console.log(r);
console.log(--r);//prefix
console.log(r);

//logical operators

// &&-->logical AND
// ||-->logical OR
// !--->logical NOT

var number=100;
if(number>70 && number<200)
{
    console.log("hi...");
}

var number1=50;
if(number<=50 || number1>=30)
{
    console.log("ORRRR");
}

if(number != 20)
{
 console.log("Not Equal To");
}

//diffrence between =  ==  ===

var name="vaibhav";//here = assignmenet operator

if(name == "vaibhav") //here comparisation/equality operator check only value not datatypes
{
  console.log("name equal to vaibhav");
}

var num='2';
var num1=2;

if(num == num1)//here comparisation/equality operator check only value not datatypes
{
    console.log("equal to..==");
}


if(num === num1)//here comparisation/equality operator check both value and datatypes strickly
{
    console.log("equal to..===");
}


//if else

var city="Chalisgaon";

if(city==="Chalisgaon")
{
 console.log("chalisgaon");
}
else
{
    console.log("not chalisgaon");
}

//ternarry operator
city==="Chalisgaon"?console.log("ternarry OK"):console.log("ternarry not OK");;