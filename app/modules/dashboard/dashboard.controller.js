(function(){
    var dashboardController = function($scope, authService, $location){
    
        console.log('dashboard controller');
    }
    
    dashboardController.$inject = ['$scope', 'authService', '$location'];
    angular.module("app.dashboard").controller('dashboardController', dashboardController);
})();