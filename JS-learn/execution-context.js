/**
 * http://usejsdoc.org/
 */

// var a=undefined
// console.log(a);
// var a = 12;

//-------------------------------

//var a = 12;
//
//function f1() {
//	//var a;
//	console.log(a);
//	var a = 13;
//}
//f1();

//-------------------------------

var a=10;

function f1(){
	
	function f2(){
		console.log(a);
	}

	//f2();
	
	//var a=20;
	
	return f2;
}

var f=f1();
f();

//-------------------------------












