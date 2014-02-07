$(document).ready(function() {
	var count = localStorage.setItem("Count", 0);
	$("button#start").click(function () {
		
		//console.log(count);
		window.location.href='index.html';
	});

});