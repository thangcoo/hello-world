
$(document).ready(function(){
    $(window).scroll(function () {
      // console.log(1);
        var top=$(window).scrollTop();
        // alert(top);
        if(top>0){
            // console.log(1);
            $('header').addClass('fixed-head-on');
        }

    });

});

//关于脚本

// $('body').scrollspy({ target: '#mynavbar' });
// if($('[data-animation]').length>0){
//     $('[data-animation]').each(function (index,el) {
//         var $this=$(this);
//         var animationValue=$(this).attr('data-animation');
//
//         setTimeout(function () {
//             $this.removeClass('object-no-visible').addClass('object-visible');
//             $this.addClass('animated '+animationValue);
//         },1000);
//
//     })
// }
//点击导航栏链接跳转到对应部分显示
$('.navbar-nav li a').click(function () {
    // console.log(this.hash);
    var topValue=Math.floor($(this.hash).offset().top);
    // console.log(topValue);
    var extra=parseInt($('header').css('height'));
    // console.log(extra);
    $('html,body').animate({
        scrollTop:topValue-extra+'px'
    },800);
});
$('#question div.panel-heading a').mouseout(function () {
    $(this).css("text-decoration","none");
});

