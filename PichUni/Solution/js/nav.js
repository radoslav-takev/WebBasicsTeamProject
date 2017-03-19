/**
 * Created by USER on 19.3.2017 г..
 */
$(document).ready(function() {
    $(".fa-bars").click(function () {
        $(".navigation").toggle();
    });

    $(window).resize(function(){
        if ($(window).width() <= 640){
            $(".navigation").css("display", "none");

        } else {
            $(".navigation").css("display", "flex");
        }
    });
});

//Function to the css rule

