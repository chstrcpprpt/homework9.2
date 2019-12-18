const fs = require("fs");
const ejs = require("ejs");

const renderHTML = function(username, favColour) {
  const template = fs.readFileSync("./template.ejs", "utf-8");

  const htmlString = ejs.render(template, 
    {
    username: username,
    favColour: favColour
    }
  );

  console.log(htmlString);
}

module.exports = renderHTML;