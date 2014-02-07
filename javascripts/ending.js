function getBikes() {
	var bikeArray = JSON.parse(localStorage.getItem("boughtBikeArray"));
	var secondArray = JSON.parse(localStorage.getItem("notBoughtArray"));
	var count = 0;
	for (var i = 0; i < bikeArray.length; i++) {
		var bike = bikeArray[i];
		if(bike.makeDisplayName === null || bike.makeDisplayName === 'undefined'){
			bike.makeDisplayName = "N/A";
		}
		if(bike.year === null || bike.year === 'undefined'){
			bike.year = "N/A";
		}
		if(bike.primaryColor === null || bike.primaryColor === 'undefined'){
			bike.primaryColor = "N/A";
		}
		if(bike.engineSize === null || typeof(bike.engineSize) === 'undefined'){
			bike.engineSize = "N/A";
		
		}
		if(bike.engineType === null || bike.engineType === 'undefined'){
			bike.engineType = "N/A";
		}
		if(bike.mileage === null || bike.mileage === 'undefined'){
			bike.mileage = "N/A";
		}
		if(bike.horsePower === null || bike.horsePower === 'undefined'){
			bike.horsePower = "N/A";
		}
		if(bike.weightLbs === null || bike.weightLbs === 'undefined'){
			bike.weightLbs = "N/A";
		}
		
		if (bike.inflatedPrice != null){
			count++;
			var lost = bike.inflatedPrice - bike.price;
			$("div#collapseOne").append('<table class="itemListing center">\
			<thead class="frame-heading">\
				<tr>\
					<th style="text-align:left">\
						<span class="itemHeader">' + bike.makeDisplayName + '</span>\
						<th style="text-align:right; color:red;">Bad Buy</span></th>\
					</th>\
				</tr>\
			</thead>\
			<tbody>\
				<tr>\
					<td>\
						<img class="small itemImage" src="' + bike.photos[0].url + '"/>\
					</td>\
					<td><div style="color:red">You Paid: $' + bike.inflatedPrice + '</div> \
						Actual Price: $' + bike.price + '<br />' + 
						'Model: '.bold() + bike.makeDisplayName + '<br />' + 'Year: '.bold() + bike.year + '<br />'+ 
						'Primary color: '.bold() + bike.primaryColor +  '<br />'+
						'Engine size: '.bold() + bike.engineSize + '<br />' +'Engine Type: '.bold() + bike.engineType
						+ '<br />' + 'Mileage: '.bold() + bike.mileage + '<br />' +'Horsepower: '.bold() + bike.horsePower + '<br />' +
						'Weight (lbs): '.bold() + bike.weightLbs + '<br />' +
			'<span><a class="btn btn-success" style="text-align:left" target=_blank href="http://m.cycletrader.com/listing/' + bike.id + '">View listing</a></span>\
			<span class="fb-share-button" style="text-align:right" data-href="http://m.cycletrader.com/listing/' + bike.id + '" data-type="button"></span></td\
			</tr>\
			</tbody>\
			</table>');
		}
		else {
			var lost = bike.inflatedPrice - bike.price;
			$("div#collapseOne").append('<table class="itemListing center">\
			<thead class="frame-heading">\
			<tr>\
			<th style="text-align:left">\
			<span class="itemHeader">' + bike.makeDisplayName + '</span>\
			<th style="text-align:right; color:green;">Good Buy</span></th>\
			</th>\
			</tr>\
			</thead>\
			<tbody>\
			<tbody>\
				<tr>\
					<td>\
						<img class="small itemImage" src="' + bike.photos[0].url + '"/>\
					</td>\
					<td><div style="color:green">You Paid: $' + bike.price + '</div> \
						Actual Price: $' + bike.price + '<br />' + 
						'Model: '.bold() + bike.makeDisplayName + '<br />' + 'Year: '.bold() + bike.year + '<br />'+ 
						'Primary color: '.bold() + bike.primaryColor +  '<br />'+
						'Engine size: '.bold() + bike.engineSize + '<br />' +'Engine Type: '.bold() + bike.engineType
						+ '<br />' + 'Mileage: '.bold() + bike.mileage + '<br />' +'Horsepower: '.bold() + bike.horsePower + '<br />' +
						'Weight (lbs): '.bold() + bike.weightLbs + '<br />' +
			'<span><a class="btn btn-success" style="text-align:left" target=_blank href="http://m.cycletrader.com/listing/' + bike.id + '">View listing</a></span>\
			<span class="fb-share-button" style="text-align:right" data-href="http://m.cycletrader.com/listing/' + bike.id + '" data-type="button"></span></td\
			</tr>\
			</tbody>\
			</table>');
		}
	}
	
	$("span#number").append(count);
		
	for (var i = 0; i < secondArray.length; i++) {
		var bike = secondArray[i];
		if (bike.inflatedPrice != null){
			var lost = bike.inflatedPrice - bike.price;
			$("div#collapseTwo").append('<table class="itemListing center">\
			<thead class="frame-heading">\
			<tr>\
			<th style="text-align:left">\
			<span class="itemHeader">' + bike.makeDisplayName + '</span>\
			<th style="text-align:right; color:red;">Would be Bad Buy</span></th>\
			</th>\
			</tr>\
			</thead>\
			<tbody>\
				<tr>\
					<td>\
						<img class="small itemImage" src="' + bike.photos[0].url + '"/>\
					</td>\
					<td><div style="color:red">You Would Have Paid: $' + bike.inflatedPrice + '</div> \
						Actual Price: $' + bike.price + '<br />' + 
						'Model: '.bold() + bike.makeDisplayName + '<br />' + 'Year: '.bold() + bike.year + '<br />'+ 
						'Primary color: '.bold() + bike.primaryColor +  '<br />'+
						'Engine size: '.bold() + bike.engineSize + '<br />' +'Engine Type: '.bold() + bike.engineType
						+ '<br />' + 'Mileage: '.bold() + bike.mileage + '<br />' +'Horsepower: '.bold() + bike.horsePower + '<br />' +
						'Weight (lbs): '.bold() + bike.weightLbs + '<br />' +
			'<span><a class="btn btn-success" style="text-align:left" target=_blank href="http://m.cycletrader.com/listing/' + bike.id + '">View listing</a></span>\
			<span class="fb-share-button" style="text-align:right" data-href="http://m.cycletrader.com/listing/' + bike.id + '" data-type="button"></span></td\
			</tr>\
			</tbody>\
			</table>');
		}
		else {
			var lost = bike.inflatedPrice - bike.price;
			$("div#collapseTwo").append('<table class="itemListing center">\
			<thead class="frame-heading">\
			<tr>\
			<th style="text-align:left">\
			<span class="itemHeader">' + bike.makeDisplayName + '</span>\
			<th style="text-align:right; color:green;">Would be Good Buy</span></th>\
			</th>\
			</tr>\
			</thead>\
			<tbody>\
				<tr>\
					<td>\
						<img class="small itemImage" src="' + bike.photos[0].url + '"/>\
					</td>\
					<td><div style="color:green">You Would Have Paid: $' + bike.price + '</div> \
						Actual Price: $' + bike.price + '<br />' + 
						'Model: '.bold() + bike.makeDisplayName + '<br />' + 'Year: '.bold() + bike.year + '<br />'+ 
						'Primary color: '.bold() + bike.primaryColor +  '<br />'+
						'Engine size: '.bold() + bike.engineSize + '<br />' +'Engine Type: '.bold() + bike.engineType
						+ '<br />' + 'Mileage: '.bold() + bike.mileage + '<br />' +'Horsepower: '.bold() + bike.horsePower + '<br />' +
						'Weight (lbs): '.bold() + bike.weightLbs + '<br />' +
			'<span><a class="btn btn-success" style="text-align:left" target=_blank href="http://m.cycletrader.com/listing/' + bike.id + '">View listing</a></span>\
			<span class="fb-share-button" style="text-align:right" data-href="http://m.cycletrader.com/listing/' + bike.id + '" data-type="button"></span></td\
			</tr>\
			</tbody>\
			</table>');
		}
	}
}
