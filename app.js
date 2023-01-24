// Libraries
const express = require('express');
const ejs = require('ejs');
const path = require('path');

const app = express();
const port = 3000;
/*
const logger1 = (req, res, next) => {
  console.log('Logger 1 çalıştı');
  next();// çalışan middleware'in işlemini bitirdikten sonra bir sonraki middleware aktarılmasını sağlar
  // next methodu ile request respons döngüsünün devamlılığı sağlanır.
};
*/

// TAMPLATE ENGINGE
app.set('view engine', 'ejs');

// MIDDLEWARES
app.use(express.static('public'));

// ROUTERS
app.get('/', (req, res) => {
  //res.sendFile(path.resolve(__dirname, 'temp/index.html'));
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/addphoto', (req, res) => {
  res.render('add_photo');
});

app.listen(port, () => {
  console.log(`Sunucu portu : ${port} ...`);
});
