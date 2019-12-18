const inquirer = require("inquirer");
const ejs = require("ejs");
const renderHTML = require("./generateHTML");
const axios = require("axios");

function userInput() {
  return inquirer.prompt([
    {
      type: "input",
      name: "username",
      message: "What is you GitHub username?"
    },
    {
      type: "input",
      name: "favColour",
      message: "What is your favourite colour?"
    }
  ]);
};

async function gitHubUser(username) {
  const res = await axios.get(`http://api.github.com/users/${username}`)
}

async function runAll() {
  const {username, favColour} = await userInput();
  // console.log(username, favColour); 
  renderHTML(username, favColour);
}

runAll();