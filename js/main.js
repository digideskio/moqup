$(function(){
	$('a.request-interview').click(function(){
		$(this).hide().parent().find('p.request-sent').show();
	});
});