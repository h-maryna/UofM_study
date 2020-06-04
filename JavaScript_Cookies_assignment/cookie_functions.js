/**
* Set a cookie with all parameters
* @param String name cookie key/name
* @param String value cookie value
* @param Int maxage Max age in seconds
* @param String path Valid cookie path
* @return Void
*/
function setCookie(name, value='', maxage='', path='') {
	var name = name.trim();
	var value = encodeURIComponent(value.trim());
	// if maxage has length
	if(maxage.length) {
		   var maxage = parseInt(maxage);
	}
	var path = path.trim()

	document.cookie = name + '=' + value + ';max-age=' +
	maxage + ';path=' + path;

}

/**
 * Return a cookie value, or all cookies
 * @param  String name The cookie name (optional)
 * @return Mixed   string or array
 */
function getCookies(name='') {

	// split all cookies into an array of raw cookies
	var raw_cookies = document.cookie.split(';');


	// declare associative array to hold cookie values
	var all_cookies = [];

	// split raw cookies on = to key/value pairs
	for(i=0;i<raw_cookies.length;i++) {

		cookie = raw_cookies[i].split('=');
		// ['name', 'Dave']
		var cookie_name = cookie[0].trim();
		var cookie_value = decodeURIComponent( cookie[1] );
		// assign key/values to assoc array
		all_cookies[ cookie_name ] = cookie_value;
	}

	// if user provided name, 
	if(name.length) {
		// return value for that cookie
		return all_cookies[name]; // 
	} else {
		return all_cookies;
	}

}	