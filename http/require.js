//The built-in NodeJS method require() is used to incorporate external modules that are included in different files. The require() statement essentially reads and executes a JavaScript file before returning the export object.

module.exports = 'Hello Programmers';
let msg = require('./messages.js');
console.log(msg);
