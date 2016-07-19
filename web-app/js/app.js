/**
 * http://usejsdoc.org/
 */

// using DOM API

document.addEventListener('DOMContentLoaded',function(e){

	console.log('DOM ready');	

	var box = document.querySelector('.jumbotron');
	var hideBtn = document.querySelector('.btn-danger');
	var showBtn = document.querySelector('.btn-primary');

	hideBtn.addEventListener('click', function(e) {
		box.style.display = 'none';
	});
	showBtn.addEventListener('click', function(e) {
		box.style.display = '';
	});
	
});