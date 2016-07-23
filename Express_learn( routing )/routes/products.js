/**
 * http://usejsdoc.org/
 */

var express = require('express');
var router = express.Router();

router.get("/",function(req, res) {
	res.send("GET : /products");
});

router.post("/",function(req, res) {
	res.send("POST : /products");
});

router.put("/",function(req, res) {
	res.send("PUT : /products");
});

router.delete("/:id",function(req, res) {
	res.send("DELETE : /products");
});

module.exports = router;
