const express = require("express");
const port = 8028;
const app = express();
const person1 = require("./person.js");
const person2 = require("./person.js");

person1.addPerson({ name: "Gurpreet" });
person2.addPerson({ name: "dhiman" });

console.log(person1.getPerson());
console.log(person2.getPerson());
console.log("person1 and person2 is same: " + person1 === person2);

// required singleton class
const configManager = require("./config.js");

console.log(configManager.getInstance().configObj.config);

// trying to update singleton object but it does not because its freezed
configManager.getInstance().configObj.config = {
  port: 20202,
};

console.log(configManager.getInstance().configObj.config);

app.use(express.json());

app.listen(port, () => {
  console.log("App listen on: " + port);
});
