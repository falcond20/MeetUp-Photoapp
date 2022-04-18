const express = require('express');


var app = express();
var router = express.Router();
app.set('view engine', 'ejs'); // using ejs as the view engine
app.use('/assets', express.static('assets'));

router.get('/',function (req,res) {


  res.render("newconnection");
});

module.exports = router;
