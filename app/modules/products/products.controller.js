(function(){
    var productsController = function($scope, authService, $location){
    
        console.log('products controller');
    }
    
    productsController.$inject = ['$scope', 'authService', '$location'];
    angular.module("app.products").controller('productsController', productsController);
})();