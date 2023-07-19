window.onload = function() {

    $("#not-positioned").css({
        "margin-bottom":$("nav").css("height"),
    });

    document.getElementById("page").onclick = function() {
        if($("#slider").css("width") == "0px") {
            document.querySelector("nav div span").onclick = function demo() {
                $("#slider").css("width","300px");
            }
        } 

        else {
            $("#slider").css("width","0px");
        }
    }

    $(".slider i").click(function() {
        $("#slider").css("width","0px");
    });

    document.getElementById("page").click();

    document.querySelector(".content h1").style.opacity = "1";
    document.querySelector(".content p").style.opacity = "1";
}
