(function($) {

	"use strict";

	/*---------------- Preloader	------------------------------------------------------ */
    $(window).load(function() {
        
        $("#loader").fadeOut("slow",
            function() {
                $("#preloader").delay(300).fadeOut("slow");
            });

    });


	/*------------------Smooth Scrolling	------------------------------------------------------ */
  	$('.smoothscroll').on('click', function (e) {
	 	
	 	e.preventDefault();

   	var target = this.hash,
    	$target = $(target);

    	$('html, body').stop().animate({
       	'scrollTop': $target.offset().top
      }, 800, 'swing', function () {
      	window.location.hash = target;
      });

  	});  

 	/*----------------- Back to top    ------------------------------------------------------- */ 
	var pxShow = 300; 
	var fadeInTime = 400; 
	var fadeOutTime = 400; 
	var scrollSpeed = 300; 
	jQuery(window).scroll(function() {

		if (!( $("#header-search").hasClass('is-visible'))) {

			if (jQuery(window).scrollTop() >= pxShow) {
				jQuery("#go-top").fadeIn(fadeInTime);
			} else {
				jQuery("#go-top").fadeOut(fadeOutTime);
			}

		}		

	});		

})(jQuery);