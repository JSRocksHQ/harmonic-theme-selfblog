/**
*
* HARMONIC WEBSITE CLASS
*
**/
var HarmonicWebsite = function () {
	'use strict'

	var	PUBLIC = this,
		PRIVATE = {},

		W = window,
		D = document,

		BODY = D.body,
		HTML = D.documentElement,

		BREAKPOINTS = {
			s: 'small',
			m: 'medium',
			l: 'large'
		};


	/**
	*
	* PRIVATE METHODS
	*
	**/
	PRIVATE.viewportDefine = function (windowSize) {
		var bodyElement = D.getElementsByTagName('body')[0],
			ww = windowSize.windowWidth;

		console.log('### ww', windowSize);

		switch(true) {
			case ww >= 1190:
				PUBLIC.setAttrElement(HTML, 'data-range', BREAKPOINTS.l);
				break;
			case ww >= 768 && ww < 1024:
				PUBLIC.setAttrElement(HTML, 'data-range', BREAKPOINTS.m);
				break;
			case ww >= 320 && ww < 768:
				PUBLIC.setAttrElement(HTML, 'data-range', BREAKPOINTS.s);
				break;
			default:
				console.log('Sorry, your HTML size not exist.');
		}
	};


	/**
	*
	* PUBLIC METHODS
	*
	**/
	PUBLIC.windowSize = function () {
		var ww = Math.max(
		        D.body.scrollWidth, HTML.scrollWidth,
				D.body.offsetWidth, HTML.offsetWidth,
				D.body.clientWidth, HTML.clientWidth
		    ),

			wh = Math.max(
		        BODY.scrollHeight, HTML.scrollHeight,
		        BODY.offsetHeight, HTML.offsetHeight,
		        BODY.clientHeight, HTML.clientHeight
		    );

		return {windowWidth: ww, windowHight: wh}
	};

	PUBLIC.setAttrElement = function (el, key, value) {
		el.setAttribute(key, value);
	};


	/**
	*
	* CONSTRUCT
	*
	**/
	(function HarmonicWebsite () {
		// PRIVATE.viewportDefine(PUBLIC.windowSize());
	})();

	return PUBLIC;
};


/**
*
* HARMONIC OBJECT
*
**/
// var website = new HarmonicWebsite();