const express = require('express'); //importing express
const app = express(); //calling express as app
const userRouter = require('./routes/users');
const wordRouter = require('./routes/words');

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use('/users', userRouter);
app.use('/words', wordRouter);

app.get('/',
    (req,res)=>{
        console.log('Here');
        res.render('index',{userName: "Unknown"});
    }
);

app.listen(3030); //3030 is a port