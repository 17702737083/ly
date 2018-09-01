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

    //初始化变量
    bannerLi[0].className = "show";
    Oon[0].className = "active";
    var num = 0;
    var timer = setInterval(autoPlay, 3000);

    function clickPrev() {
        Oon[num].className = "";
        bannerLi[num].className = "";
    }

    function clickNext() {
        Oon[num].className = "active";
        bannerLi[num].className = "show";
    }

    //自动轮播
    function autoPlay() {
        clickPrev();
        num++;
        num %= 3;
        clickNext();
    }

    //点击tab切换按钮
    for (var i = 0; i < Oon.length; i++) {
        (function (i) {
            Oon[i].onclick = function () {
                clickPrev();
                num = i;
                clickNext();
            }
        })(i);
    }
    //点击下一页按钮
    oNext[0].onclick = function () {
        clickPrev();
        num++;
        num %= 3;
        clickNext();
    }
    //点击上一页按钮
    oPrev[0].onclick = function () {
        clickPrev();
        num--;
        num = num == -1 ? 2 : num % 3;
        clickNext();
    }
    oBanner[0].onmouseenter = function () {
        clearInterval(timer);
        timer = null;
    }
    oBanner[0].onmouseleave = function () {
        timer = null;
        timer = setInterval(autoPlay, 3000);
    }
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
