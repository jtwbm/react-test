$(document).ready(function() {
	$(".mainMenu-button").on("click", function() {
		$(".mainMenu").slideToggle(300);
		$(this).toggleClass("active");

		return false;
	});
});