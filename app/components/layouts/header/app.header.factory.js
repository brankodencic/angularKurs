(function(){
    var appHeaderFactory = function($http){
        return {
            "getMainMenu": function(){
                return $http.get("app/resource/admin.menu.json");
            }
        }
    };
    
    appHeaderFactory.$inject = ['$http'];
    angular.module("app").factory('appHeaderFactory', appHeaderFactory);
})();