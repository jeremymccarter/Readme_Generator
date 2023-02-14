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

  Foobar is a Python library for dealing with word pluralization.
  
  ##  Installation
  ${data.installation}
  
  Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.
  
  bash
  pip install foobar
  
  
  ## Usage
  ${data.usage}
  
  python
  import foobar
  
  # returns 'words'
  foobar.pluralize('word')
  
  # returns 'geese'
  foobar.pluralize('goose')
  
  # returns 'phenomenon'
  foobar.singularize('phenomena')
  
  
  ## Contributing
  
  Pull requests are welcome. For major changes, please open an issue first
  to discuss what you would like to change.
  
  Please make sure to update tests as appropriate.
  
  ## License
  
  [MIT](https://choosealicense.com/licenses/mit/)
  `



;
}

module.exports = generateMarkdown;
