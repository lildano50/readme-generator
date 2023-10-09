// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('../Develop/utils/generateMarkdown')

// TODO: Create an array of questions for user input
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
        type: 'input',
        message: "Please provide any required licenses: ", 
        name: "licenses",
    },
    {
        type: 'input',
        message: "Please provide any relevant badges: ",
        name: "badges",
    }
];

  

// TODO: Create a function to initialize app
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
