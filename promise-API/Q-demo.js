/**
 * http://usejsdoc.org/
 */

var Q = require('q');

//function service1() {
//
//	var defer = Q.defer();
//
//	setTimeout(function() {
//		//defer.resolve("result1");
//		defer.reject('service1 failed..');
//		//console.log('service-1 returned result...');
//		console.log('service-1 rejected.....');
//	}, 5000);
//
//	return defer.promise;
//}
//
//function service2() {
//
//	var defer = Q.defer();
//
//	setTimeout(function() {
//		defer.resolve("result2");
//		console.log('service-2 returned result...');
//	}, 1000);
//
//	return defer.promise;
//}
//
//Q.any([ service1(), service2() ]).then(function(results) {
//	console.log(results);
//}, function(reason) {
//	console.log('something wrong...');
//});


//console.log('other work....');

//------------------------------------------------------




function service(){
	
	var defer=Q.defer();
	
	setTimeout(function() {
		defer.notify("10%");
	}, 1000);
	setTimeout(function() {
		defer.notify("20%");
	}, 2000);
	setTimeout(function() {
		defer.resolve("RESULT");
	}, 5000);
	
	return defer.promise;
}



//------------------

var promise=service();

promise
.then(function(result) {
	console.log('success-'+result);
	return "New RESULT";
}, function(error) {
	console.log('fail-'+error);
}, function(progress) {
	console.log('progress-'+progress);
})
.then(function(result) {
	console.log('success-'+result);
});

//----------------------------------------

















