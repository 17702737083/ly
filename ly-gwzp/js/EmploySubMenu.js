(function () {
    $(".wrapper dl dd .sub-menu .menu-list").on("mouseenter",function (e) {
        $(".wrapper dl dd .sub-menu .menu-list").removeClass("move");
        $(this).addClass("move");
    })
})();
