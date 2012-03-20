$(function() {
	$(".dropdown a.selected").click(function() {
	  $(this).toggleClass("active");
		$(this).next(".dropdown-options").fadeToggle('fast');
	});
	
	$(".create-room").click(function() {
		$(this).hide();
		$(this).next(".text").fadeIn();
	});
});