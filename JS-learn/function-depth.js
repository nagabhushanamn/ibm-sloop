/**
 * http://usejsdoc.org/
 */


/*
 * in JS , we can declare/create function in 2 ways
 * 
 *  a. function-declaration
 *  b. function-expression
 * 
 */


//1.function-declaration

//console.log(add(12,13));
//function add(a,b){
//	return a+b;
//}
//console.log(add(12,13));

//-----------------------------------------

// 2. function-expression

//console.log(add(12,13));  // error

var add=function(a,b){
	return a+b;
};

//console.log(add(12,13));

//-----------------------------------------

//
//function teach() {
//
//	listen();
//
//	var learn = function() {
//		console.log('learning...');
//	};
//
//	console.log('teching.....');
//	learn();
//
//	function listen() {
//		console.log('started to listen');
//	}
//
//}
//
//teach();

//-----------------------------------------

// functions as values

function sayHello(){
	console.log('Hello..');
}

var sayHi=sayHello;
//sayHi();



//-------------------------------------------

// function as arguments

// Ex-1

function greet(g){
	if(g){
		g();
		return;
	}
	console.log("Hello");
}

//greet();
//greet(function(){console.log('ola');});

// EX-2

var nums=[1,3,5,7,9,2,4,6,8,10];
//nums.sort();
nums.sort(function(a, b) {return a-b;});

//-------------------------------------------

//function as return-values

function teach(){
	console.log('teaching....');	
	
	function learn(){
		console.log('learning..');
	}
	//learn();
	
	return learn;

}

//var learnFunc=teach();
//learnFunc();
//learnFunc();

//-------------------------------------------


// functions args
//-----------------

//function reflect(a){
//	console.dir(arguments);
//	return arguments[0];
//}
//
//console.log(reflect(12,13,14));



//e.g

//
//function sum(){
//	
//	var i=0,
//	    len=arguments.length,
//	    result=0;
//	
//	while(i<len){
//		result+=arguments[i];
//		i++;
//	}
//	
//	return result;
//	
//}

//-------------------------------------------

// var-scope

/*
 *   --> global-scope
 *   --> context/function - scope
 *   --> block-scope with 'let' keyword ( from Es6 )
 * 
 */


var i = 100;  // global - scope

function f() {
	
	if(1===1){
		let i = 200;   // block-scope
	}
	console.log(i);
}
f();


//-------------------------------------------



















