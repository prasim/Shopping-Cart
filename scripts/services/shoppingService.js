(function(angular) {
	var module = angular.module('Shopping.Service',[]);
	module.service('shoppingService',[
		'$http',
		function($http) {
			this.getCartData = function() {
				return $http.get('../data.json').success(function(data) {
					return data;
				})
			};
	}]);
})(angular);