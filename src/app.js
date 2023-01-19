
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const exphbs = require('express-handlebars');
const app = express();
const cors = require('cors');


app.set('models',path.join(__dirname,'models'));
app.engine('.hbs', exphbs.create({
    defaultLayout: 'main',
    extname: '.hbs',
}).engine);


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false }));



//Establecemos las rutas 
app.use(require("./routes/routes"))

//Establecemos donde se encontrará nuestro sitio 
app.use(express.static(path.join(__dirname,'public')));


module.exports = app;