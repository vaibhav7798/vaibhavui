var name="i am a vaibhav sanjay kabade";
//document.write(name.length);
console.log(name.length);

var n="vaibhav \n kabade";// \n used for new line
console.log(n);

var city="pune,mumbai,nagpur,nashik";
console.log(city.slice(5,10));//start @LEFT TO RIGHT IN case +ve getting string with exctracted(cut) part

console.log(city.slice(-2,6));//getting empty string
console.log(city.slice(2,-6));//output:ne,mumbai,nagpur,
console.log(city.slice(-6,-2));//nash start RIGHT TO LEFT IN case -ve
console.log(city.slice(5));

console.log(city.substring(0,3));
console.log(city.substring(-2,10));//substrig methods as like slice but one diffrence is 
                                  //internnaly negative value will consider as ZERO (0).
console.log(city.substr(0,3));//substr methods as like slice


let city1="swapnil sanjay kabade sanjay";
console.log(city1);
let res=city1.replace("swapnil","sonu");
console.log(res);
console.log(city1.replace(/sanjay/g,"sanju"));

var lastName="kabade";
console.log(lastName.toUpperCase());

var firstName="VAIBHAV";
console.log(firstName.toLowerCase());

//concatination
let fname="vaibhav";
let lname="kabade";
let fullName=fname+lname;
console.log(fullName);

let fullName1=fname+" "+lname;
console.log(fullName1);

console.log(fname.concat(lname));

console.log(fname.charAt(8));//return empty string
console.log(fname[8]);//return undefined

console.log(fname.indexOf("b"));//in case not matched any character then return -1 value
console.log(fname.indexOf("v"));//in case not matched any character then return -1 value
console.log(fname.lastIndexOf("v"));//in case not matched any character then return -1 value
console.log(fname.search("h"));//in case not matched any character then return -1 value


let c="     chalisgaon     ";
console.log(c.trim());
//console.log(c.trimStart());
//console.log(c.trimEnd());