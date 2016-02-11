var app = angular.module('myApp', ['slick', 'ngRoute', 'ngResource', 'embedCodepen']);

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
    .when('/codepen', {
        templateUrl: 'views/codepen.html'
    })
    .when('/portfolio', {
        templateUrl: 'views/portfolio.html'
    })
    .when('/stop-watch', {
        templateUrl: 'views/stop-watch.html'
    })
    //
});

