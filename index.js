// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
const path = require('path')
// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Describe your project/application:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'How to install application:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Intended Usage of application:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please credit contributions here:',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Display tests here:',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'License',
        name: 'license',
    },
    {
        type: 'input',
        message: 'Please enter your email to be displayed on page',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Please enter a link to your github profile page',
        name: 'github',
    },


    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(path.join(process.cwd(), fileName), data, (err) =>
   err ? console.error(err) : console.log('Success!')
 );



}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((userInput) => {
        console.log(userInput)
        console.log(userInput.jay)
        writeToFile('README.md', generateMarkdown(userInput))

    })




}

// Function call to initialize app
init();
