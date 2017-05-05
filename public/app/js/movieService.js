angular.module('myApp')
    .service('movieService', function($http){


this.searchMovie = movie_name => {
    var search = movie_name.split(' ').join('+');
    return $http.get('http://www.omdbapi.com/?s='+search);
}

this.showSpecificMovie = movie_name => {
    var search = movie_name.split(' ').join('+');
    return $http.get('http://www.omdbapi.com/?t='+search);
}





});