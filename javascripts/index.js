var count = 1;

function placeFigure() {
	//$("div#sticky" + count + " > img").toggleClass("hiding");
	
	count++;
	$('body').css('background-image', 'url(../images/hardCodeMap'+ count +'.gif)');
	//$("div#sticky" + count + " > img").toggleClass("hiding");
	popup();
	return count;
}

$(document).ready(function() {

	$("button#start").click(function () {
		count = placeFigure();
		if (count == 2) {
			$("button#start").html("Continue");
		}
		if (count == 25) {
			alert("here!");
			$('#myModal').modal('toggle');
			//window.location.replace("../views/ending.html");
		}
		console.log(count);
	});

});

function popup()
{
	if (! window.focus)return true;
	var href='../views/itemInfoMessage.html';
	window.open(href, 'notes', 'width=650,height=700');


	return false;
}

function closePopUp(){
	window.close();
}
