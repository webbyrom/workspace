$(window).scroll(function() {
  var scroll = $(window).scrollTop();            
  $(".parallax").css("transform","translateY(" +  (scroll)/2  + "px)");
});