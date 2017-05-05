angular.module('myApp')
.controller('quotesCtrl', function($scope, quotesService){

$scope.getQuote = () => {
    quotesService.getQuote().then(function(response){
        var res = response.data.contents.quotes[0];
        $scope.quote = res.quote;
        $scope.author = res.author;
        $scope.copyright = response.data.contents.copyright;
    })
}

$scope.getQuote();





});