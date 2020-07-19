
//const  { }
// function to generate markdown for README

function generateMarkdown(data) {

  const generateTableCont = () => {
    if (data.confirmContents === true) {
      return `
# Table of Contents

[Installation](#Installation)\n
[Usage](#Usage)\n
[Lisence](#License)\n
${appendTable()}\n`
    }
    else {
      return " ";
    }
  }

  
 const generateInstallation= () =>{
  let listNameArr = data.installation.split('/');   
  let name = '# Installation \n ';
  listNameArr.forEach(element => {
  name += `- ${element.trim()}\n`;
    
  });
    return name;
 }

  const generateContribuitors = () => {
    if (data.contributionConfirm === true) {
      let listNameArr = data.contribution.split('/');     
      let name = '# Contributing \n ';
      listNameArr.forEach(element => {
        name += `- ${element.trim()}\n`;

      });
      return name.toUpperCase();
    }
    else {
      return "";
    }
  }


  const generateTest = () => {
    if (data.testConfirm === true) {
      let listNameArr = data.tests.split('/');
      let name = '# Test \n ';
      listNameArr.forEach(element => {
        name += `- ${element.trim()}\n`;

      });
      return name;
    }
    else {
      return "";
    }
  }


  const appendTable = () => {
    let name = '';
    if (data.contributionConfirm === true) {
      name += `\n[Contributing](#Contributing)\n`;
    }
    if (data.testConfirm === true) {
      name += `\n[Test](#Test)\n`;
    }
    name += `\n[Questions](#Questions)\n`;
    return name;
  }

 


  return `# ${data.projecttitle.toUpperCase()}

\n![License](https://img.shields.io/badge/License-${data.license.replace(/ /g, '%20')}-grenn.svg)
  

# Description

${data.description}
  
${generateTableCont()}
  
${generateInstallation()}

# Usage

${data.usage}

# License

${data.license}

${generateContribuitors()}

${generateTest()}

# Questions

  If you have questions about the project, below you can find ways to answer them, either by visiting my highub or contacting me by email
  
  Link to my Github: [${data.github}](https://github.com/${data.github})\n
  
  Email acount: ${data.email}
    
`;

}

module.exports = generateMarkdown;
