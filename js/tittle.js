$(window).ready(function() {
	$("h1").ready(function(){
		$("h1").animate({
			left: '0',
			right: '0',
			top: '+=12px',
			opacity: '0.5',
			opacity: '1'
		},4000);
		$("h1").css({
			color: 'purple'
		});		
	});
});	
