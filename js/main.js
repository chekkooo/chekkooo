var $btn = $('.menubar li a');

$btn.click(function(){
    $btn.removeClass('on');
    $(this).addClass('on');
});

$('.btn_yellow').click(function(){
   $('.all').fadeOut(0);
   $('.yellow').fadeIn(100);
});

$('.btn_pink').click(function(){
    $('.all').fadeOut(0);
    $('.pink').fadeIn(100);
});
$('.btn_blue').click(function(){
    $('.all').fadeOut(0);
    $('.blue').fadeIn(100);
});
$('.btn_orange').click(function(){
    $('.all').fadeOut(0);
    $('.orange').fadeIn(100);
});
$('.btn_sky').click(function(){
    $('.all').fadeOut(0);
    $('.sky').fadeIn(100);
});
$('.btn_purple').click(function(){
    $('.all').fadeOut(0);
    $('.purple').fadeIn(100);
});