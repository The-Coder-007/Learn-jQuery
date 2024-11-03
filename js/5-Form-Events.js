$(document).ready(function(){

    $("#sname, #sclass, #scountry").focus(function(){
        $(this).css("background-color", "lime");
    });

    $("#sname, #sclass, #scountry").blur(function(){
        $(this).css("background-color", "");
    });

    $("#scountry").change(function(){
        // $(this).css("background-color", "red");

        var a = $(this).val(); // Value
        $("#test").html(a);
    });

    $("#sname, #sclass").select(function(){
        $(this).css("background-color", "Yellow");
    });

    $("#sform").submit(function(){

       alert("Form submitted");

    });

});