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
		//res.render('pm',{allProducts:items});
		res.json(items);
	});
});

router.get('/:id', function(req, res, next) {
	Product.findOne({id:req.params.id},function(err,item){
		console.log(item);
		//res.render('product-form',{product:item});
		res.json(item);
	});
});

router.post('/', function(req, res, next) {

	var id = req.body.id;
	var name = req.body.name;
	var price = req.body.price;
	var description = req.body.description;

	var product = new Product();
	product.id=id;
	product.name = name;
	product.price = price;
	product.description = description;

	product.save(function(err, product, numberAffected) { // Non-blocking IO
		if (err) {
			next(err);
		}
		console.log(product);
		//res.render('pm');
		//res.redirect('products');  // to re-load all products...
		res.status(201).json(product);
	});

});
router.put('/', function(req, res, next) {
	//res.render('pm');
	


	var id = req.body.id;
	var name = req.body.name;
	var price = req.body.price;
	var description = req.body.description;

	var doc={
			id:id,
			name:name,
			price:price,
			description: description
	};
	
	console.dir(doc);

	Product.update({id:id},doc,function(err, product, numberAffected) { // Non-blocking IO
		if (err) {
			next(err);
		}
		console.log(product);
		//res.render('pm');
		//res.redirect('products');  // to re-load all products...
		res.status(202).json(product);
	});


	
});

router['delete']('/:id', function(req, res, next) {
	
	Product.remove({id:req.params.id}, function(err,item) {
		//res.redirect('/products');
		res.status(200);
	});
	
	
	
});

module.exports = router;
