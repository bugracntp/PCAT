const express = require('express');
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

// MIDDLEWARES
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'temp/index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'temp/about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'temp/contact.html'));
});

app.listen(port, () => {
  console.log(`Sunucu portu : ${port} ...`);
});
