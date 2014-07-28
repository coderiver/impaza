head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });
	$(".header__menu").click(function(event) {
		$('.menu').slideToggle();
	});

	$(".toggle dt").click(function(event) {
		if(!$(this).hasClass('is-active')){
			$('.toggle dt').removeClass('is-active');
			$('.toggle dd').slideUp();
			$(this).addClass('is-active').next().slideDown();
		}
	});
	console.log($('body').html());
});