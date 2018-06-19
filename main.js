$(document).ready(function(){
    console.log("jquery");
    $("#icon").hover(function(){
        console.log("hover");
        $("#icon").removeClass("animated bounceIn");
        $("#icon").addClass("animated infinite bounceIn");
    },
    function(){
        $("#icon").removeClass("animated infinite bounceIn");
        $("#icon").addClass("animated bounceIn");
    });
});