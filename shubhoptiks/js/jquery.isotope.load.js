jQuery(window).load(function($){
	"use strict";

	function eborLoadIsotope(){
		var $container = jQuery('#container, #container2'),
			$optionContainer = jQuery('#nav, #options'),
			$options = $optionContainer.find('a[href^="#"]').not('a[href="#"]'),
			isOptionLinkClicked = false;
		
		$container.isotope({
			itemSelector : '.element',
			resizable: false,
			filter: '*',
			transitionDuration: '0.6s',
			layoutMode: 'packery'
		});
		

		
		  if( jQuery('body').hasClass('video-detail') )
		  $container.isotope({
			transformsEnabled: false,
		});	
			
		jQuery(window).smartresize(function(){
			$container.isotope('layout');
		});
	  
		$options.click(function(){
		    var $this = jQuery(this),
		    	href = $this.attr('href');
		    	
		    if ( $this.hasClass('selected') ) {
		    	return;
		    } else {
		    	$options.removeClass('selected');
		    	$this.addClass('selected');
		    }

		    jQuery.bbq.pushState( '#' + href );
		    isOptionLinkClicked = true;
		    return false;
		});
	
		jQuery(window).bind( 'hashchange', function( event ){
			var theFilter = window.location.hash.replace( /^#/, '');
			
			if( theFilter == false )
				theFilter = 'home';
				
			$container.isotope({
				filter: '.' + theFilter
			});
			
			if ( isOptionLinkClicked == false ){
				$options.removeClass('selected');
				$optionContainer.find('a[href="#'+ theFilter +'"]').addClass('selected');
			}
			
			isOptionLinkClicked = false;
		}).trigger('hashchange');
		

		
	}
	


		eborLoadIsotope();
	

	jQuery(window).trigger('resize').trigger('smartresize');
	
});
 
 
 $('.back-to-top').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 1000);
 });
