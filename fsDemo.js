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