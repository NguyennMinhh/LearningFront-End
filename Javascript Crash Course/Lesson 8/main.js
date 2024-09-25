// Constructor function
function Person(name, studying, birth) {
        this.name = name;
        this.studying = studying;
        this.birth = new Date(birth);
        this.getBirthYear = function() {
            return this.birth.getFullYear();
        }
        this.getFullInfo = function() {
            console.log(`Name: ${this.name} <br> Studying: ${this.studying} <br> Birth: ${this.birth} <br>`);
        };
};

// Instantiate Object
const person1 = new Person("Minh", true, "8/23/2004");
const person2 = new Person("Quang", false, "12/05/1997")

console.log(person1);