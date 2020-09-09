const Express = require('express');
const fs = require('fs');
const CleanupApp = Express.Router();

// define the route for the finance Mini App
CleanupApp.get('/',async (req,res)=>{
  await fs.writeFileSync('db.json',JSON.stringify(initialJSON));
  res.send(`Server data initialized`);
});
module.exports = CleanupApp;

const firstJSON= {
  "users":[],
  "securities":[]
}
const initialJSON= {
    "users": [
      {
        "id": 0,
        "Username": "Alex",
        "Email": "alesky@gmail.com",
        "Password": "alex56#king"
      }
    ],
    "securities": [
      {
        "id": 0,
        "Symbol": "SUNPHARMAEQ",
        "Quantity": 15,
        "Open": true, 
        "PL": 0
      }
    ]
  }
