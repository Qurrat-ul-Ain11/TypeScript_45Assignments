//Equality with strings
let mango = "mango";

console.log(mango == "mango")     //equality test

console.log(mango == "Mango")     //inequality test

console.log(mango != "Mango")     //equality test

console.log(mango != "mango")     //inequality test

//Using the lower case function
console.log("Apple".toLowerCase()=="apple");
console.log("Apple".toLowerCase()=="Apple");

//Numericals tests
let num1 = 10;
let num2 = 18
//greater than or equal to
console.log(num1 >= num2);    
console.log(num2 >= 20);
console.log(num2 >= num1);
console.log(num1 >= 3);

//less than or equal to
console.log(num1 <= num2);  
console.log(num1 <= 2);
console.log(num2 <= num1);
console.log(num2 <= 25);

//equals to
console.log(num1 == num2);
console.log(num1 != num2);
console.log(num2 == 18);
console.log(num1 != 20);

//and , or operators

console.log(num1 != num2 &&  num2 < 50);
console.log(num1 == 12 && num1 < 20 && num2 == 18)

console.log(num2 > 28 || num1 == 5)
console.log(num1 < 20 || num1 == num2 || num1 < 2);

//Test whether an item is in the array or not
let fruits = ["apple", "mango", "banana", "lychee"];
console.log(fruits.includes("apple"));

console.log(!fruits.includes("tomato"));
console.log(fruits.includes("tomato"));