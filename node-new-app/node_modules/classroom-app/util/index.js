/**
 * http://usejsdoc.org/
 */

var _ = require('underscore');

// var arr = [ 10, 20, 30 ];
// console.log(_.max(arr));

var util = {
	findMaxArray : function(arr) {
		return _.max(arr);
	},
	findMinArray: function(arr) {
		return _.min(arr);
	},
};

module.exports = util;