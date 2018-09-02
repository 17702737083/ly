(function () {
    var jqueryObj = $(".content .content-list li");
    var iconBgObj = $(".content .content-list li .bg .icon-bg");
    var subIconBgObj = $(".content .content-list li .bg .sub-icon-bg");
    var iconUrl = ["url('./images/icon1.png')",
        "url('./images/icon2.png')",
        "url('./images/icon3.png')"];
    var subIconUrl = ["url('./images/value.png')",
        "url('./images/attiude.png')",
        "url('./images/style.png')"];
    var iconHoverUrl = ["url('./images/icon1-hover.png')",
        "url('./images/icon2-hover.png')",
        "url('./images/icon3-hover.png')"];
    var subIconHoverUrl = ["url('./images/value-hover.png')",
        "url('./images/attiude-hover.png')",
        "url('./images/style-hover.png')"];
    jqueryObj.each(function (i) {
        jqueryObj.eq(i).on("mouseenter", function () {
            jqueryObj[i].style.backgroundColor = "#1262a9";
            jqueryObj[i].style.color = "#fff";
            iconBgObj[i].style.backgroundImage = iconHoverUrl[i];
            subIconBgObj[i].style.backgroundImage = subIconHoverUrl[i];
            iconBgObj[i].style.backgroundColor = "#fff";
        });
        jqueryObj.eq(i).on("mouseleave", function () {
            jqueryObj[i].style.backgroundColor = "#fff";
            jqueryObj[i].style.color = "#1f2d3d";
            iconBgObj[i].style.backgroundImage = iconUrl[i];
            subIconBgObj[i].style.backgroundImage = subIconUrl[i];
        });
    })
}());

window.onload = function () {
    //轮播图代码
    var bannerLi = $(".banner-list li");
    var oNext = $(".banner .next");
    var oPrev = $(".banner .prev");
    var Oon = $(".banner .tab li");
    var oBanner = $(".banner");
    var index = 0;
    var timer = null;

    //自动轮播
    function autoPlay(){
        timer = setInterval(function () {
            index ++;
            index %= 3;
            change(index);
        },4000);
    };
    autoPlay();
    //点击tab切换=
    Oon.hover(function () {
        index = $(this).index();
        Oon.eq(index).addClass("active").siblings().removeClass("active");
        bannerLi.eq(index).stop(true).fadeIn("linear").siblings().stop(true).fadeOut("linear");
    })
    //图片和tab变换效果
    function change(index){
        Oon.eq(index).addClass("active").siblings().removeClass("active");
        bannerLi.eq(index).stop(true).fadeIn("linear").siblings().stop(true).fadeOut("linear");
    }
    //按钮显示隐藏
    function btnShow(){
        oNext.toggle();
        oPrev.toggle();
    }
    //点击下一页按钮
    oNext.on("click",function () {
        index ++;
        index %= 3;
        change(index);
    })

    //点击上一页按钮
    oPrev.on("click",function () {
        index --;
        index = index == -1 ? 2 : index % 3;
        change(index);
    })

    //鼠标移入banner
    oBanner.on("mouseenter",function () {
        btnShow();
        clearInterval(timer);
    })
    //鼠标移出banner
    oBanner.on("mouseleave",function () {
        btnShow();
        autoPlay();
    })
}

window.onresize = function () {
    //浏览器窗口重置时重新计算banner的高度
    var imgHeight = 0;
    var percent = 560 / 1920;
    var width = document.documentElement.clientWidth;
    if (width < 1200) {
        imgHeight = 1200 * percent;
    } else {
        imgHeight = width * percent;
    }
    $(".banner").css({
        height: imgHeight + 'px'
    })
}
