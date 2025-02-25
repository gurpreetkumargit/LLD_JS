// Object is an entity with properties, types and methods

const dog = {
  name: "Tommy",
  color: "Black",
  call() {
    console.log(`${this.name} is ${this.color}`);
  },
};

console.log(dog);
console.log(dog.name);
console.log(dog.color);
dog.call();

// Class is an blueprint or template to create Objects

class Animal {
  constructor(name) {
    this.name = name;
  }
  call() {
    console.log(`${this.name} Animal`);
  }
}

const dog1 = new Animal("dog");
dog1.call();
console.log(dog1.name);

// Diff ways to create Objects
// 1. Object Literal
// 2. Constructor Functions
// 3. classes
// 4. Object.create

// 1. Object Literal
const dog2 = {
  name: "Tommy",
  color: "Black",
  call() {
    console.log(`${this.name} is ${this.color}`);
  },
};

// 2. Constructor Function

function User(name, email, age) {
  this.name = name;
  this.email = email;
  this.age = age;

  this.getUserData = function () {
    console.log(`name: ${this.name}, age: ${this.age}, email: ${this.email}`);
  };
}

const newUser = new User("Preet", "Gurpreetkumarmail@gmail.com", 24);
newUser.getUserData();

// 4. Object.create
const newDog = Object.create(dog);
newDog.color = "white";
newDog.name = "TOM";
console.log(newDog);
