var app = angular.module('myApp', ['slick', 'ngRoute', 'ngResource']);

app.config(function($routeProvider) {

    $routeProvider
    
    .when('/', {
        templateUrl: 'views/home.html'
    })
    .when('/home', {
        templateUrl: 'views/home.html'
    })
    .when('/about', {
        templateUrl: 'views/about.html'
    })
    //
});

