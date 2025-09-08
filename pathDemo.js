import path from 'path';
import url from 'url';

const filePath = 'dir1/dir2/test.txt';

console.log(path.basename(filePath));  //---> test.txt

console.log(path.dirname(filePath));  //---> dir1/dir2

console.log(path.extname(filePath));  //---> .txt

console.log(path.parse(filePath));  //---> Show it as an obj

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename);  
console.log(__dirname);  

//join() = resolve()
const filePath2 = path.join(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath2);

const filePath3 = path.resolve(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath3);
