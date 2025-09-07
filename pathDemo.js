import path from 'path';
import url from 'url';

const filePath = 'dir1/dir2/test.txt';

console.log(path.basename(filePath));  //---> test.txt

console.log(path.dirname(filePath));  //---> dir1/dir2

console.log(path.extname(filePath));  //---> .txt

console.log(path.parse(filePath));  //---> Show it as an obj

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(filePath);
console.log(__filename);  
console.log(__dirname);  

