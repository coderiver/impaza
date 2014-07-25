head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });
	$(".header__menu").click(function(event) {
		$('.menu').slideToggle();
	});
	console.log($('body').html());
});