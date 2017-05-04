angular.module('myApp')
    .service('movieService', function($http){


this.searchMovie = function(movie_name){
    var search = movie_name.split(' ').join('+');
    return $http.get('http://www.omdbapi.com/?s='+search);
}

this.showSpecificMovie = function(movie_name){
    var search = movie_name.split(' ').join('+');
    return $http.get('http://www.omdbapi.com/?t='+search);
}





});