/**
 * http://usejsdoc.org/
 */

(function() {

	var storeMod = angular.module('store', [ 'lbServices' ]);

	// ---------------------------------------------------------

	// Controller - component
	storeMod.controller('StoreController', function($scope, Product) {
		Product.find(function(items) {
			$scope.products = items;
		});
	});

	storeMod.controller('TabsController', function($scope, Product) {
		$scope.tab = 1; // ng-init="tab=1"
		$scope.changeTab = function(tabIndex, product) {
			$scope.tab = tabIndex;
				if(tabIndex===3){
				Product.prototype$__get__reviews({
					id : product.id
				}, function(reviews) {
					// product.reviews=product.reviews||[];
					product.reviews = reviews;
				});
			}
		};
		$scope.isTabSelected = function(tabIndex) {
			return $scope.tab === tabIndex;
		};
		$scope.removeReview = function(product, review) {
			Product.prototype$__destroyById__reviews({
				id : product.id,
				fk : review.id
			}, function(resp) {
				product.reviews.splice(product.reviews.indexOf(review), 1);
			});
		};
		$scope.editReview = function(product, review) {
			$scope.$broadcast('edit-review', {
				prod : product,
				rev : review
			});
		};
	});

	// ------------------------------------------
	// Filter - component

	storeMod.filter('priceDiscount', function() {
		return function(originalPrice, discount, val1, val2) {
			if (angular.isNumber(originalPrice)) {
				if (discount) {
					return originalPrice - discount;
				} else {
					return originalPrice - 1;
				}
			} else {
				//
			}
		};
	});

	// ------------------------------------------

	// Directives

	storeMod.directive('productTitle', function() {
		return {
			restrict : "E",
			replace : true,
			templateUrl : "templates/product-title.html",
			link : function(scope, iElement, iAttrs) {
				iElement.on('mouseenter', function() {
					iElement.css('background-color', "#def");
				});
				iElement.on('mouseleave', function() {
					iElement.css('background-color', "#fff");
				});
			}
		};
	});
	storeMod.directive('productTabs', function() {
		return {
			restrict : "E",
			templateUrl : "templates/product-tabs.html",
			controller : "TabsController",
			controllerAs : "tc"
		};
	});
	storeMod.directive('productReviewForm', function(Product) {
		return {
			restrict : "E",
			templateUrl : "templates/product-review-form.html",
			controller : function($scope) {
				$scope.review = {};
				$scope.addNewReview = function(product) {

					if ($scope.update) {
						Product.prototype$__updateById__reviews({
							id : product.id,
							fk : $scope.review.id
						}, $scope.review, function(review) {
							product.reviews = product.reviews || [];
						});
					} else {
						Product.prototype$__create__reviews({
							id : product.id
						}, $scope.review, function(review) {
							product.reviews = product.reviews || [];
							product.reviews.push(review);
						});
					}
					$scope.review = {};

				};

				$scope.$on('edit-review', function(event, data) {
					// console.dir(data.rev);
					$scope.update = true;
					$scope.review = data.rev;
				});

			}
		};
	});

	// ---------------------------------------------

})();
