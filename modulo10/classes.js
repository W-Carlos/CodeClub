/*
    Classes 
*/

/*`
const person = {
    name: "Carlos",
    age: 25,
    talk: function() {
        console.log(`Hello, my name is ${this.name}`)
    }
}*/

class Person {
    name;
    age;

    talk(){
        console.log(`Hello, my name is ${this.name} and Im ${this.age}`)
    }

}