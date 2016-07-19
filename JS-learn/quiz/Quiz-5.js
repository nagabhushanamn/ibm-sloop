/**
 * http://usejsdoc.org/
 */

var trainer = {
	doTeach : function() {

		console.log('teaching...');
		var name = "Nag"; // moved to heap
		setTimeout(function() {
			try {
				console.log('learning....with ' + name);
				// throw new Error('i hate js');
			} catch (e) {
				console.log('i caught ' + e.message);
			}
		}, 5000);
		console.log('teaching ends..');

	}
};

trainer.doTeach();