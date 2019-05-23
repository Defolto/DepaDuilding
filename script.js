// (() => {
//     let i = 0; del();
//     function del(){
//         let timeout = setTimeout(del, 280);
//         $('#number').html(i++);
//         if(i > 7) clearTimeout(timeout);
//     }
// })();
$(".selection:nth-child(1)").click(function () {
    $(".picture").css({"background": "url(img/komer.jpg)", "background-size": "cover", "height": "80vh"});
});
$(".selection:nth-child(2)").click(function () {
    $(".picture").css({"background": "url(img/sklad.jpg)", "background-size": "cover", "height": "80vh"});
});
$(".selection:nth-child(3)").click(function () {
    $(".picture").css({"background": "url(img/logich.jpg)", "background-size": "cover", "height": "80vh"});
});
$(".selection:nth-child(4)").click(function () {
    $(".picture").css({"background": "url(img/jkx.jpg)", "background-size": "cover", "height": "80vh"});
});
