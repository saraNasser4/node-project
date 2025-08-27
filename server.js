//4
import http from 'http';
const PORT = 8000;

const server = http.createServer((req,res)=>{
    //res.setHeader('Content-Type', 'text/html');  // or text/plain
    //res.statusCode = 404;
    //res.end("<h1>Hello World</h1>")

    //res.writeHead(500, { 'Content-Type': 'application/jason'});
    //res.end(JSON.stringify({ message: 'Server Error' }));

    res.writeHead(200, { 'Content-Type': 'text/html'});
    res.end("<h1>Hello World</h1>");
})

server.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
})

