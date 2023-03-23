/*
[abcd]=a or b or c or d
[1234]=1 or 2 or 3 or 4
[a-z]=including all alphabets means a to z
[0-4]=0 or 1 or 2 or 3 or 4 only
[0-9]=including range all numbers
[^0-4]=menas not 0 to 4:prononsaction [^] not symbol
^[0-9]=means starting of regex:prononsaction ^[] charat
[0-9]$=end of regex
*/



let city=["vaibhav","sanjay","kabade"];
console.log(city);

let cityList=[];
city.forEach(item =>
    {
        cityList.push(item)
          console.log(item);
    })

    console.log(cityList);

    city.map(item =>
        {
          if(item=="sanjay")
          {
            console.log(item
                );
          }

    })