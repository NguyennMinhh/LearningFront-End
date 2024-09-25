const number = 11;

// if, elseif, else
if( number > 10) {
    console.log(`Number is bigger than 10`);
}
else if( number === 10) {
    console.log(`Number is equal to 10`);
}
else {
    console.log(`Number is lesser than 10`);
}

// ternary operator : Toán tử ba ngôi
const greaterThan10 = number > 10 ? true : false;
console.log(greaterThan10);

// switch
const fruit = 'melon';

switch(fruit) {
    case 'apple':
        console.log('Apple is good');
        break;
    case 'melon':
        console.log('Now thats gome good stuff');
        break;
    case 'guava':
        console.log('Put that away');
        break;
}

// function
const x = 5;
const y = 7;
function sum(num1, num2) {
    return num1 + num2;
};
console.log( sum(x, y) );