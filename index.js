// Followed the step by steps in the mini-project for this challenge
const {renderLicenseBadge} = require('./utils/generateMarkdown')

// Import the packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({ name, description, installation, usage, license, contributing, tests, questions, email }) =>
  `
# ${name}

${renderLicenseBadge(license)}

## Description
${description} 

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Installation
${installation}  

## Usage
${usage} 

## License
This project is ${license} license.

## Contributing
${contributing} 

## Tests
${tests} 

## Questions
For more questions or inquiries, please contact the author at [GitHub](https://github.com/${questions}) or email ${email}.
  `
;

// Below are the array of questions

function promptQuestions () {
  return inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the title of the project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project.',
      },
    {
      type: 'input',
      name: 'installation',
      message: 'How to install?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How to use your project?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license does the project has?',
      choices: ['Apache', 'BSD', 'EPL', 'GPL', 'MIT', 'Unlicense'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'How to contribute?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'How to run tests in this project?',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Enter your github username.',
      },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email.',
    },
  ])
};

  // Initializing the app
  function init() {
    promptQuestions()
  .then((answers) => {
    const mdPageContent = generateREADME(answers);

    fs.writeFile('./output/README.md', mdPageContent, (err) =>
      err ? console.log(err) : console.log('You have successfully created a README.md! Good job!')
    );
  });
  };

// Function call to initialize app
init();
