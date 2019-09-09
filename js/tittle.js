//function(title) {
	//recuperer tailel ecran dans variable 
	//si taille = 960px alors h1 font-size =30px et top +=10px
//}


function myFunction(x) {
  if (x.matches) { // If media query matches
  	$(window).ready(function() {
		$("h1").ready(function(){
			$("h1")
			.animate({
				left: '0',
				right: '0',
				top: '-=49px',
				opacity: '0.5',
				opacity: '1',				
				}, {
					queue: true,
					duration: 3000
			})
			.animate({ fontSize: "18px"}, 2500)
			.css({ color: "#76007f", margin: "auto"}, 5000)		
	});
});	
  
  } else {//size screen desktop///
		$(window).ready(function() {
			$("h1").ready(function(){
				$("h1").animate({
					left: '0',
					right: '0',
					opacity: '0.5',
					opacity: '1',
					}, {
						queue :false,
						duration: 3000
				})
				.animate({fontSize:"40px"}, 3000)
				.css({ color: "#76007f"})
			});		
		});
	};
};
   
  


var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes










//animation titre fonctionnelle mise en commentaire pour essais
//$(window).ready(function() {
//	$("h1").ready(function(){
//		$("h1").animate({
//			left: '0',
//			right: '0',
//			top: '+=12px',
//			opacity: '0.5',
//			opacity: '1'
//		},4000);
//		$("h1").css({
//			color: 'purple'
//		});		
//	});
//});	
