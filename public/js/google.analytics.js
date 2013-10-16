/*
	GOOGLE ANALYTICS 
	Update DOMAIN and UA-XXXXX-X below:
*/
if(document.domain == "www.DOMAIN.com" || document.domain == "DOMAIN.com"){
	var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']]; // Change UA-XXXXX-X to be your site's ID
	(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];g.async=1;
	g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
	s.parentNode.insertBefore(g,s)}(document,'script'));

	//alert('Tracking is ON.');
} else {
	//alert('Tracking is OFF.');
}
