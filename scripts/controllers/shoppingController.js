(function(angular) {
	var module = angular.module('Shopping.Controller',[
		'Shopping.Model']);
		module.controller('shoppingCtrl',[
			'$scope',
			'shoppingModel',
			function ($scope, shoppingModel) {
				$scope.shoppingModel = shoppingModel.getCurrentInstance();
				$scope.shoppingModel.getShoppingData();
		}]);
})(angular);