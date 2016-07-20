/**
 * http://usejsdoc.org/
 */

var calc = {
	result : 0,
	add : function(n1, n2) {
		var self = this;
		setTimeout(function() {
			var r = n1 + n2;
			self.result = r;
		}, 5000);

	}
};
