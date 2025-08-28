//4
import http from 'http';
const PORT = process.env.PORT;

const server = http.createServer((req,res)=>{
    //res.setHeader('Content-Type', 'text/html');  // or text/plain
    //res.statusCode = 404;
    //res.end("<h1>Hello World</h1>")

    //res.writeHead(500, { 'Content-Type': 'application/jason'});
    //res.end(JSON.stringify({ message: 'Server Error' }));
    
    console.log(`url: ${req.url}`);
    console.log(`method: ${req.method}`);  //postman will help
    
    //res.writeHead(200, { 'Content-Type': 'text/html'});
    //res.end("<h1>Hello World</h1>");

    try{
        if(res.method === "GET") {

            if(res.url === "/") {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end("<h1>Hello World!</h1>");
            
            } else if(res.url === "/about") {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end("<h1>About the World!</h1>");

            } else {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end("<h1>Not Found</h1>");
            }
        } else {
            throw new Error("Method not Allowed");
        }
    }catch {
        res.writeHead(500, { 'Content-Type': 'text/plain' });   //500--> server error
        res.end("Server Error");
    }
})

server.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
})

