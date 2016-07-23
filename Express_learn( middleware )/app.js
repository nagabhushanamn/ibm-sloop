/**
 * http://usejsdoc.org/
 */

var express = require('express');
var compression = require('compression');
var app = express();



// Third-party middleware

app.use(compression());

//-----------------------------------------------

//built-In middleware

app.use("/",express.static('public'));
app.use("/css",express.static('public/bootstrap/dist/css'));

//-----------------------------------

// Application-Level middlewares

//app.use(function(req, res, next) {
//	console.log('Time:' + Date.now());
//	next();
//});
//
//app.use('/users/:id', function(req, res, next) {
//	res.send('USEER');
//});

//----------------------------------------------

// Router-Level middleware

//var productsRouter=express.Router();
//productsRouter.get("/", function(req, res,next) {
//
//	//next(new Error("Loading failed"));
//	
//	 res.send("PRODUCTS");
//});
//
//app.use("/products",productsRouter);

//-----------------------------------------------

// Error Handling Middleware

//app.use(function(err,req, res, next) {
//	res.status(500).send(err.message);
//});

//---------------------------------------------





app.listen(3000, function() {
	console.log('server at http://localhost:3000/');
});