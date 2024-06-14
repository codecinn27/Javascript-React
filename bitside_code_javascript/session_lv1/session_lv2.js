// npm i express express-session
const express = require('express');
const app = express();
const session = require('express-session');

const sessionOptions = { secret: 'thisisnotagoodsecret', resave:false, saveUninitialized:false};
app.use(session(sessionOptions));

app.get('/', (req, res)=> {
  res.send('Hello World');
}) 

//http://localhost:3000/register?username=colt
app.get('/register', (req,res)=>{
    const {username= 'Anonymous'} = req.query;
    req.session.username = username;
    res.redirect('/greet');
})

app.get('/greet', (req,res)=>{
    const {username} = req.session;
    res.send(`Welcome back, ${username}`);
})

app.listen(3000,()=>{
 console.log("starting...");
});