function getData(){
	
	var Data = get_cycle_list(0.0, 300000.0);
	if(Data === null) return true;
	var lowPrice = 100000000;
	var highPrice = 0;
	var l = 0, h = 0;

for(var i = 0; i < Data.length; i++){
	if(data[i].price < lowPrice){
		lowPrice = Data[i].price;
		l = i;
	}
	if(Data[i].price > highPrice){
		highPrice = Data[i].price;
		h = i;
	}
}

var item1 = document.getElementById("item1");
item1.textContent = data[l].makeDisplayName;

var item2 = document.getElementById("item2");
item2.textContent = data[h].makeDisplayName;

var price1 = document.getElementById("price1");
price1.textContent = lowPrice;

var price2 = document.getElementById("price2");
price2.textContent = highPrice;

var img1 = document.getElementById("img1");
img1.textContent = data[l].photos[0].url;

var img2 = document.getElementById("img2");
img2.textContent = data[h].photos[0].url;

var info1 = document.getElementById("info1");
info1.textContent = data[l].description;

var info2 = document.getElementById("info2");
info2.textContent = data[h].description;

}

