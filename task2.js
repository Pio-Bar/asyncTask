/*
  Callback accepting asynchronous functions have their cons. They're prone to cause so called "callback hell".
  Connect below functions in such a way that you read the file content first, then you use its content and replace all spaces to "-"
  and then save the new content to the file.

  Is the result easy to read?
*/

const fs = require("fs");

//RESET HAPPY LITTLE FILE
const originalText = "Hello there, I'm a happy file.";
fs.writeFile("./extra/imAHappyFile.txt", originalText, "utf8", (err) => {
  if (err) throw err;
});

let newFileText = "";

fs.readFile("./extra/imAHappyFile.txt", "utf8", (err, fileContent) => {
  if (err) throw err;
  newFileText = fileContent.replace(/\s/g, "-");
  console.log("Old file content is: ", fileContent);
  writeFile();
});

function writeFile() {
  fs.writeFile("./extra/imAHappyFile.txt", newFileText, "utf8", (err) => {
    if (err) throw err;
    readFile();
  });
}

function readFile() {
  fs.readFile("./extra/imAHappyFile.txt", "utf8", (err, fileContent) => {
    if (err) throw err;
    console.log("New file content is: ", fileContent);
  });
}
