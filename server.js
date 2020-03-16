const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));

//Express HBS Engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');



// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {

    res.render('home', {
        nombre: 'Brian',
        anio: new Date().getFullYear()
    });

    // res.render('about', {
    //     nombre: 'Brian',
    //     anio: new Date().getFullYear()
    // });
});


app.get('/about', function(req, res) {
    res.render('about', {
        nombre: 'Brian',
        anio: new Date().getFullYear()
    });

});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});