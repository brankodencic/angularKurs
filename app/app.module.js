(function(){
    angular.module("app", [
        "ui.router",
        "LocalStorageModule",
        "ngAnimate",
        "ngSanitize",
        "app.login",
        "app.dashboard",
        "app.users",
        "app.products",
        "app.categories",
        "ngMessages"
    ]);
})();