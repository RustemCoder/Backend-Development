//We can await promises as long as they are being called inside asynchronous functions.

const axios = require('axios').default;
let url = "some remote url"
async function asyncCall() {
  console.log('calling');
  const result = await axios.get(url);
  console.log(result.data);
}
asyncCall();

//Callback
//Callbacks are methods that are passed as parameters. They are invoked within the method to which they are passed as a parameter, 
//conditionally or unconditionally. We use callbacks with a promise to process the response or errors.

//function(res) and function(err) are the anonymous callback functions
axios.get(url).then(function(res) {
    console.log(res);
}).catch(function(err) {
    console.log(err)
})

//Promise
//An object that is returned by some methods, representing eventual completion or failure. 
//The code continues to run without getting blocked until the promise is fulfilled or an exception is thrown.

axios.get(url).then(
//do something
).catch(
//do something
)

//Promise use case

//Promises are used when the processing time of the function we invoke takes time like remote URL access, I/O operations file reading, etc.

let prompt = require('prompt-sync')();
let fs = require('fs');
const methCall = new Promise((resolve,reject)=>{
    let filename = prompt('What is the name of the file ?');
    try {
      const data = fs.readFileSync(filename, {encoding:'utf8', flag:'r'});
      resolve(data);
    } catch(err) {
      reject(err)
    }
});
console.log(methCall);
methCall.then(
  (data) => console.log(data),
  (err) => console.log("Error reading file")
);
