var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Red Bridge' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Red Bridge' });
});

router.get('/features', function(req, res, next) {
  res.render('features', { title: 'Red Bridge' });
});


module.exports = router;
