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

});