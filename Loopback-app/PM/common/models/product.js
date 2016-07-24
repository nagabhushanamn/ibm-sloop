module.exports = function(Product) {

	// 
	Product.findByPrice = function(price, cb) {

		Product.find(function(err, items) {
			if (err) {
				cb(err, null);
			}
			items.forEach(function(item) {
				if (item.price === price) {
					cb(null, item);
					return;
				}
			});
		});

	};

	Product.remoteMethod('findByPrice', {
		http : {
			path : '/price',
			verb : 'get'
		},
		accepts : {
			arg : 'price',
			type : 'number',
			http : {
				source : 'query'
			}
		},
		returns : {
			arg : 'item'
		}
	});

};
