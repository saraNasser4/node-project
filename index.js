console.log(global);   // window
console.log(process);  // document

// commonjs syntax remove type in package to contunie
//const { generateRandomNumber, celciusToFahrenheit } = require('./utils');

//console.log(`Random Number: ${generateRandomNumber()}`);
//console.log(`Celcius to Fahrenheit: ${celciusToFahrenheit(0)}`);

import getPosts, { getPostsLength } from './postController.js'

console.log(getPosts());
console.log(`Posts Length: ${getPostsLength()}`);