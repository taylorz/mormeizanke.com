$(document).ready(function() {

	$(window).load(function(){
		preloaderFadeOutTime = 500;
		function hidePreloader(){
		    var preloader = $('.spinner-wrapper');
		    preloader.fadeOut(preloaderFadeOutTime);
		}
		hidePreloader();
    });


    $('.workImages').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 2,
	  slidesToScroll: 1,
	  variableWidth: true,
	  cssEase: 'linear',
	  swipe: true,
	  prevArrow: $('.prevArrow'),
	  nextArrow: $('.nextArrow')
	});

var cards = $(".homepageSlide");
for(var i = 0; i < cards.length; i++){
    var target = Math.floor(Math.random() * cards.length -1) + 1;
    var target2 = Math.floor(Math.random() * cards.length -1) +1;
    cards.eq(target).before(cards.eq(target2));
}

	$('.homepage').slick({
	  dots: false,
	  infinite: true,
	  // speed: 300,
	  fade: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  cssEase: 'linear',
	  swipe: true,
	  autoplay: true,
	  autoplaySpeed: 1500,
	  arrows: false
	});

});