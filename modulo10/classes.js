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

// Classes sempre devem ser escritas com letras maiusculas.

/*
class Person {
    name;
    age;

    talk(){
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`)
    }
}

const newPerson = new Person()

newPerson.name = "Carlos"
newPerson.age = 25
newPerson.talk()*/

// Podemos usar com o metodo constructor
class Person {
    constructor(name, age){
        console.log(`Hello, I'm ${name}, I'm ${age} year old`)

        this.name = name
        this.age = age
    }

    talk(){
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`)
    }
}

const newPerson = new Person("Carlos", 25)
const newPerson1 = new Person("Maria", 30)
const newPerson2 = new Person("Pedro", 18)
const newPerson3 = new Person("José", 40)

newPerson.talk()
newPerson1.talk()
newPerson2.talk()
newPerson3.talk()