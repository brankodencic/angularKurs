(function () {

    "use strict";

    angular
		.module("app")
		.factory('authService', authService);

    authService.$inject = ['$http', '$q', 'localStorageService', 'ngAuthSettings'];

    function authService($http, $q, localStorageService, ngAuthSettings) {
        var serviceBase = ngAuthSettings.apiServiceBaseUri;
        var authentication = {
            isAuth: false,
            userName: "",
            useRefreshTokens: false,
            hackReload: false,
            isInternal: false
        };
        //console.log('var hackReload', authentication.hackReload)
        return {
           login: login,
//            logOut: logOut,
//            logOut: logOut,
//            fillAuthData: fillAuthData,
            authentication: authentication
        }


        function login(loginData) {
            var deferred = $q.defer();
            
            $http.post(serviceBase + 'Account/LoginAsync', loginData, { headers: { 'Content-Type': 'application/json' }}).then((response)=>{
                if (response.data !== null && response.data.success) {
                    localStorageService.set('authorizationData', {
                        token: response.data.token,
                        userName: response.data.fullName,
                    });
                    authentication.isAuth = true;
                    authentication.userName = response.data.fullName;
                } else {
                  //  logOut();
                }
                localStorageService.get('authorizationData');
                deferred.resolve(response.data);

            }, (error)=>{
               // logOut();
                deferred.reject(error);
            });

            return deferred.promise;

        };


        function logOut() {
            let authData= localStorageService.get('authorizationData');
                if(authData){
                    $http.get(serviceBase + 'User/ClearCacheUserPermissionsByUserName', { params: { userName: authData.userName, isInternal: authData.isInternal } }).then((response) => {
                    clearLocalStorage();
                }, (error)=>{
                    console.log('error data');
                });
            } else {
                clearLocalStorage();
            }
        };

        function clearLocalStorage () {
            localStorageService.remove('authorizationData');
        }

        function fillAuthData() {
            var authData = localStorageService.get('authorizationData');
            if (authData) {
                authentication.isAuth = true;
                authentication.userName = authData.userName;
                authentication.useRefreshTokens = authData.useRefreshTokens;
            }

        };
    }
})();