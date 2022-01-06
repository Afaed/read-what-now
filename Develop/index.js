// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const  fs = require('fs')
const inquirer = require('os')
const generatePage = require('./utils/generateMarkdown')
const questions = () => {
  return inquirer.prompt([
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
        choices: [
            {
                name: "description",
                value: "input"
            }
        ] //after use a .then to convert it to a json and make a new file
    },
    {
      type: "input",
      name: "Github Username",
      list: "Enter your Github Username",
      choices: [
          {
            name: "Github Username", 
            value: "text",
          }
      ] //after use a .then to convert it to a json and make a new file
  },
  {
    type: "input",
    name: "Installation instreuctions",
    list: "",
    choices: [
        {
            name: "description",
            value: "input"
        }
    ] //after use a .then to convert it to a json and make a new file
},
{
  type: "input",
  name: "description",
  list: "What is the description of the project?",
  choices: [
      {
          name: "description",
          value: "input"
      }
  ] //after use a .then to convert it to a json and make a new file
}
.then((answers) =>{
  print (answers)
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log("invalid input-current environment is unstable")
    } else {
      // Something else went wrong
      console.log("Error")
    }
  },
  );
})
]
)
};

// TODO: Create a function to write README file
function writeToFile(questions, data) {
   
};

// TODO: Create a function to initialize app
function generatePage() {
  module.exports = generatePage => {
    console.log(questions);
    
    return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>README GENERATOR</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
  <header>
  <div class = "container flex-row justify-space-between align-center py-3
    <h1 class = "page-title text-primary bg-dark py-2 px-3">${writeToFile}</h1>
    <nav class =" flex-row">
    <a class = 
    <h2><a href="https://github.com/${templateData.github}">Github</a></h2>
  </body>
  </html>
  `;
};
}


// Function call to initialize app
init();