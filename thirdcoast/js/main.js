$('#nav-menu li a').on('click', function(){
    $('li a.current').removeClass('current');
	$('li a').addClass('deselected');
    $(this).addClass('current');
});
$('#nav-menu li').on('click', function(){
    $('li.current').removeClass('current');
	$('li').addClass('deselected');
    $(this).addClass('current');
});