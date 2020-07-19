

// function to generate markdown for README

function generateMarkdown(data) {

  const generateTableCont = () => {
    if (data.confirmContents === true) {
      return `
# Table of Contents

[Installation](#Installation)\n
[Usage](#Usage)\n
[License](#License)\n
${appendTable()}\n`
    }
    else {
      return " ";
    }
  }

// show the info by section Installation
 const generateInstallation= () =>{
  let listNameArr = data.installation.split('/');   
  let name = '# Installation \n ';
  listNameArr.forEach(element => {
  name += `- ${element.trim()}\n`;
    
  });
    return name;
 }

 // show the info by section Usage
 const generateUsage= () =>{
  let listNameArr = data.usage.split('/');   
  let name = '# Usage \n ';
  listNameArr.forEach(element => {
  name += `- ${element.trim()}\n`;
    
  });
    return name;
 }


 // show the info by section Test
  const generateContribuitors = () => {
    if (data.contributionConfirm === true) {
      //create array for save the contribuitors info
      let listNameArr = data.contribution.split('/');  
       //create the title for the section  
      let name = '# Contributing \n ';
       //function for print each name
      listNameArr.forEach(element => {
        name += `- ${element.trim().toUpperCase()}\n`;

      });
      return name;
    }
    else {
      return "";
    }
  }

// show the info by section Test
  const generateTest = () => {
    if (data.testConfirm === true) { 

      //create array for save the test info
      let listNameArr = data.tests.split('/');
      //create the title for the section
      let name = '# Test \n ';
      //function for print each step for test
      listNameArr.forEach(element => {
        name += `- ${element.trim()}\n`;
      });
      return name;
    }
    else {
      return "";
    }
  }

// add tabble contents the secction are optional for the user
  const appendTable = () => {
    let name = '';
    if (data.contributionConfirm === true) {
      //create the link
      name += `\n[Contributing](#Contributing)\n`;
    }
    if (data.testConfirm === true) {
      //create the link
      name += `\n[Test](#Test)\n`;
    }
    //create the link
    name += `\n[Questions](#Questions)\n`;
    return name;
  }

  // show the links of the respective licenses
 const LicenseInfo= () =>{
  let link='';

   //license MIT
   if(data.license==='MIT'){
      let link=`[Information about the license](https://opensource.org/licenses/${data.license}) `;
      return link;
   }
    //license GPL 3.0
  if(data.license==='GPL 3.0'){
    let link=`[Information about the license](https://opensource.org/licenses/${data.license.replace(/ /g, '-')}) `;
    return link; 
 }
  //license BSD 3.0
 if(data.license==='BSD 3.0'){
   
  let link=`[Information about the license](https://opensource.org/licenses/BSD-3-Clause) `;
  return link; 
 }
  //license APACCHE
 if(data.license==='APACHE'){
  let link=`[Information about the license](https://opensource.org/licenses/${data.license}-2.0) `;
  return link; 
 }
  //not license
 if(data.license==='NONE'){
 
  return link; 
 }
 }



  return `# ${data.projecttitle.toUpperCase()}

\n![License](https://img.shields.io/badge/License-${data.license.replace(/ /g, '%20')}-grenn.svg)
  

# Description

${data.description}
  
${generateTableCont()}
  
${generateInstallation()}

${generateUsage()}

# License
The license for which the application is covered:
${data.license} ${LicenseInfo()}

${generateContribuitors()}

${generateTest()}

# Questions

  If you have questions about the project, below you can find ways to answer them, either by visiting my highub or contacting me by email
  
  Link to my Github: [${data.github}](https://github.com/${data.github})\n
  
  Email acount: [${data.email}](mailto:${data.email})
    
`;

}

module.exports = generateMarkdown;
