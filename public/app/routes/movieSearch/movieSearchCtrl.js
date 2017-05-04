angular.module('myApp')
    .controller('movieSearchCtrl', function($scope, movieService){

$scope.hasContent = false;
$scope.error = false;

$scope.searchMovie = function(movie_name){
  movieService.searchMovie(movie_name).then(function(response){
    if(response.data.Response === "True"){
      $scope.movies = response.data.Search;
      $scope.hasContent = true;
      $scope.error = false;
    }else{
      $scope.movies = [
        {
        Title: 'no movies found by this title. Your search may have an error/typo, please try again.',
        Year: "Error"
      }
      ];
      $scope.hasContent = true;
      $scope.error = true;
    }
    $scope.movie_name = '';
    
  });
  
}


// $scope.showSpecificMovie = function(){
//   movieService.showSpecificMovie().then(function(response){
    
//   })
// }






});