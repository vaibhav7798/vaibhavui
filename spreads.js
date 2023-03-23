//...spread operator:to copy all or part of an exiting array or object into another array or object.

let city=["pune","mumbai","nagpur","delhi"];
console.log(city);

//copy all
let cityCopy=[...city];
console.log(cityCopy);

//copy same part of array

let[firstItem,secondItem,...remainingItem]=city

console.log(firstItem);
console.log(secondItem);
console.log(remainingItem);

let color1=["green","orange"];
let color2=["pink","black"];
let color3=[...color1,...color2,"RED"];
console.log(color3);


let student={"name":"vishal",
             "address":"mumbai",
              "age":20,
              "job":"xyz"
}

console.log(student);

let studentCopy={...student};
console.log(studentCopy);


let student1={"name":"vishal",
             "addressofstudent":"mumbai",
              "age":20,
              "job":"xyz"
}

let student2={"name":"pawan",
             "address":"pune",
              "age":20,
              "job":"xyz"
}

let student3={...student1,...student2};
console.log(student3);




