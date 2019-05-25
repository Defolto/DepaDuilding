$(".selection:nth-child(1)").click(function () {
    $(".picture").css({"background": "url(img/komer.jpg)", "background-size": "cover", "height": "70vh"});
});
$(".selection:nth-child(2)").click(function () {
    $(".picture").css({"background": "url(img/sklad.jpg)", "background-size": "cover", "height": "70vh"});
});
$(".selection:nth-child(3)").click(function () {
    $(".picture").css({"background": "url(img/logich.jpg)", "background-size": "cover", "height": "70vh"});
});
$(".selection:nth-child(4)").click(function () {
    $(".picture").css({"background": "url(img/jkx.jpg)", "background-size": "cover", "height": "70vh"});
});
$("#check").click( function(){
    if($("#exampleCheck1").prop("checked") == false){
        alert('Вы не подтвердили обработку персональных данных');
        return false;
    }
})
var height = $(window).width();
if(height < 780){
    $("#block0").removeClass("pt-5 mt-5");
$("#block1").removeClass("mx-5 mt-5 px-5").addClass("px-3");
$("#block2").removeClass("pt-4");
$("#block3").removeClass("px-5").addClass("px-2");
$(".tab-content").addClass("text-center");
$("#block6").removeClass("mt-5");
$("#map").empty();
$("#map").append('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aeffe85fb531e2832ccb48372d640c2deb712ab6ce0b9c8c677ef9c704357025e&amp;width=420&amp;height=340&amp;lang=ru_RU&amp;scroll=true"></script>');
$(".fon1").css({"background": "url(img/fon1.jpg)", "background-size": "cover"});
$(".navbar").removeClass("fixed-top");
$(".fon").removeClass("py-5");
}
else{
    $("#phone").hide();
}
if (height < 600) {
    $(".AboutPVX").removeClass("px-5").addClass("px-2");
    $("#block5").removeClass("p-5").addClass("p-2 text-center");
    $("#block8").removeClass("px-5");
    $("#block7").removeClass("mx-5");
    $("#block9").removeClass("px-5");
    $("#block10").removeClass("px-5").addClass("mx-2");
    $("#block11").removeClass("px-5").addClass("mx-2");
    $("#block12").removeClass("px-5 mx-5").addClass("mx-3");
}
if(height < 440){
    $("#map").empty();
    $("#map").append('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aeffe85fb531e2832ccb48372d640c2deb712ab6ce0b9c8c677ef9c704357025e&amp;width=300&amp;height=250&amp;lang=ru_RU&amp;scroll=true"></script>');
    $("#block13").removeClass("px-5").addClass("px-3");
}
if (height > 1000) {
    $("#block0").hide();
    $("#block0").show(900);
    $("nav").css({"background-color": "rgba(255, 255, 255, 0.778)",
        "animation": "head .8s cubic-bezier(0.785, 0.135, 0.15, 0.86) forwards"});
        $(".list-group").hide();
        $("#foto").hide();
        $("#line1").css({"transform": "translateY(100%)"});
        $("#block6").css({"transform": "translateY(100%)"});
        $("#block10").css({"transform": "translateY(100%)"});
        $("#block11").css({"transform": "translateY(100%)"});
        var target1 = $('#number3');
        var target2 = $('#target0');
        var target3 = $('#target1');
        var target4 = $('#target2');
        var target5 = $('#target3');
        var targetPos1 = target1.offset().top;
        var winHeight1 = $(window).height();
        var scrollToElem1 = targetPos1 - winHeight1;
        var targetPos2 = target2.offset().top;
        var winHeight2 = $(window).height();
        var scrollToElem2 = targetPos2 - winHeight2;
        var targetPos3 = target3.offset().top;
        var winHeight3 = $(window).height();
        var scrollToElem3 = targetPos3 - winHeight3;
        var targetPos4 = target4.offset().top;
        var winHeight4 = $(window).height();
        var scrollToElem4 = targetPos4 - winHeight4;
        var targetPos5 = target5.offset().top;
        var winHeight5 = $(window).height();
        var scrollToElem5 = targetPos5 - winHeight5;
        var flag = 0;
        $(window).scroll(function(){
            var winScrollTop1 = $(this).scrollTop();
            if(winScrollTop1 > scrollToElem1 && flag == 0){
                (() => {
                    let i = 0; del();
                    function del(){
                        let timeout = setTimeout(del, 143);
                        $('#number1').html(i++);
                        if(i > 7) clearTimeout(timeout);
                    }
                })();
                (() => {
                    let i = 0; del();
                    function del(){
                        let timeout = setTimeout(del, 7);
                        $('#number2').html(i++);
                        if(i > 150) clearTimeout(timeout);
                    }
                })();
                (() => {
                    let i = 0; del();
                    function del(){
                        let timeout = setTimeout(del, 1);
                        $('#number3').html(i++);
                        if(i > 450) clearTimeout(timeout);
                    }
                })();
                flag = 1;
            }
        });
        $(window).scroll(function(){
            var winScrollTop2 = $(this).scrollTop();
            if(winScrollTop2 > scrollToElem2){
                $(".list-group").slideDown(1000);
            }
        });
        $(window).scroll(function(){
            var winScrollTop3 = $(this).scrollTop();
            if(winScrollTop3 > scrollToElem3){
                $("#foto").show(1000);
            }
        });
        $(window).scroll(function(){
            var winScrollTop4 = $(this).scrollTop();
            if(winScrollTop4 > scrollToElem4){
                $("#line1").css({
                "animation": "right .8s cubic-bezier(0.785, 0.135, 0.15, 0.86) forwards"});
                $("#block6").css({
                    "animation": "left .8s cubic-bezier(0.785, 0.135, 0.15, 0.86) forwards"});
            }
        });
        $(window).scroll(function(){
            var winScrollTop5 = $(this).scrollTop();
            if(winScrollTop5 > scrollToElem5){
                $("#block10").css({
                    "animation": "top .8s cubic-bezier(0.785, 0.135, 0.15, 0.86) forwards"});
                $("#block11").css({
                "animation": "top .8s cubic-bezier(0.785, 0.135, 0.15, 0.86) forwards"});
            }
        });
}
$(".fonAbout:eq(0) div img").attr("src", "img/201.png");
$(".fonAbout:eq(1) div img").attr("src", "img/211.png");
$(".fonAbout:eq(2) div img").attr("src", "img/221.png");
$(".fonAbout:eq(0)").hover(function () {
    $(".fonAbout:eq(0) div img").attr("src", "img/20.png");
    }, function () {
        $(".fonAbout:eq(0) div img").attr("src", "img/201.png");
    }
);
$(".fonAbout:eq(1)").hover(function () {
    $(".fonAbout:eq(1) div img").attr("src", "img/21.png");
    }, function () {
        $(".fonAbout:eq(1) div img").attr("src", "img/211.png");
    }
);
$(".fonAbout:eq(2)").hover(function () {
    $(".fonAbout:eq(2) div img").attr("src", "img/22.png");
    }, function () {
        $(".fonAbout:eq(2) div img").attr("src", "img/221.png");
    }
);
