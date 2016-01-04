app.config(function ($routeProvider) {
 
    $routeProvider
    
    .when('/forecast', {
        templateUrl: 'views/forecast.html',
        controller: 'homeController'
    })
    
    .when('/forecast-results', {
        templateUrl: 'views/forecast-results.html',
        controller: 'forecastController'
    })
    
    .when('/forecast-results/:days', {
        templateUrl: 'views/forecast-results.html',
        controller: 'forecastController'
    })
});


//SERVICES
app.service('cityService', function() {

    this.city = "Burnsville, MN";

});
                                   
//Controllers
app.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService) {
    
    $scope.city = cityService.city;
    
    $scope.$watch('city', function() {
       cityService.city = $scope.city; 
    });
    
    $scope.submit = function() {
        $location.path("/forecast-results");
    };
    
}]);

app.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService) {

    $scope.city = cityService.city;
    
    $scope.days = $routeParams.days || '2';
    
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=171d23ac7681ec7daaebd25fb6df4776", {
        callback: "JSON_CALLBACK" }, {get: {method: "JSONP" }});
    
    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days });
    
    $scope.convertToFahrenheit = function(degK) {
        return Math.round((1.8 * (degK - 273)) + 32);
    }
    
    $scope.convertToDate = function(dt) {
        
        return new Date(dt * 1000);
    }
}]);

                                   
app.directive('weatherReport', function() {
    return {
        restrict:'E',
        templateUrl: 'directives/weatherReport.html',
        replace: true,
        scope: {
            weatherDay: "=",
            convertToStandard: "&",
            convertToDate: "&",
            dateFormat: "@"
        }
    }
});
