function getData(){
	
<<<<<<< HEAD
	var data = JSON.parse(localStorage.getItem("bikeArray"));
	var boughtBikeArray = JSON.parse(localStorage.getItem("boughtBikeArray"));
=======
	var pug = JSON.parse(localStorage.getItem("bikeArray"));
	var usedArray = JSON.stringify([]);
	localStorage.setItem("usedArray", usedArray);
	
>>>>>>> 7b35c6a425e9b41d699b52ccfdb1aae99d77e814
	var lowPrice = 100000000;
	var highPrice = 0;
	var l = 0, h = 0;

<<<<<<< HEAD
for(var i = 0; i < data.length; i++){
	if(data[i].price < lowPrice){
		lowPrice = data[i].price;
		l = i;
	}
	if(data[i].price > highPrice){
		highPrice = data[i].price;
=======
for(var i = 0; i < pug.length; i++){
	if(pug[i].price < lowPrice){
		lowPrice = pug[i].price;
		l = i;
	}
	if(pug[i].price > highPrice){
		highPrice = pug[i].price;
>>>>>>> 7b35c6a425e9b41d699b52ccfdb1aae99d77e814
		h = i;
	}
}										
	var item1 = document.getElementById("item1");
<<<<<<< HEAD
	item1.textContent = data[h].makeDisplayName;
	var item2 = document.getElementById("item2");
	item2.textContent = data[l].makeDisplayName;

	var price1 = document.getElementById("price1");
	price1.textContent = data[h].price;

	var price2 = document.getElementById("price2");
	price2.textContent = data[l].price;

	var img1 = document.getElementById("img1");
	img1.setAttribute('src', data[h].photos[0].url);

	var img2 = document.getElementById("img2");
	img2.setAttribute('src', data[l].photos[0].url);

	var info1 = document.getElementById("info1");
	info1.textContent = data[h].description;

	var info2 = document.getElementById("info2");
	info2.textContent = data[l].description;
			
	boughtBikeArray.push(data[h]);
	localStorage.setItem("boughtBikeArray", JSON.stringify(boughtBikeArray));	
	boughtBikeArray.push(data[l]);	
	localStorage.setItem("boughtBikeArray", JSON.stringify(boughtBikeArray));	
	
	if(h > l){
		if(h > -1){
			data.splice(h, 1);
			localStorage.setItem("bikeArray", JSON.stringify(data));
		}
		if(l > -1){
			data.splice(l, 1);
			localStorage.setItem("bikeArray", JSON.stringify(data));
=======
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
>>>>>>> 7b35c6a425e9b41d699b52ccfdb1aae99d77e814
		}
	}
	else {
		if(l > -1){
<<<<<<< HEAD
			data.splice(l, 1);
			localStorage.setItem("bikeArray", JSON.stringify(data));
		}
		if(h > -1){
			data.splice(h, 1);
			localStorage.setItem("bikeArray", JSON.stringify(data));
=======
			pug.splice(l, 1);
			localStorage.setItem("bikeArray", JSON.stringify(pug));
		}
		if(h > -1){
			pug.splice(h, 1);
			localStorage.setItem("bikeArray", JSON.stringify(pug));
>>>>>>> 7b35c6a425e9b41d699b52ccfdb1aae99d77e814
		}
	}
							

}

<<<<<<< HEAD
=======
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

>>>>>>> 7b35c6a425e9b41d699b52ccfdb1aae99d77e814
