
function close_toggle() {
	
	"use strict";
	
   if ($(window).width() <= 768) {
      $('.nav a').on('click', function(){
          $(".navbar-toggle").click();
      });
   }
   else {
     $('.nav a').off('click');
   }
}
close_toggle();

$(window).resize(close_toggle);