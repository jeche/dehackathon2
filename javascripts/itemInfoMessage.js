function getData(){
	
	var pug = JSON.parse(localStorage.getItem("bikeArray"));
	var usedArray = JSON.stringify([]);
	localStorage.setItem("usedArray", usedArray);

	var lowPrice = 100000000;
	var highPrice = 0;
	var l = 0, h = 0;

for(var i = 0; i < pug.length; i++){
	if(pug[i].price < lowPrice){
		lowPrice = pug[i].price;
		l = i;
	}
	if(pug[i].price > highPrice){
		highPrice = pug[i].price;
		h = i;
	}
}										
	var item1 = document.getElementById("item1");
	item1.textContent = pug[h].makeDisplayName;
	var item2 = document.getElementById("item2");
	item2.textContent = pug[l].makeDisplayName;

	var price1 = document.getElementById("price1");
	price1.textContent = pug[h].price;

	var price2 = document.getElementById("price2");
	price2.textContent = pug[l].price;

	var img1 = document.getElementById("img1");
	img1.setAttribute('src', pug[h].photos[0].url);

	var img2 = document.getElementById("img2");
	img2.setAttribute('src', pug[l].photos[0].url);

	var info1 = document.getElementById("info1");
	info1.textContent = pug[h].description;

	var info2 = document.getElementById("info2");
	info2.textContent = pug[l].description;
	
	usedArray = JSON.parse(localStorage.getItem("usedArray"));		
	pug[h].idNo = 1;
	usedArray.push(pug[h]);
	localStorage.setItem("usedArray", JSON.stringify(usedArray));
	pug[l].idNo = 2;
	usedArray.push(pug[l]);	
	localStorage.setItem("usedArray", JSON.stringify(usedArray));
	
	if(h > l){
		if(h > -1){
			pug.splice(h, 1);
			localStorage.setItem("bikeArray", JSON.stringify(pug));
		}
		if(l > -1){
			pug.splice(l, 1);
			localStorage.setItem("bikeArray", JSON.stringify(pug));
		}
	}
	else {
		if(l > -1){
			pug.splice(l, 1);
			localStorage.setItem("bikeArray", JSON.stringify(pug));
		}
		if(h > -1){
			pug.splice(h, 1);
			localStorage.setItem("bikeArray", JSON.stringify(pug));
		}
	}
							

}

function setFlag(selection){
	var boughtBikeArray = JSON.parse(localStorage.getItem("boughtBikeArray"));
	var notBoughtArray = JSON.parse(localStorage.getItem("notBoughtArray"));
	var usedArray = JSON.parse(localStorage.getItem("usedArray"));
	
	if(selection === 1){
		if(usedArray[0].idNo === 1){
				boughtBikeArray.push(usedArray[0]);
				localStorage.setItem("boughtBikeArray", JSON.stringify(boughtBikeArray));
				notBoughtArray.push(usedArray[1]);
				localStorage.setItem("notBoughtArray", JSON.stringify(notBoughtArray));	
				
				
		} 
		
	}else{
		boughtBikeArray.push(usedArray[1]);
				localStorage.setItem("boughtBikeArray", JSON.stringify(boughtBikeArray));
				notBoughtArray.push(usedArray[0]);
				localStorage.setItem("notBoughtArray", JSON.stringify(notBoughtArray));	
	}
	closePopUp();
}

