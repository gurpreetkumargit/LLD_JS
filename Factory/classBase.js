// Is provides an interface for creating instances of a class, with its subclass deciding which class to instantiate.

class Developer {
  constructor(params) {
    this.name = params.name;
    this.experience = params.experience;
    this.skills = params.skills;
    this.role = "SDE";
  }
}

class Tester {
  constructor(params) {
    this.name = params.name;
    this.experience = params.experience;
    this.skills = params.skills;
    this.role = "Tester";
  }
}

class Employee {
  createEmployee(role, params) {
    switch (role) {
      case "SDE":
        return new Developer(params);
      case "Tester":
        return new Tester(params);
      default:
        throw new console.error("Invalid Input");
        break;
    }
  }
}

const addEmployee = new Employee();

const newEmployee1 = addEmployee.createEmployee("SDE", {
  name: "Gurpreet",
  experience: 2,
  skills: ["UI", "Backend", "Full Stack", "DB"],
});

const newEmployee2 = addEmployee.createEmployee("Tester", {
  name: "Harsh",
  experience: 2,
  skills: ["Manual Testing"],
});

console.log("newEmployee1", newEmployee1);
console.log("newEmployee2", newEmployee2);
