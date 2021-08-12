/*
  As a response to the callback hell, the promises have been created. These are the same functions as before, but converted
  in a way that they use promises instead of callbacks. Can you perform the task from previous task? Do not use async/await.

  Is the result is easier to read than the callback-based one?
*/

const util = require('util')
const fs = require('fs')

const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

readFile('./extra/imAHappyFile.txt', 'utf8')
  .then(fileContent => {
    console.log('Old file content is: ', fileContent)
    // this code executes once reading of file data is done
  })
  .catch(err => {

  })
let newFileText = ''
writeFile('./extra/imAHappyFile.txt', newFileText , 'utf8')
  .then(fileContent => {
    // this code executes once writing data to file is done
  })
  .catch(err => {
    
  })

readFile('./extra/imAHappyFile.txt', 'utf8')
  .then(fileContent => {
    console.log('Old file content is: ', fileContent)
    // this code executes once reading of file data is done
  })
  .catch(err => {
    
  })
