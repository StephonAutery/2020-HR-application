// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email, "engineer");
        this.gitHub = gitHub;
    }
    getGitHub() {
        console.log("---> this where github inquirer goes.");
    }

}

const newEngineer = new Engineer("Moab", 1, "moab@stephonautery.com", "employee");

newEngineer.getName();

newEngineer.getId();

newEngineer.getEmail();

newEngineer.getRole();

module.exports = Engineer;