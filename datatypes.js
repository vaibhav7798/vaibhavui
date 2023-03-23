//Datatypes in javascript:

//1]primitive data types 2]non-primitive data types

let myName="vaibhav";
console.log(myName);

let myNameList=[];//empty array

let myNameList1=["vaibhav","sanjay","kabade",10,20,fun()];

function fun()
{}

console.log(myNameList1);//display array list
console.log(myNameList1[2]);//kabade
console.log(myNameList1[10]);//undefined
console.log(myNameList1.length);//length of aaray count

//let student={}//empty object

let student={
    name:"vaibhav",
    age:28,
    address:"pune"
}

console.log(student);
console.log(student.name);

//let emp=[{},{},{}];empty array of object
//aaray of object
let emp=[{name:"vishal",age:20},
         {name:"pawan",age:11},
         {name:"kalyan",age:44}];
console.log(emp);
console.log(emp[1]);
console.log(emp[1].name);

//object of array
let objArr={"vaibhav":
            [{"vaibhav":40}],
            "rahul":
            [{"rahul":41}]};
console.log(objArr.vaibhav[0].vaibhav);

//array of aaray
let stateCap=[["mh","mumbai"],["kt","bengluru"],["mp","bhopal"]];
console.log(stateCap);
console.log(stateCap[0][1]);


//datatypes in javascript

let car="bmw";
console.log(typeof(car));
let car1=21;
console.log(typeof(car1));
let car2=21.22;
console.log(typeof(car2));
let car3=true;
console.log(typeof(car3));
let car4=null;
console.log(typeof(car4));
let car5={};
console.log(typeof(car5));
let car6=[];
console.log(typeof(car6));
let car7;
console.log(typeof(car7));

/*
datatypes:
 
   String
   Number
   Boolean
   Null
   Undefined
*/


