

	$(document).ready(function() {
  jQuery(document).ready(function(){
    $(".dropdown").hover(
      function() { $('.dropdown-menu', this).stop().fadeIn("slow");
        },
      function() { $('.dropdown-menu', this).stop().fadeOut("slow");
    });
  });
});

$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 500) {
	    $("#nav").css("background" , "cadetblue");
	    
	     $("#nav li a").css("color" , "white"); 
	     $(".navbar-brand").css("color" , "white"); 
	     $("#indicator").css("background" ,"slateblue"); 
	  }

	  else{
		  $("#nav").css("background" , "transparent");  	
		   $(".nav-item").css("color" , "white"); 	
		   $("#brand").css("color" , "cadetblue"); 	
	  }
  })
});

$(document).ready(function(){

	$('.slider').bxSlider({
		slideWidth:592.5,
		slideHeight:400,
		auto:true,
		minSlides:3,
		maxSlides:4,
		slideMargin:50
	});
})