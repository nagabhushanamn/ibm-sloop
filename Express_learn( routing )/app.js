/**
 * http://usejsdoc.org/
 */

var express = require('express');
var app = express();


//app.get("/", function(req, res) {
//	res.send("Hello, Welcome to Express-World");
//});

//--------------------------------------------------


// Routing     --> finding request end-points
//----------

/*
 *  --> by path
 *  --> by HTTP method
 *  --> by headers/params
 *  --> by request-body payload
 *  --> by authentication/authrozation
 *  
 * 
 */

app.all("/", function(req, res,next) {
	console.log('ALL : /');
	next();
});

app.get('/', function(req, res) {
	res.send('GET : /');
});

app.post('/', function(req, res) {
	res.send('POST : /');
});


app.get('/about', function(req, res) {
	res.send('GET : /about');
});


// wildcard based matching

app.get('/ab?cd', function(req, res) {
	res.send('GET : /ab?cd');
});
app.get('/ab+cd', function(req, res) {
	res.send('GET : /ab+cd');
});
app.get('/ab*cd', function(req, res) {
	res.send('GET : /ab*cd');
});
app.get('/ab(cd)?e', function(req, res) {
	res.send('GET : ab(cd)?e');
});

// based on RegExp

app.get(/.pdf$/, function(req, res) {
		res.send('GET : PDF');
});

// based on route-params  ( in REST API )

// e.g URL : /users/nag

app.get('/users/:username', function(req, res) {
	res.send('GET : '+req.params.username);
});

// e.g /customers/12345/accounts/456

app.get('/customers/:custId/accounts/:accId', function(req, res) {
	res.json(req.params);
});

//------------------------------------------

//route-handler(s)

function auth(req, res, next) {
	console.log('authenticating...');
	var isAdmin = true;
	if (!isAdmin) {
		res.send('You r not admin..');
	} else {
		req.name="Nagbhushanam";
		next();
	}
}

function dashbord(req, res) {
	res.send('Welcome to admin dashborad..'+ req.name);
}

app.get('/admin',[auth,dashbord]);

//--------------------------------------------------


// response - methods
/*
 *   end()
 *   send()
 *   sendFile()
 *   download()
 *   sendStatus()
 *   redirect()
 *   render()
 *   
 * 
 * 
 */

// prompt a file to be downloaded
//app.get('/download', function(req, res) {
//	res.download('package.json');
//});


//app.use(function(req, res, next) {
//	res.sendStatus(404);
//});


//app.get("/search", function(req, res) {
//	res.redirect("http://www.google.com");
//});


//--------------------------------------------------

//view engine setup
//app.set('views', 'views');
//app.set('view engine', 'ejs');

//-------------------------------------------------

//app.get('/page', function(req, res) {
//	
//	var record={name:'Nag',age:32};  // loaded from DB
//	res.render('user-view',{user:record});
//	
//});


//---------------------------------------------------


//app.route('/products')
//.get(function(req, res) {
//	res.send("GET : /products");
//})
//.post(function(req, res) {
//	res.send("POST : /products");
//})
//.put(function(req, res) {
//	res.send("PUT : /products");
//})
//['delete'](function(req, res) {
//	res.send("DELETE : /products");
//});

//--------------------------------------------------

//var products=require('./routes/products');
//app.use("/products",products);


//---------------------------------------------------

// Middleware
//--------------

/*
 *   function which takes req & resp 
 *   
 *   types
 *   
 *   1. Application-Level middleware
 *   2. Router-Level middleware
 *   3. Error-Handling middleware
 *   
 *   4. Built-in middleware     ( static-file middleware )
 *   5. Third-party middleware
 * 
 * 
 */



//===================================================

app.listen(3000, function() {
	console.log('server running at http://localhost:3000/');
});

//===================================================