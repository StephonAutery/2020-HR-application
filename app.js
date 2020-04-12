const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

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


inquirer
    .prompt([
        {
            type: "input",
            message: "what's the title for the repsitory?",
            default: "2020 - readme generator",
            name: "name"
        },
        {
            type: "input",
            message: "please describe this project?",
            default: "a command-line application that dynamically generates a README.md file from a user's terminal input.",
            name: "description"
        },
        {
            type: "editor",
            message: "please enter a table of contents?",
            default: " \n - JavaScript \n - Node.JS \n - NPM \n - FS \n - inquirer",
            name: "contents"
        },
        {
            type: "editor",
            message: "please explain the installation process.",
            default: "dependencies: \n - inquirer \n - fs",
            name: "installDoc"
        },
        {
            type: "editor",
            message: "how will the app be used?",
            default: " \n the application is used to save the develper the trouble of formating a README.md file.",
            name: "usage"
        },
        {
            type: "input",
            message: "GitHub repository :",
            default: "[Stephon Autery on github](https://github.com/StephonAutery/2020-readme-generator)",
            name: "github"
        },
        {
            type: "input",
            message: "enter licensing info: ",
            default: "MIT",
            name: "license"
        },
        {
            type: "input",
            message: "enter contributors: ",
            default: "Stephon Autery",
            name: "contributing"
        },
        {
            type: "input",
            message: "questions: ",
            default: "no tests run",
            name: "tests"
        },
    ])

    .then(function (response) {
        // let writePage = `# ${response.name} \n ![i'm_a_link](https://img.shields.io/badge/Stephon_Autery-let's_begin_here_...-goldenrod.svg) ![i'm a link](https://img.shields.io/badge/license-MIT-blue.svg) ![i'm_a_link](https://img.shields.io/badge/_ES_-_6_-green) ![i'm a link](https://img.shields.io/badge/_inquirer_-_7.1.0_-green>) ![i'm a link](https://img.shields.io/badge/_fs_-0.0.1_-orange.svg) \n ## description \n ${response.description} \n ## contents \n ${response.contents} \n ## installation documentation \n ${response.installDoc} \n ## how will the app be used? \n ${response.usage}  \n ## GitHub repository \n ${response.github} \n ## contributors \n ${response.contributing} \n ## testing \n ${response.tests} \n \n \n ## a photo of Stephon Autery \n \n \n ![i'm a link](./images/stephon-headshot-garden.jpg)`;
        // fs.writeFile('README.md', writePage, 'utf8', (err) => {
        //     if (err) throw err;
        // });
    })

    .catch(error => {
        if (error.isTtyError) {
            console.log("couldn't do it");
        } else {
            console.log("it's always something");
            throw (error);
        }
    });