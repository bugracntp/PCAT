// Libraries
const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');

const ejs = require('ejs');
const methodOverride = require('method-override');

const photoController = require('./controllers/photoControllers');
const pageController = require('./controllers/pageControllers');


const app = express();
const port = 3000;
/*
const logger1 = (req, res, next) => {
  console.log('Logger 1 çalıştı');
  next();// çalışan middleware'in işlemini bitirdikten sonra bir sonraki middleware aktarılmasını sağlar
  // next methodu ile request respons döngüsünün devamlılığı sağlanır.
};
*/

// DB connection
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost/pcat-test-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// TAMPLATE ENGINGE
app.set('view engine', 'ejs');

// MIDDLEWARES
app.use(express.static('public'));
// body nesnesindeki nesneleri yakalamak için 2 adet middleware oluşturduk.
app.use(express.urlencoded({ extended: true })); // url de ki datayı okumaya yarıyor
app.use(express.json()); // url deki datayı json a çevirmeye yarıyor
app.use(fileUpload()); // dosya yüklemek için gerekli olan middleware,
app.use(
    methodOverride('_method', {
        methods: ['POST', 'GET'],
    })
); // PUT methodunu post veya get gibi simüle etmeye yarar.

// ROUTERS
app.get('/about', pageController.aboutPage);
app.get('/addphoto', pageController.addPage);
app.get('/photos/edit/:id', pageController.editPage);
app.get('/', photoController.getAllPhotos);
app.get('/photos/:id', photoController.getPhoto);
app.post('/photos', photoController.createPhoto);
app.put('/photos/:id', photoController.updatePhoto);
app.delete('/photos/:id', photoController.deletePhoto);

app.listen(port, () => {
    console.log(`Sunucu portu : ${port} ...`);
});
