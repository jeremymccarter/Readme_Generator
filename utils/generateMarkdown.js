// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
if (license !== "None") {
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}
return "";
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license !== "None") {
  return `\n* [License](#license)\n`;
}
return "";
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
This project is licensed under the ${license} license.`;
  }
  return "";
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}


  # Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#intended-usage)
  4. [Contributions](#contributions)
  5. [Tests](#tests)
  6. [License](#license)
  7. [Questions](#questions?)
  

## Description
${data.description}

  ##  Installation
  ${data.installation}
  

  ## Intended usage
  ${data.usage}
   
  
  ## Contributions
  ${data.contribution}

  ## Tests
  Please make sure to update tests as appropriate.
  ${data.tests}
 
  

   ${renderLicenseSection(data.license)}

  
  
  ## Questions?
  Feel free to contact me at: ${data.email}
  Github: ${data.github}`
  
  
  



;
}

module.exports = generateMarkdown;
