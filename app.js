const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// load node modules
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employeeArray = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
console.log("please build your team.");

function getEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your Employee's name?",
        default: "Stephon Autery",
        name: "name"
      },
      {
        type: "input",
        message: "What is your Employee's id?",
        default: "1",
        name: "id"
      },
      {
        type: "input",
        message: "What is your Employee's email?",
        default: "stephon@stephonautery.com",
        name: "email"
      },
      {
        type: "list",
        message: "What is this Employee's role?",
        choices: ["Manager", "Engineer", "Intern"],
        default: ["Manager"],
        name: "role"
      }
    ])
    .then(function (response) {

      // this.role = response.role

      function getManager() {
        inquirer
          .prompt([
            {
              type: "input",
              message: "please enter your phone number.",
              default: "510.555.1212",
              name: "officeNumber"
            },
            {
              type: "list",
              message: "Add another Employee?",
              choices: ["yes", "no, I'm done."],
              default: ["yes"],
              name: "another"
            }
          ])
          .then(val => {
            employeeArray.push(new Manager(response.name, response.id, response.email, response.role, val.officeNumber));
            if (val.another === "yes") {
              getEmployee();
            } else {
              fs.writeFile(outputPath, render(employeeArray), (err) => {
                if (err) throw err;
                console.log('The file has been saved!');
              });
            }
          });
      }

      function getEngineer() {
        inquirer
          .prompt([
            {
              type: "input",
              message: "please enter your gitHub username.",
              default: "StephonAutery",
              name: "github"
            },
            {
              type: "list",
              message: "Add another Employee?",
              choices: ["yes", "no, I'm done."],
              default: ["yes"],
              name: "another"
            }
          ])
          .then(val => {
            employeeArray.push(new Engineer(response.name, response.id, response.email, response.role, val.github));
            if (val.another === "yes") {
              getEmployee();
            } else {
              fs.writeFile(outputPath, render(employeeArray), (err) => {
                if (err) throw err;
                console.log('The file has been saved!');
              });
            }
          });
      }

      function getIntern() {
        inquirer
          .prompt([
            {
              type: "input",
              message: "please enter your alma mater.",
              default: "NC State",
              name: "school"
            },
            {
              type: "list",
              message: "Add another Employee?",
              choices: ["yes", "no, I'm done."],
              default: ["yes"],
              name: "another"
            }
          ])
          .then(val => {
            employeeArray.push(new Intern(response.name, response.id, response.email, response.role, val.school));
            if (val.another === "yes") {
              getEmployee();
            } else {
              var employeeJSON = JSON.stringify(employeeArray);
              var employeeHTML = render(employeeArray);
              fs.writeFile(outputPath, render(employeeArray), (err) => {
                if (err) throw err;
                console.log('The file has been saved!');
              });
            }
          });
      }

      switch (response.role) {
        case "Manager":
          console.log("manager");
          getManager();
          break;
        case "Engineer":
          console.log("engineer");
          getEngineer();
          break;
        case "Intern":
          console.log("intern");
          getIntern();
          break;
      }
    })
    .catch(error => {
      if (error.isTtyError) {
        console.log("couldn't do it");
      } else {
        console.log("it's always something");
        throw (error);
      }
    });
}
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

getEmployee();