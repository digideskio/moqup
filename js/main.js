$(function(){
	$('a.request-interview').click(function(){
		$(this).hide().parent().find('p.request-sent').show();
		$(this).parent().parent().delay(5000).animate({ height:"toggle", opacity:"toggle", padding:"toggle", margin:"toggle" }, 2500);
		
		setTimeout(function(){
			$('a#notification').css('visibility', 'visible').animate({
				width: 185
			}, 1500).find('span').fadeIn(3500);
		}, 15000);
	});
	
	var messages_sent = 0;
	
	$('input#chat-input').keypress(function(e) {
	   	if(e.which == 13) {
	        var message = $('input#chat-input').val();
	
			if(messages_sent < 1){
				$('div#our-first-message').show().find('p').html(message);
				$('input#chat-input').val('');
				messages_sent++;
				
				setTimeout(function(){
					$('div#typing-indicator').show();
					setTimeout(function(){
						$('div#typing-indicator').hide();
						$('div#his-message').show();
					}, 10000);
				}, 5000);
				
				
			} else {
				$('div#our-second-message').show().find('p').html(message);
				$('input#chat-input').val('');
			}
	    }
	});
	
	
	$('span#signup-area').click(function(){
		setTimeout(function(){
			window.location.replace('signup.html');
		}, 2500);
	});
	
	
});