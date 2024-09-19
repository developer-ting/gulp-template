function jscss() {
	var pathconfig = {
		css_path: [
			//			'./src/css/slick.css',
			//			'./src/css/slick-theme.css',
			"./src/css/style.css",
		],

		js_path: [
			"./src/js/vendor/jquery-1.11.2.min.js",
			"./src/js/components/responsive-header.js",
			//'./src/js/vendor/jquery.validate.min.js',
			//'./src/js/vendor/slick.min.js',
			//'./src/js/vendor/scrollmagic/TweenMax.min.js',
			//'./src/js/vendor/scrollmagic/ScrollMagic.min.js',
			//'./src/js/vendor/scrollmagic/animation.gsap.min.js',
			//'./src/js/vendor/scrollmagic/debug.addIndicators.min.js',
			//'./src/js/vendor/scrollmagic/ScrollToPlugin.min.js',
			// Utilities
			"./src/js/utils/*.js",
			"./src/js/plugins.js",
			"./src/js/main.js",
			// Pages
			"./src/js/pages/*.js",
		],
	};

	return pathconfig;
}

module.exports = jscss();

/*src: [
    "velocity.min.js",
    "global.js",
    "collapsible.js",
    "dropdown.js",
    "modal.js",
    "materialbox.js",
    "parallax.js",
    "tabs.js",
    "tooltip.js",
    "waves.js",
    "toasts.js",
    "sidenav.js",
    "scrollspy.js",
    "autocomplete.js",
    "forms.js",
    "slider.js",
    "cards.js",
    "chips.js",
    "pushpin.js",
    "buttons.js",
    "datepicker.js",
    "timepicker.js",
    "characterCounter.js",
    "carousel.js",
    "tapTarget.js",
    "select.js",
    "range.js",
]*/
