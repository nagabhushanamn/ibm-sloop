/**
 * http://usejsdoc.org/
 */


var person={
		name:'Nag',
		age:32
};

//var str="person -"+person.name +" age -"+person.name;

// ES6

var str=`person - ${person.name} , age - ${person.age}`;

console.log(str);