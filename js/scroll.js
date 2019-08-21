(function($){
	var sections = [];
	var id = false;
	var $navbar = $('.topnav');
	var $navbara = $('a' , $navbar);


	$navbara.click(function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top - $navbar.height()
		}, 1000);
		hash($(this).attr('href'));
	});


	$navbara.each(function(){
		sections.push($($(this).attr('href')));
	});

	$(window).scroll(function(e){
		var scrollTop = $(this).scrollTop() + ($(window).height() / 2)
		for(var i in sections){
			var section = sections[i];
			if (scrollTop > section.offset().top) {
				scrolled_id = section.attr('id');
			}
		}
		if (scrolled_id !== id) {
			id = scrolled_id
			$navbara.removeClass('active');
			$('a[href="#' + id + '"]', $navbar).addClass('active');
		}
	});

})(jQuery);

hash = function(h) {
	if (history.pushState) {
			history.pushState(null, null, h);
	}else{		
	location.hash = h; 
	}
}