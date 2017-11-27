(function(){
    var usersController = function($scope, authService, $location){
    
        console.log('users controller');
    }
    
    usersController.$inject = ['$scope', 'authService', '$location'];
    angular.module("app.users").controller('usersController', usersController);
})();