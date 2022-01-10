// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require('fs')
const generatePage = require('./utils/generateMarkdown')
const { resolve } = require('path');
var questions = [
  {
    type: "input",
    name: "Title",
    message: "name?",
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your project title')
        return false;
      }
    }
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of the project?",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your Github Username",
  },
  {
    type: "input",
    name: "install",
    message: "How do you install your application?",
    //after use a .then to convert it to a json and make a new file
  },
  {
    type: "list",
    name: "license",
    message: "What is the lisence of the project?",
    choices: ["MIT", "Apache", "GNU", "Eclipse", "None"] 
  },
  {
    type: "input",
    name: "email",
    message: "What is your Email address?",
    
  },
  {
    type: "input",
    name: "usage",
    message: "How do i use your app?",
  },
  {
    type: "input",
    name: "contributors",
    message: "List all your contributors."
  },
  {
    type: "input",
    name: "tests",
    message: "Write how to test your project here."
  }

];
inquirer.prompt(questions)
  .then((answers) => {
    fs.writeFileSync("GENERATEDREADME.MD", generatePage.generateMarkdown(answers));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log("invalid input-current environment is unstable")
    } else {
      // Something else went wrong
      console.log("Error")
    }
  })

  