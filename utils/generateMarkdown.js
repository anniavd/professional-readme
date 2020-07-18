
//const  { }
// function to generate markdown for README





function generateMarkdown(data) {

 const generateTableCont =()=>{
   if(data.confirmContents===true){
     return `
### Table of Contents
______________________________________________________________________________________________________
[Installation](#Installation) \n
[Usage](#Usage) \n
[Lisence](#License) \n
[Contributing ](#Contributing ) \n
[Tests](#Tests) \n
[Questions](#Questions) \n`
   }
   else{
     return " ";
   }
 }


  return `# ${data.projecttitle}
![License](https://img.shields.io/badge/License-${data.license.replace(/ /g,'%20')}-grenn.svg)
  


### Description
_____________________________________________________________________________________________________\n

${data.description}
  
${generateTableCont()}
  

### Installation
______________________________________________________________________________________________________\n
${data.installation}

### Usage
_______________________________________________________________________________________________________\n
${data.usage}

### License
_______________________________________________________________________________________________________\n
${data.license}

### Contributing 
_______________________________________________________________________________________________________\n
${data.contribution}

### Tests
_______________________________________________________________________________________________________\n
${data.tests}

### Questions
_______________________________________________________________________________________________________\n
  If you have questions about the project, below you can find ways to answer them, either by visiting my highub or contacting me by email
  
  Link to my Github:[${data.github}](https://github.com/${data.github})\n
  
  Email acount: ${data.email}
    
`;

}

module.exports = generateMarkdown;
