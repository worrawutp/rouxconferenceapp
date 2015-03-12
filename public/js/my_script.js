$(function(){

	//Make menu properly active
	$("#home a:contains('Home')").parent().addClass('active');
	$("#venuetravel a:contains('Venue/Travel')").parent().addClass('active');
	$("#schedule a:contains('Schedule')").parent().addClass('active');
	$("#artists a:contains('Artists')").parent().addClass('active');
	$("#register a:contains('Register')").parent().addClass('active');

	// Make menu drop automatically
	$('ul.nav li.dropdown').hover(function(){
		  $('.dropdown-menu', this).fadeIn();
		}, function(){
			$('.dropdown-menu', this).fadeOut('fast');
	}); // hover

	// tooltip for artists thumbnail
	$('[data-toggle="tooltip"]').tooltip({ animation: true });

}); // jQuery is loaded