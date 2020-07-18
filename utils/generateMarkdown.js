// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projecttitle}

  ### Description
  ${data.description}

  ### Table of Contents
  

  ### Installation
  ${data.installation}

  ### Usage
  ${data.usage}

  ### License
  ${data.license}

  ### Contributing 
  ${data.contribution}

  ### Tests
  ${data.tests}

  ### Questions
  If you have questions about the project, below you can find ways to answer them, either by visiting my highub or contacting me by email
  
  Link to my Github:[${data.github}](https://github.com/${data.github})
  
  Email acount: ${data.email}
    
`;

}

module.exports = generateMarkdown;
