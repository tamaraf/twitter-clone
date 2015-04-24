$(document).ready(function() {
	
	$('#tweet-controls').hide();

	$('.tweet-compose').on('click', function() {
		$(this).css({
			height: '5em',
		})
		$('#tweet-controls').show();	
	})
	
	var maxLength = 140;
	$('.tweet-compose').keyup(function() {
 	var length = $(this).val().length;
  	var length = maxLength-length;
  	$('#char-count').text(length);
	if (length <= 10) {
    	$('#char-count').css('color', 'red');
	} else {
    	$('#char-count').css('color','#999');
	}
	if (length < 0) {
            $('#tweet-submit.button').attr('disabled', 'disabled');
        } else {
            $('#tweet-submit.button').removeAttr('disabled');
        }
	})
	
	$('.button').on('click', function(){ 
        var myTweet = $('.tweet').first().clone('data');        
        myTweet.find('.avatar').attr('src', 'img/alagoon.jpg');
        myTweet.find('.fullname').html('No Name');
        myTweet.find('.username').html('@NoName.Awesome');
        myTweet.find('.tweet-text').text($('.tweet-compose').val());
        $('#stream').prepend(myTweet);  
    })

	$('.tweet-actions').hide(); 
	$('.tweet').hover(function(){
		$('.tweet-actions').show();
		}, function(){
		$('.tweet-actions').hide();
	})

	$('.stats').hide();
	$('.reply').hide();

	$('.tweet').on('click', function(){
		$('.stats').hide();
		$('.reply').hide();
		$('.stats').show();
		$('.reply').show();
	})
});