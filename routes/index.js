var express = require('express');
const { append } = require('express/lib/response');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'INICIO' });
});

module.exports = router;


