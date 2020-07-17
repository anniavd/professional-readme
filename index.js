const fs = require('fs');
const inquirer = require('inquirer');



// array of questions for user
const questions = [
    // user  GITHUB
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username.',
      validate: githubInput => {
        if (githubInput) {
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
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter your email address!');
          return false;
        }
      }
    },
    //project title
    {
      type: 'input',
      name: 'projecttitle',
      message: 'What is the project tittle?',
      validate: projectInput => {
        if (projectInput) {
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
      message: 'Provide a description of the project',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Please enter a description of the project!');
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

    //Installation del software
    {
      type: 'input',
      name: 'installation',
      message: 'Provide a installation of the project.',
      validate: installationInput => {
        if (installationInput) {
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
      message: 'Provide a usage of the project.',
      validate: usageInput => {
        if (usageInput) {
          return true;
        } else {
          console.log('Please enter a usage  of the project!');
          return false;
        }
      }
    },
    //I need see for add credits or not ??
    // software list License 
    {
      type: 'list',
      name: 'license',
      message: 'Select a lincense.',
      choices: ['MIT', 'APACHE', 'GPL 3.0', 'BSD 3.0', 'NONE']

    },
    //project contribution
    {
      type: 'confirm',
      name: 'contributionConfirm',
      message: 'Would you like to include contributors to your project?',
      default: false
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Enter the contributors!',
      validate: contributionInput => {
        if (contributionInput) {
          return true;
        } else {
          console.log("Please enter your project's contributors!");
          return false;
        }
      },
      when: ({ contributionConfirm }) => contributionConfirm
    },
    //project test
    {
      type: 'confirm',
      name: 'testConfirm',
      message: 'Would you like to provide tests for your project?',
      default: false,
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please enter the tests for your project.',
      validate: testInput => {
        if (testInput) {
          return true;
        } else {
          console.log("Please enter your project's tests!");
          return false;
        }
      },
      when: ({ testConfirm }) => testConfirm
    },
    //questions
    {
      type: 'confirm',
      name: 'questionsConfirm',
      message: 'Would you like to include questions for your project?',
      default: false,
    },
    {
      type: 'input',
      name: 'questions',
      message: 'Provide questions.',
      validate: questionsInput => {
        if (questionsInput) {
          return true;
        } else {
          console.log('Please enter questions !');
          return false;
        }
      },
      when: ({ questionsConfirm}) => questionsConfirm
    }

  ];




// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
  return inquirer.prompt(questions)
  .then(answerSave => {
    console.log(answerSave)
  });

}

// function call to initialize program
 init();
  
