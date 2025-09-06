// // readFile() - callback
// import fs from 'fs';

// fs.readFile('./text.txt', 'utf8', (err, data)=> {
//     if (err) throw err;
//     console.log(data);
// });

// // sync version
// const data = fs.readFileSync('./text.txt', 'utf8');
// console.log(data);
//--------------------------------------
// readFile() - promises
import fs from 'fs/promises';
import { join } from 'path';

fs.readFile('./text.txt', 'utf8')
    .then(data => console.log(data))
    .catch(err => console.log(err));
    
    // async version
    const readFile = async ()=> {
    try {
        const data = await fs.readFile('./text.txt', 'utf8');
        console.log(data);
        
    } catch (error) {
        console.log(err)
    }
}

readFile();
//--------------------------------------
// overwrite
const writeFile = async () => {
    try {
      await fs.writeFile('./text.txt', 'Hello, I am writing this pretty text to be added');
      console.log('File written to...')  
    } catch (err) {
        console.log(err);
    }
}

writeFile();


//append text

const appendFile = async ()=> {
    try {
        await fs.appendFile('./text.txt', ' I just wanna add this :/')
    } catch (err) {
       console.log(err) 
    }
}

appendFile();