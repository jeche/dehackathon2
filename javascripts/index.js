function placeFigure(e) {
	var topPosition = $(sticky).css("top");
	//alert(topPosition);
	var leftPosition = $(sticky).css("left");
	//alert(leftPosition);
	var direction = getDirection(topPosition, leftPosition);
	if (direction == "down") {
		topPosition = topPosition.replace(/[^\d]/g, '');
		topPosition = parseInt(topPosition);
		$(sticky).css("top", (topPosition + 129) + "px");
		popup();
	}
	else if (direction == "right") {
		leftPosition = leftPosition.replace(/[^\d]/g, '');
		leftPosition = parseInt(leftPosition);
		$(sticky).css("left", (leftPosition + 129) + "px");
		popup();
	}
	else if (direction == "left") {
		leftPosition = leftPosition.replace(/[^\d]/g, '');
		leftPosition = parseInt(leftPosition);
		$(sticky).css("left", (leftPosition - 129) + "px");
		popup();
	}
}

function getDirection(top, left) {
	if ((top == "35px"  || top == "293px" || top == "551px") && left != "556px" ) {
		return "right";
	}
	
	else if ((top == "35px"  || top == "293px" || top == "551px") && left == "556px") {
		return "down";
	}
	
	else if (left == "40px") {
		return "down";
	}
	
	else {
		return "left";
	}
}

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
