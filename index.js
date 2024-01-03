const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkDown = require('./utils/generateMarkdown')

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter project title.',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a short description explaining the what, why, and how of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information for the project.',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Please provide contributors for the project.',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide tests for the project.',
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: 'Please enter your email address.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select the License you would like to use.',
        choices: [
            'APACHE',
            'BSD',
            'GPL',
            'MIT',
            'None',
        ],
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkDown(data), function (err) {
        if (err) {
            return console.log(err);
        }else {
            console.log("Success!");
        }
    });
}

function init() {
    inquirer.prompt(questions).then(function (response) {
        console.log(response);
        writeToFile(`${response.title}.md`, response);
    });
}


init();
