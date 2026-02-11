const express = require('express'); //importing express
const app = express(); //calling express as app

app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    console.log('Here');
    res.render('index', {text:'good afternoon'})
});

app.get('/users', (req, res)=>{
    res.send('User List');
});

app.get('/users/new', (req, res)=>{
    res.send('User New Form');
});

app.listen(3030); //3030 is a port