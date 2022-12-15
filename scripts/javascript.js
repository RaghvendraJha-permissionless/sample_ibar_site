//animation for bubble

$(document).ready(function(){
    $(".buy").hover(function(){
        $(".sliding_ball").css("transform", "translatex(12vw) rotate(45deg)");
    },
    function(){
        $(".sliding_ball").css("transform", "translatex(-1vw) rotate(45deg)");
    });
});

//animation for slider

