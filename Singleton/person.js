class Person {
  constructor() {
    this.personList = [];
  }
  addPerson(person) {
    this.personList.push(person);
  }
  getPerson() {
    return this.personList;
  }
}

const personInstance = new Person();

module.exports = personInstance;
