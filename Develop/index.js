// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require('fs')
const generatePage = require('./utils/generateMarkdown')
var pictures = require(`./assets/images`)

var questions = [
  {
    type: "input",
    name: "title",
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
    name: "images",
    message: "Insert one Image into the project. Be sure to add them to the assets folder. To install an image, just write the name of the filename of the image.",
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter a image.")
        return false;
      }
    },
    
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
  },
  {
    type: "input",
    name: "guidelines",
    message: "What are the Contribution Guidlines for this project?",
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log("A man needs a code.")
        return false;
      }
    }
    
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
        console.log("Please tell me how to use your app. Is it like Floppy Bird?")
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
        console.log("Please tell me the names of your contributors. Now.")
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

  