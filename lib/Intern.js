// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email, "intern")
        this.school = school;
    }
    getSchool() {
        console.log("---> this is where the getSchool inquirer goes");
    }
}

const newIntern = new Intern("Penda", 1, "penda@stephonautery.com", "employee");

newIntern.getName();

newIntern.getId();

newIntern.getEmail();

newIntern.getRole();


module.exports = Intern;