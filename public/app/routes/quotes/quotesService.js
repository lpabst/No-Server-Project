angular.module('myApp')
.service('quotesService', function($http){

this.getQuote = () => {
    return $http.get('https://quotes.rest/qod.json');
}






});