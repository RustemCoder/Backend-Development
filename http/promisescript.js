//Creating a promise method. The promise will get resolved when timer times out after 6 seconds.
let myPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Promise resolved")
    },6000)})
//Console log before calling the promise
console.log("Before calling promise");
//Call the promise and wait for it to be resolved and then print a message.
myPromise.then((successMessage) => {
    console.log("From Callback " + successMessage)
  })
//Console log after calling the promise
  console.log("After calling promise");

//sequentially
let myPromise1 = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Promise 1 resolved")
    },6000)})
let myPromise2 = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Promise 2 resolved")
    },3000)})
  myPromise1.then((successMessage) => {
    console.log("From Callback " + successMessage)
  })
  myPromise2.then((successMessage) => {
  console.log("From Callback " + successMessage)
})

//Create a script which has two methods that return promises - One of the promises should get reolved after 6 seconds timeout and 
//the other one after 3 seconds timeout. Call the promise in such a way that the second promise is invoked 
//after the first promise is resolved.
let myPromise1 = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Promise 1 resolved")
    },6000)})

    let myPromise2 = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Promise 2 resolved")
    },3000)})

  myPromise1.then((successMessage) => {
    console.log("From Callback " + successMessage)
    
  myPromise2.then((successMessage) => {
      console.log("From Callback " + successMessage)
    })
  })
