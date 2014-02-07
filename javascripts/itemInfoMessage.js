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
	if(pug[f].makeDisplayName === null || pug[f].makeDisplayName === 'undefined'){
		pug[f].makeDisplayName = "N/A";
	}
	if(pug[f].year === null || pug[f].year === 'undefined'){
		pug[f].year = "N/A";
	}
	if(pug[f].primaryColor === null || pug[f].primaryColor === 'undefined'){
		pug[f].primaryColor = "N/A";
	}
	if(pug[f].engineSize === null || typeof(pug[f].engineSize) === 'undefined'){
		pug[f].engineSize = "N/A";
	
	}
	if(pug[f].engineType === null || pug[f].engineType === 'undefined'){
		pug[f].engineType = "N/A";
	}
	if(pug[f].mileage === null || pug[f].mileage === 'undefined'){
		pug[f].mileage = "N/A";
	}
	if(pug[f].horsePower === null || pug[f].horsePower === 'undefined'){
		pug[f].horsePower = "N/A";
	}
	if(pug[f].weightLbs === null || pug[f].weightLbs === 'undefined'){
		pug[f].weightLbs = "N/A";
	}
	info1.innerHTML = "Model: ".bold()+ pug[f].makeDisplayName + '<br />' +"Year: ".bold() + pug[f].year + '<br />'+ 
					"Primary color: ".bold() + pug[f].primaryColor +  '<br />'+
					"Engine size: ".bold() + pug[f].engineSize + '<br />' +"Engine Type: ".bold() + pug[f].engineType
					+ '<br />' + "Mileage: ".bold() + pug[f].mileage + '<br />' +"Horsepower: ".bold() + pug[f].horsePower + '<br />' +
					"Weight (lbs): ".bold() + pug[f].weightLbs;

	var info2 = document.getElementById("info2");
	if(pug[s].makeDisplayName === null || pug[s].makeDisplayName === 'undefined'){
		pug[s].makeDisplayName = "N/A";
	}
	if(pug[s].year === null || pug[s].year === 'undefined'){
		pug[s].year = "N/A";
	}
	if(pug[s].primaryColor === null || pug[s].primaryColor === 'undefined'){
		pug[s].primaryColor = "N/A";
	}
	if(pug[s].engineSize === null || pug[s].engineSize === 'undefined'){
		pug[s].engineSize = "N/A";
	}
	if(pug[s].engineType === null || pug[s].engineType === 'undefined'){
		pug[s].engineType = "N/A";
	}
	if(pug[s].mileage === null || pug[s].mileage === 'undefined'){
		pug[s].mileage = "N/A";
	}
	if(pug[s].horsePower === null || pug[s].horsePower === "undefined"){
		pug[s].horsePower = "N/A";
	}
	if(pug[s].weightLbs === null || pug[s].weightLbs === 'undefined'){
		pug[s].weightLbs = "N/A";
	}
	info2.innerHTML = "Model: ".bold()+ pug[s].makeDisplayName + '<br />' +"Year: ".bold() + pug[s].year + '<br />'+ 
					"Primary color: ".bold() + pug[s].primaryColor +  '<br />'+
					"Engine size: ".bold() + pug[s].engineSize + '<br />' +"Engine Type: ".bold() + pug[s].engineType
					+ '<br />' + "Mileage: ".bold() + pug[s].mileage + '<br />' +"Horsepower: ".bold() + pug[s].horsePower + '<br />' +
					"Weight (lbs): ".bold() + pug[s].weightLbs;
	
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