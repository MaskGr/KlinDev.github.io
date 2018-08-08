jQuery(document).ready(function($) { 


	$('.menu-nav__item').eq(0).css('border-left', 'none'); 
	
	$('.tabs__item').eq(0).addClass('tabs__item_active');
	$('.tabs-content').eq(0).addClass('tabs-content__active');  
  
  
  	$('.tabs__item').on('click', function(){ 
  		var itemElement = $('.tabs__item');
  		var divContent = $('.tabs-content');
 
  			itemElement.removeClass('tabs__item_active');
  			$(this).addClass('tabs__item_active'); 

  			var clicked_index = itemElement.index(this); 
  			divContent.slideUp();

  			divContent.eq(clicked_index).slideDown();
			
		   	$(this).blur();
			  return false;  
 	  
  	});  	
	  // popup callback    
	  $('.callback__link, .callback__btn, .work-types__btn').on('click', function(){
	  		$('.overlay__callback').fadeIn(500)    
	  		$('.popup__form input:first-child').focus(); 
	  		});
	  $('.popup__close_callback').on('click', function(){  
	  	$('.overlay__callback').fadeOut(500)
	  })     
	  	// popup map
	  $('.adress__link').on('click', function(){
	  	$('.overlay__map').fadeIn(500)
	  }) 
	  $('.popup__close_map').on('click', function(){
	  	$('.overlay__map').fadeOut(500)  
	  }) 
	  // popup order
	  $('.order__btn').on('click', function() {
	  	$('.overlay__order').fadeIn(500);
	  		$('.order-name').focus(); 
	  });
	  $('.popup__close_order').on('click', function() {
	  	$('.overlay__order').fadeOut(500);
	  	$('.selected-service').empty();  
	  }) 
   
   
	  // dropdown 
	  $('.mobile-menu__btn').on('click', function() { 
	  	$('.menu-nav__dropdown').addClass('active');

	  	$('.dropdown__close').on('click', function() {
	  	$('.menu-nav__dropdown').removeClass('active');
	  	$('.menu-nav__container nav').css('transform', 'none');
	  	})
	  }) 


	  $('.order__btn').on('click', function() { 
	  	$('.anticor').clone().appendTo('.selected-service').css('color', '#fff');	  	
	  }); 


});  
	  
	 