const fs = require('fs');
const inquirer = require('inquirer');



// array of questions for user
const questions = () => {
  return inquirer.prompt([
    // user  GITHUB
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username.',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your GitHub Username!');
          return false;
        }
      }
    },
    //user email
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address.',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your email address!');
          return false;
        }
      }
    },
    //project name
    {
      type: 'input',
      name: 'project',
      message: 'What is the project tittle?(Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a project tittle!');
          return false;
        }
      }
    },
    //project description
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a description of the project!');
          return false;
        }
      }
    },
    // software list License 
    {
      type: 'list',
      name: 'license',
      message: 'Select a lincense.',
      choices: ['MIT', 'APACHE', 'GPL 3.0', 'BSD 3.0', 'NONE']

    },
    //Installation del software
    {
      type: 'input',
      name: 'installation',
      message: 'Provide a installation of the project. (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a installation of the project!');
          return false;
        }
      }
    },
    // project usage information
    {
      type: 'input',
      name: 'usage',
      message: 'Provide a usage of the project. (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a usage  of the project!');
          return false;
        }
      }
    },
    //project contribution
    {
      type: 'input',
      name: 'contribution',
      message: 'Provide contruibution of the project. (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a usage  of the project!');
          return false;
        }
      }
    },
    //project test
    {
      type: 'input',
      name: 'test',
      message: 'Provide test for the project. (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a test of the project!');
          return false;
        }
      }
    },
    //questions
    {
      type: 'input',
      name: 'questions',
      message: 'Provide questions. (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter questions !');
          return false;
        }
      }
    },
    // Table of Contents
    {
      type: 'confirm',
      name: 'confirmContents',
      message: 'Would you like to have a table of contents?',
      default: false
    },
  ]);

};


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

//call array questions
questions()
  .then(questions =>{
    console.log(questions)
  });
  