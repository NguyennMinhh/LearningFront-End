console.log('Hello World');
console.error('This is an Error');
console.warn('This is an warning')

// let, const
let age = 20;
const gender = "male";

console.log("Age: " + age);
console.log("Gender: " + gender);

// String, Numbers, Boolean, null, undefined
const name = "Minh";
const thirty = 30;
const isCool = true;
const rating = 4.5;
const x = null;
const y = undefined;
let str = "This is a String";

console.log(typeof name);
console.log(typeof thirty);
console.log(typeof y);

console.log(`My name is ${name} and I'm ${age} years old`);
console.log(`This is a ${ str.substring(10,16).toUpperCase() }`);

// Arrays - variables that hold mutiple values

const numbers = new Array(1, 2, 3, 4, 5);
const random = new Array("apple", "orange", "grape", 11, "melon", true);
console.log(numbers);
console.log(random);

console.log( Array.isArray('hello') );
console.log( Array.isArray(random) );