const inquirer = require("inquirer");
const renderHTML = require("./generateHTML");
const axios = require("axios");


function userInput() {
  return inquirer.prompt([
    {
      type: "input",
      name: "username",
      message: "What is you GitHub username?",
      default: "mankinchi"
    },
    {
      type: "input",
      name: "favColour",
      message: "What is your favourite colour?"
    }
  ]);
};

async function gitHubUser(username) {
  const {data} = await axios.get(`http://api.github.com/users/${username}`);
  return data;
};

async function runAll() {
  const {username, favColour} = await userInput();
 
  const data = await gitHubUser(username);
  // console.log(data);

  renderHTML(username, favColour, data);

}

runAll();