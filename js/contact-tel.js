$(window).ready(function() {
	$('.contact-tel').hover(function(){
		$('.contact-tel').animate({
			opacity: 0.5,
			top:"+=40"},1000);
	});
	
	$('.contact-tel').hover(function(){
		$('.contact-tel').animate({
			opacity:1,
			top:"-=40"},1000);
	});
	
	$('.contact-mail').hover(function(){
		$('.contact-mail').animate({
			opacity:.5,
			top:"-=40"},1000);
	});
	$('.contact-mail').hover(function(){
		$('.contact-mail').animate({
			opacity: 1,
			top:"+=40"},1000);
	});

});