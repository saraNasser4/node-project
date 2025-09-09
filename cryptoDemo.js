import crypto from 'crypto';
//             create a hash obj     update it with the data     get it in hex format
const hash = crypto.createHash('sha256').update('Hello World!').digest('hex');

console.log(hash)