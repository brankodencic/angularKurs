(function(){
    var config = function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider){
        $httpProvider.interceptors.push('ajaxInterceptor');
        $stateProvider
        .state('login', {
            url:'/login',
            templateUrl: 'app/modules/login/login.html',
            controller: 'loginController'
        })
        .state('dashboard', {
            url:'/dashboard',
            templateUrl:'app/modules/dashboard/dashboard.html',
            controller: 'dashboardController',
            resolve:{ loggedIn:onlyLoggedIn }
        });
        
        $urlRouterProvider.otherwise("/login"); 
    }
    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];
    angular.module("app").config(config)
    .run(function($state, $location, localStorageService){
//        if($location.path()==='/login'){
//            localStorageService.remove('authorizationData');
//        }
    });
})();

var onlyLoggedIn = function ($q, $location, authService) {
       
    var deferred = $q.defer();
    if (authService.authentication.isAuth) {
        deferred.resolve();
    } else {
        deferred.reject();
        $location.url('/login');
    }
  // console.log('deferred.promise', deferred.promise);
    return deferred.promise;
};