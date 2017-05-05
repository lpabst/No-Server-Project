angular.module('myApp').controller('aboutCtrl', function($scope, aboutService){

$scope.techInfo = '';
$scope.showTechBox = false;

$scope.exitTechBox = () => {
    $scope.showTechBox = !$scope.showTechBox;
}

$scope.getTech = tech => {
    $scope.showTechBox = true;
    $scope.techInfo = aboutService.getTech(tech);
}




})