function getBikes() {
	var bikeArray = JSON.parse(localStorage.getItem("boughtBikeArray"));
	var secondArray = JSON.parse(localStorage.getItem("notBoughtArray"));
	
	for (var i = 0; i < bikeArray.length; i++) {
		var bike = bikeArray[i];
		if (bike.inflatedPrice != null){
			var lost = bike.inflatedPrice - bike.price;
			$("div#collapseOne").append('<table class="itemListing">\
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
			<td style="text-align:right; color:red;">You Paid: <span class="price">' + bike.inflatedPrice + '</span></td> \
			<td style="text-align:right">Actual Price: <span class="price">' + bike.price + '</span></td> \
			<td><span><a class="btn btn-success" target=_blank href="http://m.cycletrader.com/listing/' + bike.id + '">View listing</span></td>\
			<td class="details"><span><div class="fb-share-button" data-href="http://m.cycletrader.com/listing/' + bike.id + '" data-type="button"></div></span></td>\
			</tr>\
			</tbody>\
			</table>');
		}
		else {
			var lost = bike.inflatedPrice - bike.price;
			$("div#collapseOne").append('<table class="itemListing">\
			<thead class="frame-heading">\
			<tr>\
			<th style="text-align:left">\
			<span class="itemHeader">' + bike.makeDisplayName + '</span>\
			<th style="text-align:right; color:green;">Good Buy</span></th>\
			</th>\
			</tr>\
			</thead>\
			<tbody>\
			<tr>\
			<td>\
			<img class="small itemImage" src="' + bike.photos[0].url + '"/>\
			</td>\
			<td style="text-align:right; color:green;">You Paid: <span class="price">' + bike.price + '</span></td> \
			<td style="text-align:right">Actual Price: <span class="price">' + bike.price + '</span></td> \
			<td><span><a class="btn btn-success" target=_blank href="http://m.cycletrader.com/listing/' + bike.id + '">View listing</span></td>\
			<td class="details"><span><div class="fb-share-button" data-href="http://m.cycletrader.com/listing/' + bike.id + '" data-type="button"></div></span></td>\
			</tr>\
			</tbody>\
			</table>');
		}
	}
		
	for (var i = 0; i < secondArray.length; i++) {
		var bike = secondArray[i];
		if (bike.inflatedPrice != null){
			var lost = bike.inflatedPrice - bike.price;
			$("div#collapseTwo").append('<table class="itemListing">\
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
			<td style="text-align:right; color:red;">You Would Have Paid: <span class="price">' + bike.inflatedPrice + '</span></td> \
			<td style="text-align:right">Actual Price: <span class="price">' + bike.price + '</span></td> \
			<td><span><a class="btn btn-success" target=_blank href="http://m.cycletrader.com/listing/' + bike.id + '">View listing</span></td>\
			<td class="details"><span><div class="fb-share-button" data-href="http://m.cycletrader.com/listing/' + bike.id + '" data-type="button"></div></span></td>\
			</tr>\
			</tbody>\
			</table>');
		}
		else {
			var lost = bike.inflatedPrice - bike.price;
			$("div#collapseTwo").append('<table class="itemListing">\
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
			<td style="text-align:right; color:green;">You Would Have Paid: <span class="price">' + bike.price + '</span></td> \
			<td style="text-align:right">Actual Price: <span class="price">' + bike.price + '</span></td> \
			<td><span><a class="btn btn-success" target=_blank href="http://m.cycletrader.com/listing/' + bike.id + '">View listing</span></td>\
			<td class="details"><span><div class="fb-share-button" data-href="http://m.cycletrader.com/listing/' + bike.id + '" data-type="button"></div></span></td>\
			</tr>\
			</tbody>\
			</table>');
		}
	}
}
