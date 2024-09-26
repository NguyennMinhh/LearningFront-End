// class
class Person {
    // constructor
    constructor(name, studying, birth) {
        this.name = name;
        this.studying = studying;
        this.birth = new Date(birth);
    }

    // prototype
    getBirthYear() {
        return this.birth.getFullYear();
    };
    getInfo() {
        return `Name: ${this.name} - Studying: ${this.studying} - Birth: ${this.getBirthYear()}`;
    };

};

const personA = new Person("Minh", true, "8/23/2004");

console.log(personA.getInfo());