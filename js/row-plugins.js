/* ===================== write your custom javascript here ========================= */


$(document).ready(function() {  

	// Mobile touch swipe carousel
	$(".carousel").swiperight(function() {
	    $(this).carousel('prev');
	});
	$(".carousel").swipeleft(function() {  
	    $(this).carousel('next');
	});

	/*
	$('.carousel').carousel({
	   interval: 600
	});
	*/
});


