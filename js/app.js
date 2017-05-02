angular.module('myApp', ['ui.router'])
.config(function($urlRouterProvider, $stateProvider){
    

$stateProvider
    .state('movieSearch', {
        url: '/',
        templateUrl: '../movieSearch/movieSearch.html',
        controller: 'movieSearchCtrl'
    })
    .state('specificMovie', {
        url: '/info',
        templateUrl: '../specificMovie/specificMovie.html',
        controller: 'specificMovieCtrl',
    })
    .state('movieQuotes', {
        url: '/quotes',
        templateUrl: '../quotes/quotes.html',
        controller: '',
    })


$urlRouterProvider.otherwise('/');




});