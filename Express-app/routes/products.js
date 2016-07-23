var express = require('express');
var router = express.Router();

var Product = require('../model/Product');

/* GET products . */
router.get('/', function(req, res, next) {
	console.log('loading all products');
	Product.find({},function(err,items){
		if(err){
			next(err);
			return;
		}
		res.render('pm',{allProducts:items});
	});
});
router.get('/:id', function(req, res, next) {
	res.render('pm');
});
router.post('/', function(req, res, next) {

	var name = req.body.name;
	var price = req.body.price;
	var description = req.body.description;

	var product = new Product();
	product.name = name;
	product.price = price;
	product.description = description;

	product.save(function(err, product, numberAffected) { // Non-blocking IO
		if (err) {
			next(err);
		}
		console.log(product);
		res.render('pm');
	});

});
router.put('/', function(req, res, next) {
	res.render('pm');
});
router['delete']('/:id', function(req, res, next) {
	res.render('pm');
});

module.exports = router;
