
function placeFigure() {
	//$("div#sticky" + count + " > img").toggleClass("hiding");
	
	console.log(count);
	count++;
	localStorage.setItem("Count", count);
	$('body').css('background-image', 'url(../images/hardCodeMap'+ count +'.gif)');
	//$("div#sticky" + count + " > img").toggleClass("hiding");
	//popup();
	//return count;
}

$(document).ready(function() {

	$("button#start").click(function () {
		
		//console.log(count);
		window.location.href='itemInfoMessage.html';
	});

});
/*
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
*/