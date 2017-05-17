//Prevent spoilerphobes from seeing spoilers
//Solution: Hide spoilers and reveal them through user interaction

//1, Hide spoiler
$(".spoiler span").hide();
//2, add a button
$(".spoiler").append("<button>Reval spoiler</button>");
//3 When button pressed
$(".spoiler button").click(function(){
    //  3.1 Show spoiler
    $(this).prev().show();
    //  3.2 Get rid of button
    $(this).remove();
});
 
