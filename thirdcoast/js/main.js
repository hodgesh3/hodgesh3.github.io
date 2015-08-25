$('#nav-menu li a').on('click', function(){
    $('li a.current').removeClass('current');
    $(this).addClass('current');
});