$(document).ready(function(){
	console.log ('DOM has loaded')

	$( '#me' ).fadeOut(500)
	$('#me').fadeIn(500)


	$( "#contact" ).click(function() {
	  $( "#contactmore" ).slideToggle( "fast" );
	});

	$('#about').click( function () {
		$ ("#contentabout").slideToggle ("fast");
	});
})