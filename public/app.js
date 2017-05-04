angular.module('myApp', ['ui.router'])
.config(function($urlRouterProvider, $stateProvider){
    

$stateProvider
    .state('movieSearch', {
        url: '/',
        templateUrl: './app/routes/movieSearch/movieSearch.html',
        controller: 'movieSearchCtrl'
    })
    .state('specificMovie', {
        url: '/info',
        templateUrl: './app/routes/specificMovie/specificMovie.html',
        controller: 'specificMovieCtrl',
    })
    .state('movieQuotes', {
        url: '/quotes',
        templateUrl: './app/routes/quotes/quotes.html',
        controller: 'quotesCtrl',
    })


$urlRouterProvider.otherwise('/');




});