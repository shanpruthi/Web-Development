jQuery(document).ready(function(){
								
"use strict";

 if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      $('body').addClass('touch')
    }

$.fn.slideFadeToggle  = function(speed, easing, callback) {
        return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);
};


	jQuery('#nav-button, #nav li a').not('.subpage #nav li a').on('click', function() {
			jQuery('#nav').slideFadeToggle();
			jQuery('#nav-button').toggleClass('open');
			return false;
	});
	
	
	
});	
	
	
	

	