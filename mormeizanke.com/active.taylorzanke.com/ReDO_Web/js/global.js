jQuery(document).ready(function(){
	$(window).scroll(function(){
		$('nav').toggleClass('scrolled', $(this).scrollTop() > 500);
	});

	$('.toggleItem').on('click', function(event) {
		$(".toggleActive").toggleClass("toggleActive toggleInactive");
		$(this).toggleClass("toggleActive toggleInactive");

		var itemId = $(".toggleActive").attr("data-id");
		var returnId = $(".toggleActive").attr("data-return");
		var itemIdArray = ["peak", "balanced", "optComm", "optResi"]
		var returns = ["25%", "50%", "75%", "90%"]

		$(".featured-img").attr("id", itemId);

		$(".metricItem").html(returnId);

	});

	// $(document).on('click','.linkTo', function(event) {
	// 	    event.preventDefault();
	// 	    var target = "#" + this.getAttribute('data-target');
	// 	    $('html, body').animate({
	// 	        scrollTop: $(target).offset().top
	// 	    }, 700, "easeInOutCubic");
	// });
});