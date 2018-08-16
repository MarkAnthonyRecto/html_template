'use strict';
var bp = {
	width: 0,
	height: 0,
	init: function() {
		// for mobile
		if (Modernizr.touch) {
			$('html').addClass('bp-touch');
		}

		bp.loader('init');
		bp.resize();
	},
	ready: function() {
		bp.resize();
		// hide the preloader
		bp.loader('close');
	},
	loader: function(state) {
		var _loader = {
			content: '',
			init: function() {
				_loader.content = '<div class="bp-preloader"><div class="spinner"><span class="s-dot s-dot1"></span><span class="s-dot s-dot2"></span></div></div>';
				$('body').prepend(_loader.content);
			},
			close: function() {
				$('.bp-preloader').fadeOut();
			}
		}

		if(state == 'init') {
			_loader.init();
		} else if(state == 'close') {
			_loader.close();
		}
	},
	resize: function() {
		var _resize = {
			init: function() {
				bp.width = $(window).outerWidth();
				bp.height = $(window).outerHeight();

				// STICKY FOOTER
				var headerHeight = $('header').outerHeight(),
				footerHeight = $('footer').outerHeight(),
				footerTop = (footerHeight) * -1;
				$('footer').css({marginTop: footerTop});
				$('#main-wrapper').css({paddingBottom: footerHeight});

				// for equal height
				_resize.equalize($('.classname'));
			},
			equalize: function(target) {
				$(target).css({minHeight: 0});
				var _biggest = 0;
				for ( var i = 0; i < target.length ; i++ ){
					var element_height = $(target[i]).outerHeight();
					if(element_height > _biggest ) _biggest = element_height;
				}
				$(target).css({minHeight: _biggest});
				return _biggest;
			}
		}
		_resize.init();
	}
}
bp.init();

$(document).ready(function() {
	bp.ready();
});

$(window).resize(function() {
	bp.resize();
});