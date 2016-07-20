/**
 * http://usejsdoc.org/
 */

// hotel-module
var hotel = {
	getFood : function() {

		var promise = new Promise(function(resolve, reject) {

			setTimeout(function() {
				//resolve('Biryani');
				reject('SORRY..');
			}, 5000);

		});

		return promise;

	}
};

// trainer-module

var trainer = {

	doTeach : function() {
		console.log('teaching.....');
		console.log('hungry..requesting hotel.');
		var promise = hotel.getFood();
		console.log('got promise..');
		promise.then(function(value) {
			console.log('yummy..with ' + value);
		}, function(reason) {
			console.log('oops , shud go out...');
		});
		console.log('continuing with further teaching...ends');
	}

};


trainer.doTeach();