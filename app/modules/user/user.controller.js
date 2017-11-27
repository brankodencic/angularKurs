(function(){
    var userController = function($scope, authService, $location, usersFactory){
        $scope.userData = {
            Username:null,
            Email:null,
            Password:null,
            ConfirmPassword:null,
            FirstName:null,
            LastName:null,
            Role:null
        }

        console.log('user controller');
    
        usersFactory.getAllUsers().then(
                    function(data){
                        console.log(data);
                    },
                    function(data){
                        console.log(data);
                    }
                );
    
        $scope.createNewUser = function(e){
            alert("createNewUser function");
            $scope.userData.ConfirmPassword = $scope.userData.Password;
            if($scope.userForm.$valid){
                usersFactory.accountRegister($scope.userData).then(
                    function(data){
                        console.log(data);
                    },
                    function(data){
                        console.log(data);
                    }
                );
            } else {
                console.log("invalid form");
            }

            e.preventDefault();
        };
    }
    userController.$inject = ['$scope', 'authService', '$location', 'usersFactory'];
    angular.module("app.users").controller('userController', userController);
})();