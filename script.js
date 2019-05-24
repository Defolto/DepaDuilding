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
