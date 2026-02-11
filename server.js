const express = require('express'); //importing express
const app = express(); //calling express as app

app.get('/', (req, res) =>{
    console.log('Here');
    res.render('index')
});

app.get('/potato', (req, res)=>{
    res.send('<p> Here is your potatoes</p>')
});

app.get('/status', (req,res)=>{
    res.send('Page not found').sendStatus(404)
});

app.listen(3030); //3030 is a port