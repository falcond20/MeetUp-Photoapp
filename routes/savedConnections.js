const express = require('express');

var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser  = bodyParser.urlencoded({extended:false});
app.set('view engine', 'ejs'); // using ejs as the view engine
app.use('/assets/images', express.static('assets/images'));




router.post('/',urlencodedParser, function (req,res, next){



//console.log(req.query.code);
res.render("savedConnections");



});

 module.exports = router;
