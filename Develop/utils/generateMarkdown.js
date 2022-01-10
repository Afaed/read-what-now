// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "None") {
    return ""
  }
  else if (license == "MIT") {
    return 'https://opensource.org/licenses/MIT'
  }
  else if (license == "Apache") {
    return 'https://www.apache.org/licenses/LICENSE-2.0'
  }
  else if (license === "GNU") {
    return 'https://img.shields.io/badge/License-GPLv3-blue.svg'
  }
  else if (license === "Eclipse") {
    return 'https://img.shields.io/badge/License-EPL_1.0-red.svg'
  }
  else if (license === "None") {
    return ""
  }
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
    else if (license === "GNU"){
      return 'https://www.gnu.org/licenses/gpl-3.0.en.html'
    }
    else if (license === "Eclipse"){
      return 'https://www.eclipse.org/legal/epl-2.0/'
    }
    else {
      return ""
    }
  }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "None") {
    return ""
  } else {
    return `This project is licensed under the [${license} license](${renderLicenseLink(license)}).`
  };
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![license badge] ${renderLicenseBadge(data.license)}

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
  ${renderLicenseSection(data.license)}
  ## Contributing 
  ${data.contributors}
  ## Tests
  ${data.test}
  ## Questions
  ${data.email}
  If you have any questions about this projects, please contact me directly at ${data.email}. You can view more of my projects at https://github.com/${data.github}.
`;
}

module.exports.generateMarkdown = generateMarkdown;