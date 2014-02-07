
var count = 1;

function placeFigure() {
	$("div#sticky" + count + " > img").toggleClass("hiding");
	console.log($("div#sticky" + count));
	count++;
	
	$("div#sticky" + count + " > img").toggleClass("hiding");
;
	console.log($("div#sticky" + count + " > img"));
	popup();
	return count;
}

$(document).ready(function () {
	$("button#start").click(function () {
		count = placeFigure();
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
