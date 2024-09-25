const fruits = [
    {
        name: 'apple',
        healthy: true,
        expensive: false
    },
    {
        name: 'grape',
        healthy: true,
        expensive: false
    },
    {
        name: 'cherry',
        healthy: true,
        expensive: true
    },
    {
        name: 'strawberry',
        healthy: true,
        expensive: true
    }
]

// for
for(let i = 0; i <= fruits.length; i++) {
    console.log(`For loop number ${i}`);
}

for(let fruit of fruits) {
    console.log(fruit.name);
}

// forEach
fruits.forEach(function(fruit) {
    console.log(`This is ${fruit.name}`);
});
// map
const nameofFruits = fruits.map(function(fruit) {
    return fruit.name;
});
console.log(nameofFruits);
// filter
const healthyFruits = fruits.filter(function(fruit) {
    return fruit.healthy === true;
});
console.log(healthyFruits);

// filter + map
const expensiveFruits = fruits.filter(function(fruit) {
    return fruit.expensive === true;
}).map(function(fruit) {
    return fruit.name;
});
console.log(expensiveFruits);

