$(window).scroll(function() {
	if ($(this).scrollTop() >=800) {
		$('#scrollUp').fadeIn(200);
	} else {
		$('#scrollUp').fadeOut(200);
	}
});
$('#scrollUp').click(function(){
	$('body,html').animate({
		scrollTop : 0

	},1000);
});