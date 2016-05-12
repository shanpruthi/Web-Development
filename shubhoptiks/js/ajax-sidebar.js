"use strict";

// Ajax content holder relative width script 
function ajax_width() {
	var el = $('#ajax-content.visible .ajax-slider #project-slider');
	var winW = $(window).width();
	var finalW = winW - 380;
	el.css('width',finalW);
	if(winW < 769) {
		el.css('width','100%');
	}
}

function center_img() {
	$('.ajax-slider').find('.images, .ajax-prev, .ajax-next').hide();
	setTimeout(function() {
	// Vertically center project images
	var boxH = $('.ajax-slider').height();
	var imgH = $('.ajax-slider').find('figure').height();
	var marginH = (boxH - imgH) / 2;
	$('.ajax-slider').find('.images').css('margin-top', marginH);
	$('.ajax-slider').find('.images, .ajax-prev, .ajax-next').show();
	}, 0);
}

var scrollPos = 0;

$(document).ready(function() {
	
	// Project overlay
	$('.element.portfolio a').on('click', function(e){
		scrollPos = $(document).scrollTop();
		// Visible overlay
		e.preventDefault();
		$('.wrapper').addClass('hide');
		$('#ajax-content').addClass('visible');
		// Project load
		var projectLink = $(this).attr('href');
		$('.ajax-sidebar').load(projectLink + ' #project-title');
		$('.ajax-slider').load(projectLink + ' #project-slider', function(result) {
			$('#project-slider').hide();
			$(this).find('img').load(function() {
				center_img();
				$('#project-slider').fadeIn(300);
			});
		});
		setTimeout(function() {
			ajax_width();
		}, 600);
	});

	
	// Close project overlay
	$('.ajax-close').on('click', function(){
		$('#ajax-content').removeClass('visible');
		setTimeout(function() {
			$('.wrapper').removeClass('hide');
			$('.ajax-sidebar').html('');
			$('.ajax-slider').html('');
		}, 300);
		
		setTimeout(function() {
			$(document).scrollTop(scrollPos);
		}, 300);
	});
	
	 $(document).ajaxComplete(function() {
		  $('.ajax-slider').trigger('contentchanged');
			$(this).find('img').load(function() {
				center_img();
				$('#project-slider').fadeIn(300);
			});
		  ajax_width();
	 });
	
	
	// Prev and Next programming
	$('.ajax-slider').bind('contentchanged', function() {
		$('.ajax-next').on('click', function(e){
			e.preventDefault();
			$('#project-slider, #project-title').fadeOut(200);
			setTimeout(function() {
			$('.ajax-sidebar').html('');
			$('.ajax-slider').html('');
			}, 200);
			// Project load
			var projectLink = $(this).attr('href');
			setTimeout(function() {
			$('.ajax-sidebar').load(projectLink + ' #project-title');
			$('.ajax-slider').load(projectLink + ' #project-slider', function(result) {
				$('#project-slider').hide();
				$(this).find('img').load(function() {
					center_img();
					$('#project-slider').fadeIn(300);
				});
			});
			}, 200);
			setTimeout(function() {
			
			$('#project-title').fadeIn(300);
			}, 400);
		});
		
		$('.ajax-prev').on('click', function(e){
			e.preventDefault();
			$('#project-slider, #project-title').fadeOut(200);
			setTimeout(function() {
			$('.ajax-sidebar').html('');
			$('.ajax-slider').html('');
			}, 200);
			// Project load
			var projectLink = $(this).attr('href');
			setTimeout(function() {
			$('.ajax-sidebar').load(projectLink + ' #project-title');
			$('.ajax-slider').load(projectLink + ' #project-slider', function(result) {
				$('#project-slider').hide();
				$(this).find('img').load(function() {
					center_img();
					$('#project-slider').fadeIn(300);
				});
			});
			}, 200);
			setTimeout(function() {
			
			$('#project-title').fadeIn(300);
			}, 400);
		});
	});
	
	$('.ajax-more').on('click', function(){
		if ($('.ajax-sidebar').hasClass('collapsed')) {
			$(this).html('<span>Show Info</span>');
			$('.ajax-sidebar').removeClass('collapsed');
		}
		else {
			$(this).html('<span>Hide Info</span>');
			$('.ajax-sidebar').addClass('collapsed');
		}
	});
	
});

$(window).bind("resize", function(){
	ajax_width();
	center_img();
});