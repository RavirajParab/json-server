const express = require('express');
const app = express();
const port = process.env.PORT || 3002;
//define the root
app.get('/',(req,res)=>{
    res.send(`<div>
        <h1>Welcome to Express App</h1>
    </div>`)
});

app.listen(port);