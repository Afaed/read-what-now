// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const  fs = require('fs')
const os = require('os')
const web = require("HTMLGEN")
const questions = [
  inquirer
      .prompt(), {
    type: "input",
    name: "Title",
    message: "name?",
    choices: {
      name: "Title",
      value: "Text",
    }
      },
    {
        type: "list",
        name: "comm method",
        list: "What is your preffered means of comm?",
        choices: [
            {
                name: "phone number",
                value: "Phone"
            }
        ] //after use a .then to convert it to a json and make a new file
    },
    {
      type: "text",
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
    type: "list",
    name: "comm method",
    list: "What is your Engineer?",
    choices: [
        {
            name: "Engineer",
            value: "Engineer"
        }
    ] //after use a .then to convert it to a json and make a new file
},
{
  type: "list",
  name: "comm method",
  list: "What is your preffered means of comm?",
  choices: [
      {
          name: "phone number",
          value: "Phone"
      }
  ] //after use a .then to convert it to a json and make a new file
}
]
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
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  
};

// TODO: Create a function to initialize app
function init() {
  module.exports = questions => {
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
    <h1 class = "page-title text-primary bg-dark py-2 px-3">${templateData.name}</h1>
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