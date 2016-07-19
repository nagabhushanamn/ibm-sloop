/**
 * http://usejsdoc.org/
 */

var fs = require('fs');

fs.open('veg-menu.txt', 'r', function(err, fd) {

	console.log('veg-menu.txt file opened....');

	var buffer = new Buffer(10000);

	fs.read(fd, buffer, 0, 10000, null, function(err, len) {
		console.log('veg-menu.txt file red....');
		console.log(buffer.toString('utf8', 0, len));
	});

	fs.close(fd, function() {
		console.log('veg-menu.txt closed..');
	});

});



fs.open('nonveg-menu.txt', 'r', function(err, fd) {

	console.log('nonveg-menu.txt file opened....');

	var buffer = new Buffer(10000);

	fs.read(fd, buffer, 0, 10000, null, function(err, len) {
		console.log('nonveg-menu.txt file red....');
		console.log(buffer.toString('utf8', 0, len));
	});

	fs.close(fd, function() {
		console.log('nonveg-menu.txt closed..');
	});

});

console.log('contine with other-work....');
