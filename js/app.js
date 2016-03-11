var app = angular.module('myApp', ['slick', 'ngRoute', 'ngResource', 'embedCodepen'/*, 'mm.foundation'*/]);

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
    //
});

//Progress Bar Controller
/*app.controller('progressController', '$scope', function($scope) {
     $scope.max = 200;
    
    $scope.random = function() {
        var value = Math.floor((Math.random() * 100) + 1);
        var type;
        
        if (value < 25) {
            type = 'entry level';
        } else if (value < 50) {
            type = 'intermediate level';
        } else if (value < 75) {
            type = 'advanced';
        } else if (value < 100) {
            type = 'master';
        } else {
            type = 'no skill';
        }

        $scope.showWarning = (type === 'alert' || type === 'warning');

            $scope.dynamic = value;
            $scope.type = type;
          };
          $scope.random();
    }
});*/