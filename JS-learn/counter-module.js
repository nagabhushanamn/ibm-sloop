/**
 * http://usejsdoc.org/
 */

//function init() {
//
//	// private
//	var count = 0;
//
//	// public
//	return {
//		doCount : function() {
//			count++;
//		},
//		getCount : function() {
//			return count;
//		}
//	};
//
//}
//var counter = init();

//------------------------------------------------


//module design pattern : IIFE / self executable function

var counter = (function() {
	
	var count = 0;
	
	return {
		doCount : function() {
			count++;
		},
		getCount : function() {
			return count;
		}
	};

})();









