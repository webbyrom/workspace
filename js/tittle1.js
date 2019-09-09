// fonction pour animation titre quelque soit la taille de l'écran
/* breakpoint a 1080 pour le font-size h1 */

function tittle($){
	var screenSize = $(window).width();
	if (screenSize >= 850  && screenSize <=1100){
		$(window).ready(function(){
			$("h1").ready(function(){
				$("h1")
				.animate({
					left: "0",
					right:"0",
					top: "+=55px",
					opacity: "0.5",
					opacity: "1",

				}, {
					queue: true,
					duration: 3000
				})
				.animate({ fontSize: "30px"}, 2500)
				.css({ color: "#76007f", height: "110px", margin: "auto"}, 5000)
			});
		});
	}
	else if (screenSize < 850 && screenSize >=650){
		$(window).ready(function(){
			$("h1").ready(function(){
				$("h1")
				.animate({
					left: "0",
					right:"0",
					top: "-=35px",
					opacity: "0.5",
					opacity: "1",
				}, {
					queue: true,
					duration: 3000
				})
				.animate({ fontSize: "18px"}, 2500)
				.css({ color: "#76007f", margin: "auto"}, 5000)
			});
		});
	}
	else if (screenSize < 650 && screenSize >=650){
		$(window).ready(function(){
			$("h1").ready(function(){
				$("h1")
				.animate({
					left: "0",
					right:"0",
					top: "-=35px",
					opacity: "0.5",
					opacity: "1",
				}, {
					queue: true,
					duration: 3000
				})
				.animate({ fontSize: "18px"}, 2500)
				.css({ color: "#76007f", margin: "auto"}, 5000)
			});
		});
	}
	else {
		$(window).ready(function() {
			$("h1").ready(function(){
				$("h1").animate({
					left: '0',
					right: '0',
					opacity: '0.5',
					opacity: '1',
					}, {
						queue :true,
						duration: 3000
				})
				.animate({fontSize:"40px"}, 3000)
				.css({ color: "#76007f"})
			});		
		});
	};

};
tittle($)

