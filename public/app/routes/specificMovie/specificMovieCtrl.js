angular.module('myApp')
.controller('specificMovieCtrl', function($scope, movieService){


$scope.showSpecificMovie = function(movie_name){
  
    movieService.showSpecificMovie(movie_name).then(function(response){
        $scope.title = response.data.Title;
        $scope.rating = response.data.Rated;
        $scope.runtime = response.data.Runtime;
        $scope.revenue = response.data.BoxOffice;
        $scope.reviewRating = response.data.imdbRating;
        $scope.searchByName = '';
    })
    
}






});