var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';
var apiKey = '611d72844e99c7c';

module.exports = {
	get: function(url) {
		return fetch(rootUrl + url,{
			headers: {
				'Authorization': 'Client-ID ' + apiKey
			}
		});
	}
};