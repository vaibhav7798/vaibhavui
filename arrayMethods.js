var arrayItem=[11,22,33,44,55,66];
console.log(arrayItem);
console.log(arrayItem.length);//find length of array

console.log(arrayItem.toString());//convert array to string

var arrayJoined=arrayItem.join("@");//add @ with every element 
console.log(arrayJoined);

/* delete item using delete keyword
var lastIndex=arrayItem.length-1;
delete arrayItem[lastIndex];
console.log(arrayItem);
*/

var popItem=arrayItem.pop();//pop method is used to delete last item follow [LIFO] 
console.log(popItem);
console.log(arrayItem);

console.log(arrayItem.shift());//Removes the first element from an array
console.log(arrayItem);

console.log(arrayItem.unshift(500));//add the first element from an array

console.log(arrayItem.push(1000));//add the last element in array

delete arrayItem[2];
console.log(arrayItem);

arrayItem[1]=1111;//(add element in particulor index)overright   

console.log("---->"+arrayItem);

console.log(arrayItem.splice(1,0,888,999));//first parameter is which position ele. will add
                                           //and second parameter is how many element i want to delete
console.log(arrayItem);

//console.log(arrayItem.splice(5,2)); first para is which position and second is how many element i want to delete

var arr1=[10,20,30];
var arr2=[80,90,100];
console.log(arr2.concat(arr1));//appending 2 array using concat method

console.log(arr2.slice(1));

console.log(arr1.reverse());//reverse element of the array

console.log(arrayItem.sort());

var color=["white","blue",'yellow']//alphabet wise sort
console.log(color.sort());