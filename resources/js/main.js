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
	PRIVATE.viewportApply = function (windowSize) {
		var bodyElement = D.getElementsByTagName('body')[0],
			ww = windowSize.windowWidth; // 1170

		switch(true) {
			case ww >= 1190:
				HTML.setAttribute('data-range', BREAKPOINTS.l);
				break;
			case ww >= 768 && ww < 1024:
				HTML.setAttribute('data-range', BREAKPOINTS.m);
				break;
			case ww >= 320 && ww < 768:
				HTML.setAttribute('data-range', BREAKPOINTS.s);
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
		function getDocHeight () {
		    return Math.max(
		        BODY.scrollHeight, HTML.scrollHeight,
		        BODY.offsetHeight, HTML.offsetHeight,
		        BODY.clientHeight, HTML.clientHeight
		    );
		};

		function getDocWidth () {
		    return Math.max(
		        BODY.scrollWidth, HTML.scrollWidth,
		        BODY.offsetWidth, HTML.offsetWidth,
		        BODY.clientWidth, HTML.clientWidth
		    );
		};

		return {windowWidth: getDocWidth(), windowHight: getDocHeight()}
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
		PRIVATE.viewportApply(PUBLIC.windowSize());

		W.addEventListener('resize', function () {
			PRIVATE.viewportApply(PUBLIC.windowSize());
		});
	})();

	return PUBLIC;
};


/**
*
* HARMONIC OBJECT
*
**/
var website = new HarmonicWebsite();