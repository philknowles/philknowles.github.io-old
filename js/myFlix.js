var app = angular.module('myFlix', [
    'ngRoute',
    'infinite-scroll'
]);

app.config(function($routeProvider){
   
    $routeProvider
    
    .when('/', {
        templateUrl: '/views/flix-home.html'
    })
    .when('/top-rated', {
        templateUrl: '/views/top-rated.html'
    })
    .when('/most-recent', {
        templateUrl: '/views/most-recent.html'
    })
    .when('/most-popular', {
        templateUrl: '/views/most-popular.html'
    })
    .when('/genre', {
        templateUrl: '/views/genre.html'
    })
});


app.controller('MovieController', ['$scope', '$http',
    function ($scope, $http) {

    var apiKey = '968cca12b1a8492036b1e1e05af57e3f';
    var popularMoviesEndpoint = "https://api.themoviedb.org/3/movie/popular";
    var page = 0;
    var selectedMovie = 'http://image.tmdb.org/t/p/w370/';

      $scope.movieList = [];

      // creating a function for getting the movie list. we use this function when loading next page is needed
      $scope.getMovieList = function () {

        var url = popularMoviesEndpoint + '?page=' + ++page + '&api_key=' + apiKey + "&append_to-response=releases,trailers"; // generating the url
          console.log(url);
          
        $http({method: 'GET', url: url}).
          success(function (data, status, headers, config) {

            if (status == 200) {
              page = data.page;                                             // saving current page for pagination
              $scope.movieList.push.apply($scope.movieList, data.results)   // appending new movies to current list
            } else {
              console.error('Error happened while getting the movie list.')
            }

          }).
          error(function (data, status, headers, config) {
            console.error('Error happened while getting the movie list.')
          });
      }

      $scope.getMovieList();    // calling the function when script is loaded for the first time

        $scope.getDetail = function(movie) {
            console.log('selectedMovie', selectedMovie + movie.poster_path);
            $scope.selectedMovie = selectedMovie + movie.poster_path;
        };    
    }]
);

app.controller('TopController', ['$scope', '$http',
    function ($scope, $http) {

    var apiKey = '968cca12b1a8492036b1e1e05af57e3f';
    var popularMoviesEndpoint = "https://api.themoviedb.org/3/movie/top_rated";
    var page = 0;

      $scope.movieList = [];

      // creating a function for getting the movie list. we use this function when loading next page is needed
      $scope.getMovieList = function () {

        var url = popularMoviesEndpoint + '?page=' + ++page + '&api_key=' + apiKey + "&append_to-response=releases,trailers"; // generating the url

        $http({method: 'GET', url: url}).
          success(function (data, status, headers, config) {

            if (status == 200) {
              page = data.page;                                             // saving current page for pagination
              $scope.movieList.push.apply($scope.movieList, data.results)   // appending new movies to current list
            } else {
              console.error('Error happened while getting the movie list.')
            }

          }).
          error(function (data, status, headers, config) {
            console.error('Error happened while getting the movie list.')
          });
      }

      $scope.getMovieList();    // calling the function when script is loaded for the first time

    }]
);

app.controller('RecentController', ['$scope', '$http',
    function ($scope, $http) {

    var apiKey = '968cca12b1a8492036b1e1e05af57e3f';
    var popularMoviesEndpoint = "http://api.themoviedb.org/3/movie/now_playing";
    var page = 0;

      $scope.movieList = [];

      // creating a function for getting the movie list. we use this function when loading next page is needed
      $scope.getMovieList = function () {

        var url = popularMoviesEndpoint + '?page=' + ++page + '&api_key=' + apiKey + "&append_to-response=releases,trailers"; // generating the url

        $http({method: 'GET', url: url}).
          success(function (data, status, headers, config) {

            if (status == 200) {
              page = data.page;                                             // saving current page for pagination
              $scope.movieList.push.apply($scope.movieList, data.results)   // appending new movies to current list
            } else {
              console.error('Error happened while getting the movie list.')
            }

          }).
          error(function (data, status, headers, config) {
            console.error('Error happened while getting the movie list.')
          });
      }

      $scope.getMovieList();    // calling the function when script is loaded for the first time

    }]
);
