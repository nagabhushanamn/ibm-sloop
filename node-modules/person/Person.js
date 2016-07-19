/**
 * http://usejsdoc.org/
 */

"use strict";

//function Person(name) {
//	this.name = name;
//}
//Person.prototype.sayName = function() {
//	console.log('im ' + this.name);
//}


class Person{
	constructor(name){
		this.name=name;
	}
	sayName(){
		console.log('im ' + this.name);
	}
}

//var person = new Person('Nag');

module.exports = Person;