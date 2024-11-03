$(document).ready(function(){

    $(window).scroll(function(){
        console.log("you are scrolling");
    });
    $("#box").scroll(function(){
        console.log("you are div scrolling");
    });
    
    
    $(window).resize(function(){
        console.log("you are resizing");
    });

    //closed events

    $(window).load(function(){
        console.log("you are loaded");
    });
    $(window).unload(function(){
        console.log("you are unloaded");
    });

});