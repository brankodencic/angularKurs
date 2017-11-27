(function(){
    var categoriesController = function($scope, authService, $location){
    
        console.log('categories controller');
    }
    
    categoriesController.$inject = ['$scope', 'authService', '$location'];
    angular.module("app.categories").controller('categoriesController', categoriesController);
})();