$(function () {
    $('#firstpart p').slideDown(1000);
    $('#info').slideDown(500);
    
    $(window).scroll(function () { 
            if(($(document).scrollTop()>400)){
                $(".javaprog").addClass("javaprog1");
                $(".sqlprog").addClass("sqlprog1");
                $(".htmlprog").addClass("htmlprog1");
                $(".jsprog").addClass("jsprog1");
                $(".cssprog").addClass("cssprog1");

                $("#projects").slideDown(1000);

        
            } else{
                $(".javaprog").removeClass("javaprog1")
                $(".sqlprog").removeClass("sqlprog1");
                $(".htmlprog").removeClass("htmlprog1");
                $(".jsprog").removeClass("jsprog1");
                $(".cssprog").removeClass("cssprog1");

                $("#projects").slideUp(1000);

            }
           
    });


    $("#view1").click(function () {
        window.location.href = "https://github.com/gppatil23/Project-BMI-Calc";
    })

    $("#view2").click(function () {
        window.location.href = "https://github.com/gppatil23/Google-Page";
    })

    $("#view3").click(function () {
        window.location.href = "https://github.com/gppatil23/finance-management";
    })

    $("#view4").click(function () {
        window.location.href = "https://github.com/gppatil23/Netflix-Frontend";
    })

    $("#view5").click(function () {
        window.location.href = "https://github.com/gppatil23/Spotify-Design-Page";
    })

})

function linkedin() {
    window.location.href = "https://www.linkedin.com/in/gaurav-patil-7889b62b6/";
}
function instagram() {
    window.location.href = "https://www.instagram.com/gaurav.o__o/";
}
function gmail() {
    alert("Gmail - gppatil2306@gmail.com");
}
function github() {
    window.location.href = "https://github.com/gppatil23";
}