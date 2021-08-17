/*
  As a response to the callback hell, the promises have been created. These are the same functions as before, but converted
  in a way that they use promises instead of callbacks. Can you perform the task from previous task? Do not use async/await.

  Is the result is easier to read than the callback-based one?
*/

const util = require("util");
const fs = require("fs");

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

//RESET HAPPY LITTLE FILE
const originalText = "Hello there, I'm a happy file.";
fs.writeFile("./extra/imAHappyFile.txt", originalText, "utf8", (err) => {
  if (err) throw err;
});

let newFileText = "";

readFile("./extra/imAHappyFile.txt", "utf8")
  .then((fileContent) => {
    console.log("Old file content is: ", fileContent);
    newFileText = fileContent.replace(/\s/g, "-");
  })
  .catch((err) => console.error(err))
  .then(() => writeFile("./extra/imAHappyFile.txt", newFileText, "utf8"))
  .then(() => readFile("./extra/imAHappyFile.txt", "utf8"))
  .then((fileContent) => {
    console.log("Old file content is: ", fileContent);
  })
  .catch((err) => console.error(err));