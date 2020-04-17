// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, Id, email, role) {
        // Employee.lastId++;
        // this.id = Empolyee.lastId;
        super(name, Id, email, role);
        // this.name = name;
        // this.id = id;
        // this.email = email;
        // this.role = role;
        this.officeNumber = officeNumber;
    }
}

// const newManager = new Manager(name, id, email, phone);

// inquirer
    // .prompt([
    //     {
    //         type: "input",
    //         message: "What is your Manager's name?",
    //         name: "name"
    //     },
    //     {
    //         type: "input", 
    //         message: "What is your Manager's id?",
    //         name: "id"
    //     },
    //     {
    //         type: "input",
    //         message: "What is your Manager's email?",
    //         name: "email"
    //     },
    //     {
    //         type: "input",
    //         message: "What is your Manager's office number?",
    //         default: "555.343.1212",
    //         name: "phone"
    //     },
    // ])

//     .then(function (response) {
//         console.log(response.name);
//         console.log(response.id);
//         console.log(response.email);
//         console.log(response.phone);

//     })

//     .catch(error => {
//         if (error.isTtyError) {
//             console.log("couldn't do it");
//         } else {
//             console.log("it's always something");
//             throw (error);
//         }
//     });

// const newManager = new Manager(name, id, email);

// newManager.getName();
// console.log(newManager);

// newManager.getId();

// newManager.getEmail();

// newManager.getRole("Manager");


module.exports = Manager;