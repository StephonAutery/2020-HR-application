// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
class Engineer extends Employee {
    constructor(name, Id, email, role, gitHub) {
        super(name, Id, email, role);
        this.gitHub = gitHub;
    }

    gitHub(){

    }
}

module.exports = Engineer;