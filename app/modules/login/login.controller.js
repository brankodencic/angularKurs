(function(){
    var loginController = function($scope, authService, $location){

        $scope.loginData = {
            Username:null,
            Password:null
        }
    
        $scope.login = function() {
                   //console.log($scope.loginData);
                    authService.login($scope.loginData).then(function (response) {
                        console.log("SUCCESS");
                        if (response.success) {
                            $location.path('/dashboard');
                        } else {
                            $scope.message = response.ErrorMessage;
                        }
                    },
                     function (err) {
                        $scope.message = err.error_description;
                     });

                };
      
    }
    
    loginController.$inject = ['$scope', 'authService', '$location'];
    angular.module("app.login").controller('loginController', loginController);
})();