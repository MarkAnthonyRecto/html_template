//get all elements with class and get the biggest box
function get_biggest(elements){
	var biggest_height = 0;
	for ( var i = 0; i < elements.length ; i++ ){
		var element_height = $(elements[i]).outerHeight();
		//compare the height, if bigger, assign to variable
		if(element_height > biggest_height ) biggest_height = element_height;
	}
	return biggest_height;
}

var windowWidth = 0;
var windowHeight = 0;
var headerHeight = 0;
var footerHeight = 0;
var footerTop = 0;

function resize() {
	windowWidth = $(window).width();
	windowHeight = $(window).height();

	// STICKY FOOTER
	headerHeight = $('header').outerHeight();
	footerHeight = $('footer').outerHeight();
	footerTop = (footerHeight) * -1
	$('footer').css({marginTop: footerTop});
	$('#main-wrapper').css({paddingBottom: footerHeight});

	// for vertically middle content
	$('.bp-middle').each(function() {
		var bpMiddleHeight = $(this).outerHeight() / 2 * - 1;
		$(this).css({marginTop: bpMiddleHeight});
	});

	// for equalizer
	$('.classname').css({minHeight: 0});
	var ClassName = get_biggest($('.classname'));
	$('.classname').css({minHeight: ClassName});
}

$(window).resize(function() {
	resize();
});

$(document).ready(function() {
	if (Modernizr.touch) {
		$('html').addClass('bp-touch');
	}
	
	resize();
});

$(window).load(function() {
	resize();
});

// preloader once done
Pace.on('done', function() {
	// totally hide the preloader especially for IE
	setTimeout(function() {
		$('.pace-inactive').hide();
	}, 500);
});
