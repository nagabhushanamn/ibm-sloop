/**
 * http://usejsdoc.org/
 */

module.exports = function(app) {
	console.log('inserting sample coffee-shops');
	// data sources
	var mongo_DS = app.dataSources.mongo_DS;
	// create coffee shops
	function createCoffeeShops(cb) {
		mongo_DS.automigrate('CoffeeShop', function(err) {
			if (err)
				return cb(err);
			app.models.CoffeeShop.create([ {
				name : 'Bel Cafe',
				city : 'Vancouver'
			}, {
				name : 'Three Bees Coffee House',
				city : 'San Mateo'
			}, {
				name : 'Caffe Artigiano',
				city : 'Vancouver'
			} ], cb);
		});
	}
	createCoffeeShops(function(err) {
		if (err)
			throw err;
		console.log('>> models created successfully');
	});

};