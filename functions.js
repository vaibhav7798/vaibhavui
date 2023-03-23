//Function

syntax:
function fun_name(parameters)
{
}

function myFirst()
{
    console.log("i am inside a functin clock");

}

myFirst();
console.log(myFirst());

function scope()
{
    let a="pune";
    console.log(a);
 
     if(true)
     {
        let b="Mumbai";
        var c="nagpur"
        console.log(b);
        //let b="scs"; can not redeclare with let
        
        //d=40;   //hosting not allowed with let
        //let d;
        //console.log(d);

        var c="nashik";//redeclaration is alowed
        
        e=40;  //hosting allowed with var
        var e;
    }

     //console.log(b); ERROR 
     console.log(c);
     console.log(e);
}
scope();

/*
let                                    var
1]it is a block scope              1]var is a function scope
2]redeclaration not allwed         2]redeclaration allwed
3]hosting is not allowed           3]hosting is allowed
*/