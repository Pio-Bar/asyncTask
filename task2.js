/*
  Callback accepting asynchronous functions have their cons. They're prone to cause so called "callback hell".
  Connect below functions in such a way that you read the file content first, then you use its content and replace all spaces to "-"
  and then save the new content to the file.

  Is the result easy to read?
*/

const fs = require('fs')

fs.readFile('./extra/imAHappyFile.txt', 'utf8', (err, fileContent) => {
  if (err) throw err;
  // this code executes once reading of file data is done
  console.log('Old file content is: ', fileContent)
})
let newFileText = ''
fs.writeFile('./extra/imAHappyFile.txt', newFileText ,'utf8', (err) => {
  if (err) throw err;
  // this code executes once writing data to file is done
})

fs.readFile('./extra/imAHappyFile.txt', 'utf8', (err, fileContent) => {
  if (err) throw err;
  // this code executes once reading of file data is done
  console.log('New file content is: ', fileContent)
})