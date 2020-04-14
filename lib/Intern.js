// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Intern = require("./Employee");
const newIntern = new Intern("Penda", 1, "penda@stephonautery.com", "intern");

newIntern.getName();

newIntern.getId();

newIntern.getEmail();

newIntern.getRole();


module.exports = Intern;