(function(){
    var appHeaderComponent = function(appHeaderFactory){
    
        console.log('header component');
        return {
            "restricted": "e",
            "controller": function($scope){
                var response = appHeaderFactory.getMainMenu()
                    .then(function(data){
                        $scope.mainMenu = data.data;
                        console.log($scope.mainMenu);
                    }, function(data){
                        
                    });
               console.log("controller function"); 
            },
            "templateUrl": "./app/components/layouts/header/app.header.html",
            "scope": true,
            "link": function(scope, element, attributte, controller){
                
            }
        };
    }
    
    appHeaderComponent.$inject = ['appHeaderFactory'];
    angular.module("app").directive('appHeaderComponent', appHeaderComponent);
})();