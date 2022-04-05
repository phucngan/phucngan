var express = require('express');
var expressHbs = require('express-handlebars');
var app = express();

app.listen(1900);
app.use(express.static('css'));
app.use(express.static('images'));

app.engine('.hbs', expressHbs.engine({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.get('/home', function (req, res ){
    res.render('index');
});
app.get('/product', function (req, res ){
    res.render('product');
});
app.get('/contact', function (req, res ){
    res.render('contact');
});