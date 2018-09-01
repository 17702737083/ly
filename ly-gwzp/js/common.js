$(document).ready(function () {
    var screenHeight= $(window).height() ;
    var cHeight=screenHeight - 210;
    // console.log(screenHeight,cHeight,'--------------');
    $("#main_content").css('min-height',cHeight);//设置内容部分的高
    
})