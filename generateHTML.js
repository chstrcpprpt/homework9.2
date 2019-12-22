const fs = require("fs");
const ejs = require("ejs");
const puppeteer = require('puppeteer');

const renderHTML = async function(username, favColour, data) {
  const template = fs.readFileSync("./template.ejs", "utf-8");

  const htmlString = ejs.render(template, 
    {
    username,
    favColour,
    data
    }
  );

  fs.writeFileSync(`./_${(new Date).getTime()}.html`, htmlString);

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.setViewport(
    {
      width: 2480,
      height: 3508
    }
  );
  await page.setContent(htmlString);
  await page.pdf({path: `./_${(new Date).getTime()}.pdf`, format: 'A4'});
  
  await browser.close();

  // console.log(htmlString);
}

module.exports = renderHTML;