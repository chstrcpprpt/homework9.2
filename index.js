const inquirer = require("inquirer");

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

async function runAll() {
  const {username, favColour} = await userInput();
  console.log(username, favColour); 
}

runAll();