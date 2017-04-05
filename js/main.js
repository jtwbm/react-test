$(document).ready(function() {
	$(".mainMenu-button").on("click", function(e) {
		e.preventDefault();
		$(".mainMenu").slideToggle(300);
		$(this).toggleClass("active");
	});
});