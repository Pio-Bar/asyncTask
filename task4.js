/*
  While promises solved the calback hell problem, they turned out to be fairly complex and required to be carefuly studied
  and required practice to master.
  The keywords async and await have been introduced in an effort to make things easier to reason about.
  The aim was to make asynchronous code resemble the synchronous one.

  The promises were still a valid way to handle asynchronous code, so the comitee that creates specifications for the JS
  decided that the newly introduced async/await will be so called "syntactic sugar" over promises.

  That means async/await are just a nice way to create promises, but they're still promises.

  async converts a function to return promise, while await is just a more streamlined way to handle "then".

  That means that we can use again the same promisified functions that we used in the previous task and apply await for them.
  Can you again repeat the solution from the task 2, but not base it on async/await?

  Note:
  You can't use await outside async function, which is why we closed everything within a function this time.

*/

const util = require("util");
const fs = require("fs");

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

//RESET HAPPY LITTLE FILE
const originalText = "Hello there, I'm a happy file.";
writeFile("./extra/imAHappyFile.txt", originalText, "utf8", (err) => {
  if (err) throw err;
  editFile();
});

async function editFile() {
  const fileContent = await readFile("./extra/imAHappyFile.txt", "utf8");
  console.log("Old file content is: ", fileContent);
  const newFileText = fileContent.replace(/\s/g, "-");
  await writeFile("./extra/imAHappyFile.txt", newFileText, "utf8");
  const changedFileContent = await readFile("./extra/imAHappyFile.txt", "utf8");
  console.log("New file content is: ", changedFileContent);
}
