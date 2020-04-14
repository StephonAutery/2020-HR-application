// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Engineer = require("./Employee");

const newEngineer = new Engineer("Moab", 1, "moab@stephonautery.com", "employee");

newEngineer.getName();

newEngineer.getId();

newEngineer.getEmail();

newEngineer.getRole();






module.exports = Engineer;