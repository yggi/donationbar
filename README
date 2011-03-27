donationbar
===========
by Sebastian Steuer (iggy@muc.ccc.de)

A simple vertical bar, visualizing the current amount of donations in relation to a given target.
Written in javascript, relying on jquery.

Motivation
----------
This is the frontend for an automatic donation counter. As the aggregation of the amount of donations requires access to sensitive information (e.g. onlinebanking account), it should be separated from the presentation for security reasons. This script expects just a url to a file with the current donated amount. The extraction of that amount from a banking account and the creation of that file is not in the scope of this project.

How to use
----------
###Import jquery.js and donationbar.js:###

	<script type="text/JavaScript" src="js/jquery-1.5.1.min.js"></script>
	<script type="text/JavaScript" src="js/donationbar.js"></script>

###Make a container with an id and style it (at least) with width and height###

	<div id="donationbar" style="width:30px; height:200px"></div>

###Call the donationbar script like this:###

	<script type="text/javascript">
	    $(function() {
		    var myBar =$.donationbar("donationbar", {target: "4200", current: "data.txt");
		    myBar.draw();
	    });
	</script>

The first argument of `$.donationbar()` is the id of the container in which the bar should appear, the second a set of options:

*  `target`: required. The amount of money to be reached.
*  `current`: required. A url to a file that contains the current amount of donations. same-origin policy applies. The content must be parsable to an javascript integer.
*  `color_bg`: optional. May be a valid css-color, sets the color of the upper (not filled) part of the bar. Defaults to "white"
*  `color_bar`: optional. May be a valid css-color, sets the color of the lower (filled) part of the bar. Defaults to "black"
*  `margin`: optional. distance (in px) between the container and the bar. Defaults to "0"

###You can optionally use more containers to provide additional information:###
If you used `donationbar` as id for the bar container, elements with the ids `donationbar-target`, `donationbar-current` and `donationbar-percentage` will be filled with the appropriate values.

Example
-------
See [donationbar.html](https://github.com/yggi/donationbar/blob/master/donationbar.html) for an example with full functionality