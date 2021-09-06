var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '2021 DUSAD', page: 'main'});
});
router.get('/about', function(req, res, next) {
  res.render('index', { title: '2021 DSUAD ABOUT', page: 'about'});
});
router.get('/archive', function(req, res, next) {
  res.render('index', { title: '2021 DSUAD ABOUT', page: 'archive'});
});
router.get('/participants', function(req, res, next) {
  res.render('index', { title: '2021 DSUAD ABOUT', page: 'participants'});
});
router.get('/epilogue', function(req, res, next) {
  res.render('index', { title: '2021 DSUAD ABOUT', page: 'epilogue'});
});

module.exports = router;
