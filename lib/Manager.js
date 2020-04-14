// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// const Employee = require("./lib/Employee");
const Manager = require("./Employee");

const newManager = new Manager("Stephon", 1, "stephon@stephonautery.com", "boss");

newManager.getName();

newManager.getId();

newManager.getEmail();

newManager.getRole();


module.exports = Manager;