// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const  fs = require('fs')
const os= require('os')
const generatePage = require('./utils/generateMarkdown');
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
    name: "installation",
    message: "How do you install your application?",
     //after use a .then to convert it to a json and make a new file
},
{
  type: "list",
  name: "licence",
  message: "what is the lisence of the project?",
  choices: ["MIT", "Apache", "GNU", "Eclipse"] //after use a .then to convert it to a json and make a new file
},
{
  type: "input",
  name: "email",
  message: "What is your Email address?",
  //after use a .then to convert it to a json and make a new file
}];
inquirer.prompt(questions)
.then((answers) =>{
  console.log(answers)})
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log("invalid input-current environment is unstable")
    } else {
      // Something else went wrong
      console.log("Error")
    }})

  // TODO: Create a function to write README file
const writeFile = fileContent => {
  return new Promise ((resolve, reject) => {if (err){
    reject(err)
  }
});
function writeToFile(questions, data) {
   const writeFile = fileContent => {
     fs.writeFile(`./dist/index.html`, pageHTML, err => {
     if (err) {
       reject(err);
       return;
     }
     resolve({ok: true,
      message:'File created!',})
     console.log('Congratulations! Your Readne has been realized! Leave.')

     fs.copyFile('./src/style.css', './dist/style.css', err => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('Style sheet copied successfully!');

   });
});
}}
}
// TODO: Create a function to initialize app
function generatePage() {
  module.exports = generatePage => {
    console.log(questions);
    
    return ``;
};
}

// Function call to initialize app
init();