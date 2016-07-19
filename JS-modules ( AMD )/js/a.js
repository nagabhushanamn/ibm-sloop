/**
 * http://usejsdoc.org/
 */

//(function() {
//
//	var i=100;
//	
//	App.b.doWork();
//	App.c.doWork();
//	
//	var o = {
//		doWork : function() {
//			console.log('im A');
//		}
//	};
//	
//	App.a=o;  // export
//
//})();

//--------------------------------------


define('js/a',['js/b','js/c'],function(b,c){
	
	b.doWork();
	c.doWork();
	
	var o = {
	doWork : function() {
		console.log('im A');
	}
	};
	
	return o;
	
});







