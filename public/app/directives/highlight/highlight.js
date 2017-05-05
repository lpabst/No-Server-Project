angular.module('myApp').directive('highlightDir', function(){

    return {
        restrict: 'A',
        link: (scope, elem, atts) => {
            elem.click( () => {
                elem.css('background', 'yellow');
            })
        }
    }

})