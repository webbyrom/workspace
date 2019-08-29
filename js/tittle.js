//function(title) {
	//recuperer tailel ecran dans variable 
	//si taille = 960px alors h1 font-size =30px et top +=10px
//}


function myFunction(x) {
  if (x.matches) { // If media query matches
  	$(window).ready(function() {
		$("h1").ready(function(){
			$("h1").animate({
				left: '0',
				right: '0',
				top: '-=77px',
				opacity: '0.5',
				opacity: '1',
				fontSize:'-=10px',
				transitionDuration:'5s'
				},4000);
			$("h1").css({
				color: 'purple'
		});		
	});
});	
    //document.body.style.backgroundColor = "yellow";//
  } else {
		$(window).ready(function() {
				$("h1").ready(function(){
					$("h1").animate({
						left: '0',
						right: '0',
						top: '+=12px',
						opacity: '0.5',
						opacity: '1',
						fontSize:'+=30px',
						transitionDuration:'5s'
						},4000);
					$("h1").css({
						color: 'purple'

				});		
			});
		});
   //document.body.style.backgroundColor = "pink";//
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes










/*animation titre fonctionnelle mise en commentaire pour essais******/
/*$(window).ready(function() {
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
});	*/
