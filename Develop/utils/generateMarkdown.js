// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license = null){
  return null}
  return `http://img.shields.io/badge/license-${license}-blue.svg`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "MIT"){
  return 'https://opensource.org/licenses/MIT'}
  else if (license == "Apache"){
    return 'https://www.apache.org/licenses/LICENSE-2.0'
  }
  else if (licence === "GNU"){
    return 'https://img.shields.io/badge/License-GPLv3-blue.svg'
  }
  else if (licence === "Eclipse"){
    return 'https://img.shields.io/badge/License-EPL_1.0-red.svg'
  }
  else return null
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (renderLicenseBadge == renderLicenseLink(license), renderLicenseBadge(license)) {
    return license
  } else {
    return null;}
};
var exampleData =
{
  title: "How to read",
  lisence: "Apache",
  description: "Reading",
  install: "perform a git pull",
  usage: "read",
  contributors: "me",
  test: "test",
  questions: "How to contact me: email justchoy99@gmail.com",
}

console.log(generateMarkdown(exampleData))
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  [Github licence](http://img.shields.io/badge/license-${data.license}-blue.svg)
  
  ## Description 
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
  ${data.install}
  ## Usage 
  ${data.usage}
  ## License 
  This project is license under ${data.license}
  ## Contributing 
  ${data.contributors}
  ## Tests
  ${data.test}
  ## Questions
  ${data.questions}
  If you have any questions about this projects, please contact me directly at ${data.email}. You can view more of my projects at https://github.com/${data.github}.
`;
}

module.exports = generateMarkdown;
