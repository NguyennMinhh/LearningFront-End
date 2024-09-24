const student = {
    name: 'Minh',
    age: 20,
    university: 'HUMG',
    hobbies: ['cooking', 'reading', 'sleeping'],
    address: {
        street: 'Cầu Giấy',
        district: 'Cầu Giấy',
        city: 'Hà Nội'
    }
}

console.log(student.name);

const { name, age, address: { city }} = student;

console.log(student);

// Object trong List
const toDo = [
    {
        id: 1,
        text: "take out trash",
        isCompleted: true
    },
    {
        id: 2,
        text: "clean the dishes",
        isCompleted: false
    },
    {
        id: 3,
        text: "Do homeworks",
        isCompleted: false
    }
];
console.log(toDo);

// convert these into JSON within out script, to maybe to send to a server
const todoJSON = JSON.stringify(toDo);
console.log(todoJSON);



