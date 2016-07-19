/**
 * http://usejsdoc.org/
 */

var enHello = require('./english');
var esHello = require('./spanish');

function sayHello(lang) {
	if (lang === 'en') {
		enHello();
		return;
	}
	if (lang === 'es') {
		esHello();
		return;
	}
	console.log("VANAKKAM");
}

function f1() {

}

// sayHello();

module.exports = sayHello;