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
		D = document;

    /*
    *
    *@author: mateusortiz
    *@url: https://gist.github.com/mateusortiz/1651a0ee191d64159b00
    *@description: Consult GitHub API to get contributors project
    *
    */
    PUBLIC.contributors = function (url) {
        (function () {

            'use strict';

            var oReq = new XMLHttpRequest(),
                url = 'https://api.github.com/repos/JSRocksHQ/harmonic/contributors';

            function appendContributors() {
                var result = JSON.parse(this.responseText),
                    tpl = '<li class="contributor" itemprop"itemListElement" itemscope itemtype="http://schema.org/Person"><a href="#" target="_blank"><img class="picture"></a></li>',
                    str = '',
                    div;

                for (var i = 0; i < result.length; i++) {
                    div = D.createElement('div');
                    div.innerHTML = tpl;
                    div.querySelector('a').href = result[i].html_url;
                    div.querySelector('img').src = result[i].avatar_url + '&size=120';
                    str += div.innerHTML;
                }

                D.querySelector('#wrapContributors').innerHTML = str;
            }

            oReq.addEventListener('load', appendContributors);
            oReq.open('get', url, true);
            oReq.send();

        })();
    };

	// (function HarmonicWebsite () {
	// 	// PRIVATE.viewportDefine(PUBLIC.windowSize());
	// })();

	return PUBLIC;
};
var website = new HarmonicWebsite();

website.contributors();
