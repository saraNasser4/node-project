import { createServer } from 'http';
import logger from './loggerMiddleware.js';

const PORT = process.env.PORT;

const users = [
    { id: 1, name: "Sara Nasser" },
    { id: 2, name: "johnny Deep" },
    { id: 3, name: "Micheal Jackson" },
    { id: 4, name: "Alon Musk" },
];

console.log()
const server = createServer((req, res)=> {
    logger(req, res, ()=> {
        if(req.url === "/api/users" && req.method === "GET") {
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.write(JSON.stringify(users));
            res.end();
    
        } else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === "GET") {
            const id = req.url.split('/')[3];
            const user = users.find(u => u.id === parseInt(id));
            res.setHeader('Content-Type', 'application/json');

            if(user) {
                res.statusCode = 200;
                res.write(JSON.stringify(user));
            } else {
                res.statusCode = 404;
                res.write(JSON.stringify({ message: 'User Not Found' }))
            }
            res.end();
            
        } else {
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 404;
            res.write(JSON.stringify({ massage: 'Route Not Found' })); 
            res.end();
        }
    });
});

server.listen(PORT, ()=> console.log(`server running on port ${PORT}`));