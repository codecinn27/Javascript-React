//npm i express ejs 
// run auto_createFile.bat
//paste expressjs file
//npm install apexcharts
const express = require('express');
const path = require('path');
const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Route to render the overall page
app.get('/', (req, res) => {
    res.render('overall');
  });

app.get('/lv2', (req, res) => {
    res.render('lv2');
});

// Start the server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})