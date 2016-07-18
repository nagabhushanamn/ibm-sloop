/**
 * http://usejsdoc.org/
 */

//-------------------------------
// a. String
var name = "Nag";
var selection = 'a';

// -------------------------------

// b. Number

var count = 10;
var cost = 12.12;

// -------------------------------

// c. boolean

var found = false;

/*
 * imp note : falsy values in js-lang
 * 
 * false,"",null,undefined,0,NaN
 * 
 */

// -------------------------------
// null
var person = null;

// -------------------------------

// undefined

var v;

// -------------------------------

// =================================================

// how to create an obj ?

/*
 * new ConstructorFunction();
 * 
 */

var person = new Object();
person.name = 'Nag';
person.age = 32;
person.doWork = function() {
	console.log('teaching JS');
};

delete person.age;


//----------------------------------------------------


/*
 *  some built-in types with literal syntax
 * 
 * 
 *  a. Object
 *  b. Array
 *  c. RegExp
 *  d. Function
 * 
 */

//----------------------------------------------------

// 1. Object  --> to create obj's wrapper

var person = new Object();
person.name = 'Nag';
person.age = 32;
person.doWork = function() {
	console.log('teaching JS');
};

// literal style

var person={
		name:'Nag',
		age:32,
		doWork:function(){
			console.log('teaching JS');
		}
};

//----------------------------------------------------

// 2. Array

var arr=new Array();
arr.push('red');
arr.push('green');
arr.push('blue');

// literal style

var colors=['red','green','blue'];

//----------------------------------------------------

// 3. RegExp

var ssn=new RegExp("\\d{3}-\\d{2}-\\d{4}");

//literal style

var ssn=/\d{3}-\d{2}-\d{4}/;


//----------------------------------------------------

// 4. Function

var add=new Function("n1","n2","var result=n1+n2;return result;");

// literal style

function add(n1,n2){
	var result=n1+n2+add.prop;
	return result;
}

add.prop=123;
add.method=function(){
	console.log('sum...');
};

//add(12,13);
//add.method();

//----------------------------------------------------


// How do access obj's properties



/*
 * 2 ways
 * 
 * way-1 : '.' notation
 * way-2 : '[]' notation
 * 
 * 
 */


//var person={
//		name:'Nag',
//		'full-name':'Nag N'
//};
//
//console.log(person.name);
////console.log(person['name']);
//console.log(person['full-name']);
//
//var v='name';
//console.log(person[v]);


//------------------------------------------------------


