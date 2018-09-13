 jQuery(document).ready(function($) { 
 	$('.btn-toggle').on('click', function() {
 		$('.menu-dropdown').addClass('active'); 
 	})
 	$('.menu-dropdown__close').on('click', function() {
 		$('.menu-dropdown').removeClass('active'); 
 	})
 
 }); 