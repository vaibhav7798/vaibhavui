/*
we can define a var in js in 3 ways: 1]let 2]var 3]const

syntax:
      let varname   --->declaraction
        OR 
        let varname=value;   --->initilazation

        var varname
        OR
        var varname=value;

        const varname
        OR
        const varname=value;

*/

let a; //declaration
a=20;//defination

let favFruit="mango";
console.log(favFruit);
console.log(a);

/*
b=50; //hosting with let keyword is not pissible
let b;
console.log(b);
*/

var favCar="Swift";
console.log(favCar);
var favCar="BMW";
console.log(favCar);


/*
NOTE:
 1]redeclaration with let keyword is not possible
 2]redeclaration with var keyword is possible
3]redeclaration with const keyword is not possible
 
 4]hosting with let keyword is not pissible
 5]hosting with var keyword is possible
 6]hosting with const keyword is not possible
 */

mobNum=98999999999; //hosting with var keyword is possible here
var mobNum;
console.log(mobNum);

const fName="vaibhav";
console.log(fName);
//fName="kabade";  reassignmenet of const var is not possible
console.log(fName);

//const fName="pune";redeclaration with const keyword is not possible

/*
lName="pawaer";   //hosting with const keyword is not possible here
const lName;
*/