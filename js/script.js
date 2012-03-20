$(function() {
	$(".dropdown a.selected").click(function() {
	  $(this).toggleClass("active");
		$(this).next(".dropdown-options").toggle();
	});
});