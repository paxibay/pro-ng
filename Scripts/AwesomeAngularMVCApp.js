var AwesomeAngularMVCApp = angular.module('AwesomeAngularMVCApp', ['ngRoute']);

AwesomeAngularMVCApp.controller('LandingPageController', LandingPageController);
AwesomeAngularMVCApp.controller('LoginController', LoginController);
AwesomeAngularMVCApp.controller('RegisterController', RegisterController);

AwesomeAngularMVCApp.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
AwesomeAngularMVCApp.factory('LoginFactory', LoginFactory);
AwesomeAngularMVCApp.factory('RegistrationFactory', RegistrationFactory);

var configFunction = function ($routeProvider, $httpProvider) {
    $routeProvider.
        when('/routeOne', {
            templateUrl: 'routesDemo/one'
        })
        .when('/routeTwo/:donuts', {
            templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; }
        })
        .when('/routeThree', {
            templateUrl: 'routesDemo/three'
        })
        .when('/login', {
            templateUrl: '/Account/Login',
            controller: LoginController
        })
        .when('/register', {
            templateUrl: '/Account/Register',
            controller: RegisterController
        })
        .otherwise({
            templateUrl: 'routesDemo/one'
        });

    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}
configFunction.$inject = ['$routeProvider', '$httpProvider'];

AwesomeAngularMVCApp.config(configFunction);




$routeProvider.when("/edit", {
    templateUrl: "/Scripts/Ch22/_editorView_initial.html"
});

$routeProvider.when("/create", {
    templateUrl: "/Scripts/Ch22/_editorView_initial.html"
});

$routeProvider.otherwise({
    templateUrl: "/Scripts/Ch22/_tableView-initial.html"
});