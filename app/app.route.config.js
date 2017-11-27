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
        })
        .state('users', {
            url:'/users',
            templateUrl:'app/modules/users/users.html',
            controller: 'usersController',
            resolve:{ loggedIn:onlyLoggedIn }
        })
        .state('user', {
            url:'/user',
            templateUrl:'app/modules/user/user.html',
            controller: 'userController',
            resolve:{ loggedIn:onlyLoggedIn }
        })
        .state('products', {
            url:'/products',
            templateUrl:'app/modules/products/products.html',
            controller: 'productsController',
            resolve:{ loggedIn:onlyLoggedIn }
        })
        .state('categories', {
            url:'/categories',
            templateUrl:'app/modules/categories/categories.html',
            controller: 'categoriesController',
            resolve:{ loggedIn:onlyLoggedIn }
        });
        
        $urlRouterProvider.otherwise("/login"); 
    }
    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];
    angular.module("app").config(config)
    .run(function($state, $location, localStorageService, $rootScope){
        if($location.path()==='/login'){
            localStorageService.remove('authorizationData');
        }
        $rootScope.location = $location;
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