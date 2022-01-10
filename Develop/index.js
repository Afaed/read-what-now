// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require('fs')
const generatePage = require('./utils/generateMarkdown')
const { resolve } = require('path');
const { doesNotMatch } = require('assert');
var questions = [
  {
    type: "input",
    name: "Title",
    message: "What is the name of the project?",
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your project title")
        return false;
      }
    }
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of the project?",
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter a valid input")
        return false;
      }
    }
  },
  {
    type: "input",
    name: "github",
    message: "Enter your Github Username",
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your username.")
        return false;
      }
    }
  },
  {
    type: "input",
    name: "install",
    message: "How do you install your application?",
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please tell me how to install your project.")
        return false;
      }
    }
    //after use a .then to convert it to a json and make a new file
  },
  {
    type: "list",
    name: "license",
    message: "What is the lisence of the project?",
    choices: ["MIT", "Apache", "GNU", "Eclipse", "None"],
  },
  {
    type: "input",
    name: "email",
    message: "What is your Email address?",
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log("What's your email? Please you have only three more questions left.")
        return false;
      }
    }
  },
  {
    type: "input",
    name: "usage",
    message: "How do I use your app?",
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please tell me how to use your app.")
        return false;
      }
    }
  },
  {
    type: "input",
    name: "contributors",
    message: "List all your contributors.",
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please tell me the names of your contributors.")
        return false;
      }
    }
  },
  {
    type: "input",
    name: "test",
    message: "Write how to test your project here.",
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log("If you don't have a test method just say that you don't have a testing method.")
        return false;
      }
    }
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

  