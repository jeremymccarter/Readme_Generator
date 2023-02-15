// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` # ${data.title}
  
  # Table of Contents
  1. [Example](#example)
  2. [Example2](#example2)
  3. [Third Example](#third-example)
  4. [Fourth Example](#fourth-examplehttpwwwfourthexamplecom)
  
  
  ## Example
  ## Example2
  ## Third Example
  ## [Fourth Example](http://www.fourthexample.com) 


${data.description}

  ##  Installation
  ${data.installation}
  

  ## Intended usage
  ${data.usage}
   
  
  ## Contributions
  ${data.contribution}

  ## Tests
${data.tests}
  Please make sure to update tests as appropriate.
  
  ## License
  ${data.license}
  
  [MIT](https://choosealicense.com/licenses/mit/)
  
  
  ## Questions?
  Feel free to contact me at: ${data.email}
  Github: ${data.github}
  
  
  `



;
}

module.exports = generateMarkdown;
