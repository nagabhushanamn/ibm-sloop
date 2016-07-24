/**
 * http://usejsdoc.org/
 */

(function() {

	var app = angular.module('shop', [ 'ui.router', 'store' ]);
	app.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise("/");

		$stateProvider.state('home', {
			url : "/",
			templateUrl : "templates/shop.html"
		});
	});
	

})();