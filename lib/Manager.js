// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, 3, email, "boss");
        this.officeNumber = officeNumber;
    }
}
const newManager = new Manager("Stephon", 1, "stephon@stephonautery.com", "employee");

newManager.getName();

newManager.getId();

newManager.getEmail();

newManager.getRole("Manager");


module.exports = Manager;