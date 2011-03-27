jQuery(function($) {
	
	function DonationBar(container, opts) {
		//default options
		options = {color_bg: "white", color_bar: "black", margin: 0}
		$.extend(options, opts);
		
		//get the container
		var bar = $("#" + container);
		
		//get the dimensions of the container
		var barWidth = bar.width();
		var barHeight = bar.height();
		
		//css properties for bar and cover
		var  cssValue = {
			"position" : "absolute",
			"display": "block",
			"margin": "0",
			"border": "0",
			"width": bar.width()-2*options.margin + "px",
			"height": bar.height()-2*options.margin + "px",
			"top": options.margin + "px",
			"left": options.margin + "px",
			"overflow": "hidden",
			"text-indent": "-30px",
			"background-color": options.color_bar,
		}
		
		var cssCover = {
			"position": "absolute",
			"display": "block",
			"width": bar.width()-2*options.margin+ "px",
			"height": bar.height()-2*options.margin + "px",
			"border": "0",
			"left": "0",
			"background-color": options.color_bg,
		}
		
		this.draw = function() {
			//fill the container
			bar.html('<span id="' +container+ '-value"><em id="' +container+ '-cover"></em></span>');
			
			//set the css for bar and cover
			$("#"+container+"-value").css(cssValue);
			$("#"+container+"-cover").css(cssCover);
			
			//get the current value, set the cover and fill the optional fields with values
			$.get(options.current, function(data) {
				var current = parseInt(data)
				var perc = parseInt(current / options.target*100);
				$("#" + container + "-cover").css('bottom', perc+"%");
				$("#" + container + "-target").html(options.target);
				$("#" + container + "-current").html(data);
				$("#" + container + "-percentage").html(perc);
			});
		}
	
	};
	
	$.donationbar = function(container, options) {
		return new DonationBar(container, options);
	}
});


