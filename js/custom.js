//SCROLL TOP ON PAGE REFRESH
$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

// $(function () {

// 	// AOS ANIMATION
// 	AOS.init({
// 	  disable: 'mobile',
// 	  duration: 800,
// 	  anchorPlacement: 'center-bottom'
// 	});


// 	// SMOOTHSCROLL NAVBAR
// 	$(function() {
// 	  $('.navbar a, .hero-text a').on('click', function(event) {
// 	    var $anchor = $(this);
// 	    $('html, body').stop().animate({
// 	        scrollTop: $($anchor.attr('href')).offset().top - 49
// 	    }, 1000);
// 	    event.preventDefault();
// 	  });
// 	});    
// });