$(document).ready(function(){

    var $box = $('#box');


    $box.mouseenter(function(){
        var randX = Math.floor(Math.random()*20 + 1);
        var randY = Math.floor(Math.random()*800 + 1);

        TweenLite.to($box, 1, {left: randX, x: 0, top: randY});
    });


    $box.click(function(){
        var randX = Math.floor(Math.random()*600 + 1);
        var randY = Math.floor(Math.random()*200 + 1);

        $box.text('Not This Time Sucka!');
        TweenLite.to($box, 1, {left: randX, top: randY});
        setTimeout(function(){
                $box.text('Leave Neg Feedback');
            }, 1500)
    });




});