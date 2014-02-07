function getData(){
	
	var pug = JSON.parse(localStorage.getItem("bikeArray"));
	var usedArray = JSON.stringify([]);
	localStorage.setItem("usedArray", usedArray);
	
	var f = 0, s = 0;
	var inflateBy = 0;
	var inflate = 0;
	var inflatedPrice = 0;
	var priceToInflate = 0;
			
	f = randomIntFromInterval(0, pug.length - 1);
	s = randomIntFromInterval(0, pug.length - 1);
	inflateBy = randomIntFromInterval(5, 15);
	inflate = randomIntFromInterval(0, 1); 			
	
	usedArray = JSON.parse(localStorage.getItem("usedArray"));		
	pug[f].idNo = "1";	
	pug[s].idNo = "2";
								
	var item1 = document.getElementById("item1");
	item1.textContent = pug[f].makeDisplayName;
	
	var item2 = document.getElementById("item2");
	item2.textContent = pug[s].makeDisplayName;
	
	var price1 = document.getElementById("price1");
	var price2 = document.getElementById("price2");

	if(inflate == 0){
		priceToInflate = parseInt(pug[f].price, 10);
		inflatedPrice = priceToInflate + priceToInflate * (inflateBy/100);		
		price1.textContent = inflatedPrice.toFixed(0);
		price2.textContent = pug[s].price;
		pug[f].inflatedPrice = inflatedPrice.toFixed(0);
	}	
	else if(inflate == 1){
		priceToInflate = parseInt(pug[s].price, 10);
		inflatedPrice = priceToInflate + priceToInflate * (inflateBy/100);		
		price2.textContent = inflatedPrice.toFixed(0);
		price1.textContent = pug[f].price;
		pug[s].inflatedPrice = inflatedPrice.toFixed(0);
		
	}

	var img1 = document.getElementById("img1");
	img1.setAttribute('src', pug[f].photos[0].url);

	var img2 = document.getElementById("img2");
	img2.setAttribute('src', pug[s].photos[0].url);

	var info1 = document.getElementById("info1");
	info1.textContent = "Model: "+ pug[f].makeDisplayName + "\n Year: " + pug[f].year ;

	var info2 = document.getElementById("info2");
	info2.textContent = pug[s].description;
	
	usedArray.push(pug[f]);
	localStorage.setItem("usedArray", JSON.stringify(usedArray));
	usedArray.push(pug[s]);	
	localStorage.setItem("usedArray", JSON.stringify(usedArray));
	
	if(f > s){
		if(f > -1){
			pug.splice(f, 1);
			localStorage.setItem("bikeArray", JSON.stringify(pug));
		}
		if(s > -1){
			pug.splice(s, 1);
			localStorage.setItem("bikeArray", JSON.stringify(pug));
		}
	}
	else {
		if(s > -1){
			pug.splice(s, 1);
			localStorage.setItem("bikeArray", JSON.stringify(pug));
		}
		if(f > -1){
			pug.splice(f, 1);
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

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
