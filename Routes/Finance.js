const Express = require('express');
const fetch = require('node-fetch');

const FinanceApp = Express.Router();
// define the route for the finance Mini App
FinanceApp.get('/',async (req,res)=>{
 const response = await fetch(`https://etmarketsapis.indiatimes.com/ET_Stats/getIndexByIds?indexid=2369&exchange=50&pagesize=50&sortorder=desc&sortby=percentChange&company=true&indexname=Nifty+50&pageno=1`)
 const data = await response.json();
 const prices = data.searchresult[0].companies.map(scrip=>{
     return {
         'Symbol': scrip.nseScripCode,
         'Price': Number(scrip.current)
     }
 });
 res.json(prices);
});
module.exports = FinanceApp;