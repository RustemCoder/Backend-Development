//The import statement is used to import modules that some other module has exported. A file that includes reusable code is known as a module.

// addTwoNos.mjs
function addTwo(num) {
  return num + 4;
}
export { addTwo };
// app.js
import { addTwo } from './addTwoNos.mjs';
// Prints: 8
console.log(addTwo(4));
