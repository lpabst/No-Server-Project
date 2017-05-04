angular.module('myApp')
.service('quotesService', function($http){

this.getQuote = function(){
    return $http.get('http://quotesondesign.com/wp-json/posts');
}






});