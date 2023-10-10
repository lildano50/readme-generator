// Includes packages/imports needed for program
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('../Develop/utils/generateMarkdown')

// Array of questions to be generated. These will be answered by the user and used to generate the README.md file
const questions = [
    {
        type: 'input',
        message: "What is the name of your project? ",
        name: 'projectTitle',
    },
    {
        type: 'input',
        message: "Write a brief description of your project: ",
        name: "description",
    },
    {
        type: 'input',
        message: "What are the required steps to install your project? ",
        name: "install"
    },
    {
        type: 'input',
        message: "Provide some instructions on how to use your application: ", 
        name: "instructions"
    },
    {
        type: 'input',
        message: "List any collaborators you may have used or required credits: ",
        name: "credits",
    },
    {
        type: 'list',
        message: "Please provide any required licenses: ", 
        name: "licenses",
        choices: ["MIT", "GNU GPLv3", "Apache License 2.0", "None"]
    },
    {
        type: 'input',
        message: "Please enter your Github username: ",
        name: "github"
    },
    {
        type: 'input',
        message: "Please enter your email: ",
        name: "email",
    },

];

// Function to initialize application. It brings in questions/answers and sends responses to generateMarkdown()
// to generate README.md file
function init(promptQuesitons){
    inquirer
        .prompt(promptQuesitons)
        .then((response) =>
            fs.writeFile('README.md', generateMarkdown(response), (err) =>
            err ? console.error(err) : console.log('Success!')
));
}

// Function call to initialize app
init(questions);
