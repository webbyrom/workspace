$(document).ready(function(){
     		 	$('.carousel').slick({
       			  	infinite: true,
  					slidesToShow: 3,
 					slidesToScroll: 3,
 					speed:1050,
 					arrows:true,
 					autoplay: false,
 					autoplaySpeed: 3000,

					responsive: [
						{
					      breakpoint: 1400,
					      settings: {
					      	vertical:false,
					        slidesToShow: 2,
					        slidesToScroll: 2,
					        infinite: true,
					        dots: false
					      }
					    },
					    {
					      breakpoint: 1280,
					      settings: {
					      	vertical:false,
					        slidesToShow: 2,
					        slidesToScroll: 2,
					        infinite: true,
					        dots: false
					      }
					    },
					    {
					      breakpoint: 1080,
					      settings: {
					      	vertical: false,
					        slidesToShow: 1,
					        slidesToScroll: 1,
					        infinite: true,
					        dots: false
					      }
					    }
					    // You can unslick at a given breakpoint now by adding:
					    // settings: "unslick"
					    // instead of a settings object
					  ]
     			});
});



