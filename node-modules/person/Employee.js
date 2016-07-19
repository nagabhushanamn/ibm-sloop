/**
 * http://usejsdoc.org/
 */

"use strict";

var Person=require('./Person');


class Employee extends Person{
	
	sayName(){
		console.log('dude , im '+this.name);
	}
	
}

module.exports=Employee;