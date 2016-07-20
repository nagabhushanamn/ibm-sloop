/**
 * http://usejsdoc.org/
 */

"use strict";

class Person{
	
	constructor(name,age){
		this.name=name;
		this.age=age;
		console.log('Person constructor');
	}
	
	sayName(){
		console.log('im '+this.name);
	}
	
	static staMethod(){
		console.log('person staticMethod()');
	}
	
}



// Person.staMethod();
// var person=new Person('Nag',32);


// --------------------------------------------------


class Employee extends Person{
	
	
// constructor(name,age,salary){
// super(name,age);
// this.salary=salary;
// }
	
}


var emp=new Employee('nag',32,1000);
emp.sayName();



