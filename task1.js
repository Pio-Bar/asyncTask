/*
  Below function will print "Hello!!!" in 1 second (1000 miliseconds).

  setTimeout(function () {
    console.log('Hello!!!')
  }, 1000)

  Synchronous code is a code that's being executed line after line as we write our code.

  =====

  line1
  line2
  line3

  ====
  ^
  Line 2 cannot be executed up until the first one is done.

  ====

  line1

  setTimeout(function () {
    console.log('Hello!!!')
  }, 1000)

  line3

  ====
  ^
  If setTimeout would be synchronous, line 3 couldn't start until the setTimeout would be done. Which would be a waste of time,
  since nothing could be done within the whole second. The fact that line 3 can be executed while setTimeout ticks in the background,
  waiting till 1 second elapses makes it an asynchronous function.


  Today we have three main ways to handle asynchronous code - asynchronous functions with callbacks, promises and async/await
  Promises and async/await only appeared in JS at certain point in history, prior to that asynchronous functions used to be handled by passing
  a callback function to them. A good example of such function is setTimeout, it's neither a promise nor can it be used with async/await.

  setTimeout(callback, time)

  Timeout delegates our callback to be executed some time in the future, the exact time is set by the second argument.

  Take the below function and make it an asychronous function accepting a callback. Just like setTimeout or setInterval does.

*/

////////////////////////////////////////// THE TASK //////////////////////////////////////////
 
/*
  Modify the waitUntil function in a way that will resemble the setTimeout/setInterval functions.
  The waitUntil should accept two arguments: a callback that will be delegated to be executed at specific point in the future
  and the date at which it's supposed to be executed.
  You can get the current date with new Date().getTime() which returns you the amount of miliseconds that elapsed since
  specific point in history, called UNIX epoch (00:00:00 UTC on 1 January 1970).
  This way of representing time is usually called a timestamp.


*/

const currentDate = new Date().getTime()
console.log(`Current date is ${currentDate}`)

const twoSeconds = 2 * 1000 // 2 000 ms
console.log(`Time in 2 seconds is ${currentDate + twoSeconds}`)

function waitUntil(timeInTheFuture) {
  const currentTime = new Date().getTime()
  const amountOfTimeToWait = timeInTheFuture - currentTime
  setTimeout(() => {
    // We're here in the correct time

  }, amountOfTimeToWait)
}