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
    .when('/clock', {
        templateUrl: 'views/clock.html'
    })
    .when('/draggable-balls', {
        templateUrl: 'views/draggable-balls.html'
    })
    .when('/web-tools', {
        templateUrl: 'views/web-tools.html'
    })
    .when('/angular', {
        templateUrl: 'views/angular.html'
    })
    .when('/web-dev', {
        templateUrl: 'views/web-dev.html'
    })
    .when('/website-f4c', {
        templateUrl: 'views/website-f4c.html'
    })
    .when('/website-r3', {
        templateUrl: 'views/website-r3.html'
    })
    //
});

