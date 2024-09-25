console.log('Hello World');
console.error('This is an Error');
console.warn('This is an warning')

// var, let, const
/*
- var: Biến được khai báo bằng var có phạm vi toàn cục (global scope) hoặc phạm vi hàm (function scope). 
Nếu bạn khai báo một biến var bên trong một hàm, nó chỉ có thể được truy cập trong hàm đó. 
Nếu khai báo bên ngoài hàm, nó sẽ có phạm vi toàn cục.
- var: Bạn có thể khai báo lại một biến đã được khai báo bằng var mà không gặp lỗi
        var z = 30;
        var z = 40; // Không có lỗi
        console.log(z); // 40
- var: Biến khai báo bằng var sẽ được "hoisted" (nâng lên) lên đầu phạm vi của nó, 
có nghĩa là bạn có thể sử dụng biến trước khi nó được khai báo mà không gặp lỗi (giá trị sẽ là undefined).
        console.log(b); // undefined
        var b = 70;


- let: Biến được khai báo bằng let có phạm vi khối (block scope). 
Điều này có nghĩa là biến chỉ có thể được truy cập trong khối mã mà nó được khai báo (ví dụ: trong một vòng lặp hoặc một câu lệnh điều kiện).
- let: Bạn không thể khai báo lại một biến đã được khai báo bằng let trong cùng một phạm vi. Nếu bạn cố gắng làm như vậy, bạn sẽ gặp lỗi.
        let a = 50;
        let a = 60; // Lỗi: Identifier 'a' has already been declared
- let: Biến khai báo bằng let cũng được hoisted, nhưng không thể sử dụng trước khi khai báo. 
Nếu bạn cố gắng làm như vậy, bạn sẽ gặp lỗi ReferenceError.
        console.log(c); // Lỗi: Cannot access 'c' before initialization
        let c = 80;
*/

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