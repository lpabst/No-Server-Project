angular.module('myApp')
    .controller('mainCtrl', function($scope, movieService){

$scope.mobileMenu = false;


$scope.showMobileMenu = function(){
  $scope.mobileMenu = !$scope.mobileMenu;
}


});