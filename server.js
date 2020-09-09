const jsonServer = require('json-server');
const cors = require("cors");
const jsonResetMiddleware = require("json-server-reset");

const server = jsonServer.create();
const router = jsonServer.router('db.json');

const middlewares = jsonServer.defaults();
const FinanceApp = require('./Routes/Finance');
const port = process.env.PORT || 3000;

server.use(cors());
server.use('/finance',FinanceApp);
server.use(middlewares);
server.use(jsonResetMiddleware);
server.use(router);
server.listen(port);