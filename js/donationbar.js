var target = 4200

$(document).ready(function () {
	$.get('data/donationbar-data.txt', function(data) {
		var perc = data/target*100+'%'
		$('.donationbar-cover').css('bottom', perc);
		$('.target').html(target + " EUR");
		$('.current').html(data + " EUR");
		$('.percentage').html(perc);
	});
});