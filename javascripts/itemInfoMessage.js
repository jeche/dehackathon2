function getData(){
	
	var data = JSON.parse(localStorage.getItem("bikeArray"));
	var boughtBikeArray = JSON.parse(localStorage.getItem("boughtBikeArray"));
	var lowPrice = 100000000;
	var highPrice = 0;
	var l = 0, h = 0;

for(var i = 0; i < data.length; i++){
	if(data[i].price < lowPrice){
		lowPrice = data[i].price;
		l = i;
	}
	if(data[i].price > highPrice){
		highPrice = data[i].price;
		h = i;
	}
}										
	var item1 = document.getElementById("item1");
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
		}
	}
	else {
		if(l > -1){
			data.splice(l, 1);
			localStorage.setItem("bikeArray", JSON.stringify(data));
		}
		if(h > -1){
			data.splice(h, 1);
			localStorage.setItem("bikeArray", JSON.stringify(data));
		}
	}
							

}

