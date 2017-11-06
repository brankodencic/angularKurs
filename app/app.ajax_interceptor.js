(() => {
    let count_ajax = 0;
    const ajaxInterceptor = (localStorageService, $q) => {
        /* jshint validthis: true */
        return {
            request(config) {
                count_ajax++;
                config.headers = config.headers || {};
                var authData = localStorageService.get('authorizationData');
                if (authData) {
                    config.headers['Authorization'] = 'Bearer ' + authData.token;
                    $('.loader_container').stop().fadeIn();
                }
                return config;
            },
            response(response) {
           
              count_ajax--;
              if(response.data.hasOwnProperty('Success')){
                if (response.data.Success === false) {
                    if (response.data.ErrorMessage === "401") {
                        console.log('not authorized!');
                    }
                }
                
              }
              if(count_ajax == 0){
                $('.loader_container').stop().fadeOut();
              }
              return response;
            },
            responseError(rejection) {
                count_ajax--;
                if(count_ajax === 0){
                     $('.loader_container').stop().fadeOut();
                }
                return $q.reject(rejection);
            }
        }

    }
    ajaxInterceptor.$inject = ['localStorageService', '$q'];
    angular.module("app").factory('ajaxInterceptor', ajaxInterceptor);
})();