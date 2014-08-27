head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });
	$('.country').click(function(event) {
		$(this).toggleClass('is-active');
	});
	console.log($('body').html());
});