// LOADER

var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("load").style.transform = "translateY(-200vh)";
}

// NAV

jQuery(document).on("scroll", function () {
    if ($(document).scrollTop() > 120) {
        $(".navbar").css("background-color","#090b0d");
        $(".navbar a").css("color","#fff");
    } else {
        $(".navbar").css("background","none");
        $(".navbar a").css("color","#000");
    }
});   