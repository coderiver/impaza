head.ready(function() {
	$(".alist a").click(function() {
		getid = $(this).attr('href');

	    $('html, body').animate({
	        scrollTop: $(getid+'').offset().top - 20
	    }, 1000);
	    return false;
	});
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



	function calcResults(){
			
	        var count = 0;
	        if($('.test :checked').length == 5){

	            $('.test :checked').each(function() {
	                count += parseInt($(this).attr('value'));
	            });
	            $('.test__results > div').hide();
	            if (count >= 0 && count <= 10) {
	                $('.result-1').show();
	            } else if (count >= 11 && count <= 15) {
	                $('.result-2').show();
	            } else if (count >= 16 && count <= 20) {
	                $('.result-3').show();
	            } else if (count >= 21 && count <= 25) {
	                $('.result-4').show();
	            }
	        }
	        else{
	        	alert('Пожалуйста, ответьте на все вопросы');
	        }
	    }

	    $('.test__submit a').on('click', function(){
	        calcResults();
	        return false;
	    });
});