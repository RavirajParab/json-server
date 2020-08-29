const express = require('express');
const app = express();
//define the root
app.get('/',(req,res)=>{
    res.send(`<div>
        <h1>Welcome to Express App</h1>
    </div>`)
});

app.listen(5000);