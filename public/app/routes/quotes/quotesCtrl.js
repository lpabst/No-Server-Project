angular.module('myApp')
.controller('quotesCtrl', function($scope, quotesService){

$scope.getQuote = function(){
    quotesService.getQuote().then(function(response){
        var arr = response.data[0].content.split('');
        arr.splice(0, 3);
        arr.splice(arr.length-5, 4);
        $scope.quote = arr.join('');
        $scope.author = response.data[0].title;
    })
}

$scope.getQuote();





});