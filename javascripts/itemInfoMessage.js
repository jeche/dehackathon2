function getData(){
	
	var data = localStorage.getItem("bikeArray");
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

	/*var price1 = document.getElementById("price1");
	price1.textContent = resultArray[0].price;

	var price2 = document.getElementById("price2");
	price2.textContent = resultArray[1].price;

	var img1 = document.getElementById("img1");
	img1.setAttribute('src', resultArray[0].photos[0].url);
	console.log(resultArray);

	var img2 = document.getElementById("img2");
	img2.setAttribute('src', resultArray[1].photos[0].url);

	var info1 = document.getElementById("info1");
	info1.textContent = resultArray[0].description;

	var info2 = document.getElementById("info2");
	info2.textContent = resultArray[1].description;*/
			
										

}

