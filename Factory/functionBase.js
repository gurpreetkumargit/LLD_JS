// Is provides an interface for creating instances of a class, with its subclass deciding which class to instantiate.

function developer(params) {
  this.name = params.name;
  this.experience = params.experience;
  this.skills = params.skills;
  this.role = "SDE";
}

function tester(params) {
  this.name = params.name;
  this.experience = params.experience;
  this.skills = params.skills;
  this.role = "Tester";
}

function employee() {}

employee.prototype.createEmployee = function (role, params) {
  switch (role) {
    case "SDE":
      return new developer(params);
    case "Tester":
      return new tester(params);
    default:
      throw new console.error("Invalid Input");
      break;
  }
};

const addEmployee = new employee();

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
