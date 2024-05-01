// Q no 133
const person = {
  name:"Safdar",
  age:20,
  city:"Karachi",
};
const jsonString =JSON.stringify(person)
console.log(jsonString);

//  Q no 134

const jsonString1 ={"name":"Safdar","age":20,"city":"Karachi"};

const person1 =JSON.parse(jsonString);

console.log(person1);

//  Q no 135

const person2 = {
    name:"Safdar",
    age:20,
    city:"Karachi",
  };
  
const jsonString2 =JSON.stringify(person2,null,2);

console.log(jsonString);
