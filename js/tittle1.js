// fonction pour animation titre quelque soit la taille de l'écran
/* breakpoint a 1080 pour le font-size h1 */









/* reprendre les tailles avant de faire quoique ce soit*/
function tittle($){
	var screenSize = $(window).width();
	if (screenSize >= 650 && screenSize <=850){
		$(window).ready(function(){
			$("h1").ready(function(){
				$("h1")
				.animate({
					left: "0",
					right:"0",
					top: "-=53px",
					opacity: "0.5",
					opacity: "1",

				}, {
					queue: true,
					duration: 3000
				})
				.animate({ fontSize: "27px"}, 2500)
				.css({ color: "#76007f", padding: "0px 25px 0px 70px"}, 5000)
			});
		});
	}
	else if (screenSize < 650 && screenSize >=450){
		$(window).ready(function(){
			$("h1").ready(function(){
				$("h1")
				.animate({
					left: "0",
					right:"0",
					top: "-=55px",
					opacity: "0.5",
					opacity: "1",
				}, {
					queue: true,
					duration: 3000
				})
				.animate({ fontSize: "28px"}, 2500)
				.css({ color: "#76007f", padding: "0px 24px 0px 63px"}, 5000)
			});
		});
	}
	else if (screenSize < 450 && screenSize >=320){
		$(window).ready(function(){
			$("h1").ready(function(){
				$("h1")
				.animate({
					left: "0",
					right:"0",
					top: "-=59px",
					opacity: "0.5",
					opacity: "1",
				}, {
					queue: true,
					duration: 3000
				})
				.animate({ fontSize: "23px"}, 2500)
				.css({ color: "#76007f", padding:"0px 24px 0px 60px", margin:"0"}, 5000)
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

