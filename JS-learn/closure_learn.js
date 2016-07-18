/**
 * http://usejsdoc.org/
 */

/*
 * 
 * A closure is a function having access to the parent scope, 
 * even after the parent function has closed.
 * 
 * 
 *  why we need ?
 *  
 *  --> to abstract public-behav of any module.
 *  --> while executing asynch , to acess parent-scoped data.
 * 
 * 
 */

function teach(sub) {

	console.log('teaching ' + sub);
	var notes = 'JS-notes';
	var i=100;
	function learn() {
		console.log("learning " + sub + "- with " + notes);
	}

	console.log('teaching end...');

	return learn;
}

var learnFunc = teach("JS");
learnFunc();
learnFunc();