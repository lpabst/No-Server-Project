angular.module('myApp')
.service('quotesService', function($http){

this.getQuote = () => {
    return $http.get('http://quotes.rest/qod.json');
}






});