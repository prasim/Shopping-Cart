(function(angular){
	var module = angular.module('Shopping.Model',[
		'Shopping.Service']);
	module.factory('shoppingModel',[
		'shoppingService',
		function(shoppingService) {
			var currentData = '';
			function ShoppingModel() {
				this.cartData = ''
			};

			ShoppingModel.prototype = (function () {
					function getShoppingData() {
						var self = this,
							promise = shoppingService.getCartData();
						promise.then(function (data) {
							self.cartData = data.data.Details;
						})
					}
					return {
						getShoppingData : getShoppingData
					}
				})();

		 	return {
		    	getCurrentInstance : function() {
		    		if(!currentData) {
		    			currentData = new ShoppingModel();
		    		}
		    		return currentData;
		    	}
		    }
	  	}	
	]);
})(angular);