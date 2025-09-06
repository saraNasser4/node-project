import { createServer } from 'http';
import logger from './loggerMiddleware.js';

const PORT = process.env.PORT;

const users = [
    { id: 1, name: "Sara Nasser" },
    { id: 2, name: "johnny Deep" },
    { id: 3, name: "Micheal Jackson" },
    { id: 4, name: "Alon Musk" },
];

// cleanup 
// json middleware 
const jsonMiddleware = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
}
//Route handler for GET /api/users
const getUserHandler = (req, res) => {
    res.write(JSON.stringify(users));
    res.end();
}

//Route handler for GET /api/users/:id
const GetUserByIdHandler = (req, res) => {
    const id = req.url.split('/')[3];
    const user = users.find(u => u.id === parseInt(id));
    if(user) {
        res.statusCode = 200;
        res.write(JSON.stringify(user));
    } else {
        res.statusCode = 404;
        res.write(JSON.stringify({ message: 'User Not Found' }))
    }
    res.end();
}

//Route Not found route handler 
const notFoundRouteHandler = (req, res) => {
    res.statusCode = 404;
    res.write(JSON.stringify({ massage: 'Route Not Found' })); 
    res.end();
}

const server = createServer((req, res)=> {
    logger(req, res, ()=> {
        jsonMiddleware(res, req, ()=> {
            if(req.url === "/api/users" && req.method === "GET") {
                getUserHandler(req, res);
    
            } else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === "GET") {
                GetUserByIdHandler(req, res);
                                 
            } else {
                notFoundRouteHandler(res, req); 
            }
        });
    });
});

server.listen(PORT, ()=> console.log(`server running on port ${PORT}`));