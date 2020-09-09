const jsonServer = require('json-server');
const cors = require("cors");
const jsonResetMiddleware = require("json-server-reset");

const resetDB = (req, res, next) => {
    if (req.method === 'GET' && req.url.endsWith('/reset/')) {
      const db = JSON.parse(fs.readFileSync('db.json', 'utf8'));
      router.db.setState(db);
      res.sendStatus(201);
    } else {
      next();
    }
  };

const server = jsonServer.create();
server.use(resetDB);
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