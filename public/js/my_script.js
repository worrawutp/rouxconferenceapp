$(function(){
	//active schedule tabs
	var hashtag = location.hash;
	hashtag && $('ul.nav a[href="' + hashtag + '"]').tab('show')

	//Make menu properly active
	$("#home a:contains('Home')").parent().addClass('active');
	$("#venuetravel a:contains('Venue/Travel')").parent().addClass('active');
	$("#schedule a:contains('Schedule')").parent().addClass('active');
	$("#artists a:contains('Artists')").parent().addClass('active');
	$("#register a:contains('Register')").parent().addClass('active');

	// controlling opening of accordions
	$('#monday.collapse').addClass('in');

	$('#artists #tuesday.collapse').addClass('in');
	$('#artists #wednesday.collapse').addClass('in');
	$('#artists #friday.collapse').addClass('in');

	$('#register #monday.collapse').removeClass('in');

	// add bootstrap classes to photos
	$('.abouttheartists img').addClass('img-circle');
	$('aside.photosformlastyear img').addClass('img-thumbnail');
	$('.artistinfo .photogrid img').addClass('img-circle');

	// Make menu drop automatically
	$('ul.nav li.dropdown').hover(function(){
		  $('.dropdown-menu', this).fadeIn();
		}, function(){
			$('.dropdown-menu', this).fadeOut('fast');
	}); // hover

	// tooltip for artists thumbnail
	$('[data-toggle="tooltip"]').tooltip({ animation: true });

	// Show modals
	$('.modalphotos img').on('click', function(){
		$('#modal').modal({
			show: true
		})

		var mysrc = this.src.substr(0, this.src.length-7) + '.jpg';
		$('#modalimage').attr('src', mysrc);
		$('#modalimage').on('click', function(){
			$('#modal').modal('hide');
		});
	});

}); // jQuery is loaded