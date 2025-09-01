import { createServer } from 'http';

const PORT = process.env.PORT;

const users = [
    { id: 1, name: "Sara Nasser" },
    { id: 2, name: "johnny Deep" },
    { id: 3, name: "Micheal Jackson" },
    { id: 4, name: "Alon Musk" },
];

// logger middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

const server = createServer((req, res)=> {
    logger(req, res, ()=> {
        if(req.url === "/api/users" && req.method === "GET") {
            res.setHeader('Type-Contact', 'application/json');
            res.write(JSON.stringify(users));
            res.end();
    
        } else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === "GET") {
            const id = req.url.split('/')[3];
            console.log(id)
            res.setHeader('Type-Contact', 'application/json');
            res.write(JSON.stringify(users[id -1]));
            res.end();
            
        } else {
            res.setHeader('Type-Contact', 'application/json');
            res.statusCode = 404;
            res.write(JSON.stringify({ massage: 'Route Not Fount' })); 
            res.end();
        }
    });
});

server.listen(PORT, ()=> console.log(`server running on port ${PORT}`))