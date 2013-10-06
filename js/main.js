$(function(){
	$('a.request-interview').click(function(){
		$(this).hide().parent().find('p.request-sent').show();
		$(this).parent().parent().delay(5000).animate({ height:"toggle", opacity:"toggle", padding:"toggle", margin:"toggle" }, 2500);
	});
});