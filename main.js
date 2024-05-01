// Q no 133
var person = {
    name: "Safdar",
    age: 20,
    city: "Karachi",
};
var jsonString = JSON.stringify(person);
console.log(jsonString);
//  Q no 134
var jsonString1 = { "name": "Safdar", "age": 20, "city": "Karachi" };
var person1 = JSON.parse(jsonString);
console.log(person1);
//  Q no 135
var person2 = {
    name: "Safdar",
    age: 20,
    city: "Karachi",
};
var jsonString2 = JSON.stringify(person2, null, 2);
console.log(jsonString);
