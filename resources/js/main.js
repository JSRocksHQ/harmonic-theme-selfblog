/**
*
* HARMONIC WEBSITE CLASS
*
**/
var HarmonicWebsite = function () {
	'use strict';

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

    /*
    *
    *@author: mateusortiz
    *@url: https://gist.github.com/mateusortiz/1651a0ee191d64159b00
    *@description: Consult GitHub API to get contributors project
    *
    */
    PUBLIC.contributors = function (url) {
        console.log('ENTERED: CONTRIBUTORS FUNCTION');

        (function (window, document) {

            'use strict';

            var oReq = new XMLHttpRequest();
            var url = 'https://api.github.com/repos/JSRocksHQ/harmonic/contributors';

            // Callback function
            function appendContributors() {
                /*jshint validthis: true*/
                var result = JSON.parse(this.responseText),
                    tpl = '<li class="contributor" itemprop"itemListElement" itemscope itemtype="http://schema.org/Person"><a href="#" target="_blank"><img class="picture"></a></li>',
                    str = '',
                    div;

                for (var i = 0; i < result.length; i++) {
                    div = document.createElement('div');
                    div.innerHTML = tpl;
                    div.querySelector('a').href = result[i].html_url;
                    div.querySelector('img').src = result[i].avatar_url + '&size=120';
                    str += div.innerHTML;
                }

                document.querySelector('#wrapContributors').innerHTML = str;
            }

            oReq.addEventListener('load', appendContributors);
            oReq.open('get', url, true);
            oReq.send();

        })(window, document);
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
var website = new HarmonicWebsite();

website.contributors();
