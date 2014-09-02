head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });
	$('.country').click(function(event) {
		$(this).toggleClass('is-active');
	});
	$('.select select').change(function(event) {
		$(this).prev().text($(this).val());
	});
});