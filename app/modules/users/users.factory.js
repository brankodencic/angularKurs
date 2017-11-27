(function(){
    var usersFactory = function($http, ngAuthSettings){
        return {
            "getAllUsers": function(){
                return $http.get(ngAuthSettings.apiServiceBaseUri + "account/getAllUsers");
            },
            "accountRegister": function(data){
                return $http.post(ngAuthSettings.apiServiceBaseUri + "account/register", data)
            }
        }
    };
    
    usersFactory.$inject = ['$http', 'ngAuthSettings'];
    angular.module("app.users").factory('usersFactory', usersFactory);
})();