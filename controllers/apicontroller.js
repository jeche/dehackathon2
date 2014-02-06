function get_cycle_list(minu, maxi){
	var ac;
	var result = [];
	$.ajax("https://apis.traderonline.com/v1.0.0-beta/token", {
		type:"POST",
		data: secret_things,
		success:function(data) {
			console.log(data);
			ac = data.access_token;
			$.ajax("https://apis.traderonline.com/v1.0.0-beta/cycles", {
					type:"GET",
					headers: {"Authorization" : "Bearer " + data.access_token},
					data:{  
							minPrice:0.00,
							maxPrice:30000.00,
							zip:"23501",
							limit:10,
							radius:20
					},
					success:function(data){
						console.log(data);
						for(i = 0; i < data.result.length; i++){
							$.ajax("https://apis.traderonline.com/v1.0.0-beta/cycles/" + data.result[i].id, {
								type:"GET",
								headers: {"Authorization" : "Bearer " + ac},
								success:function(data){
									console.log(data);
									var newGuy = {"description":data.result.description,
												  "year":data.result.year,
												  "makeDisplayName":data.result.makeDisplayName,
												  "price":data.result.price,
												  "photos":data.result.photos,
												  "mileage":data.result.mileage,
												  "primaryColor":data.result.primaryColor,
												  "url":data.url
									};
									result.push(newGuy);
								},
								dataType:"JSON"	
							});
						}
						console.log(result);
						
					},
					dataType:"JSON",
					error:function(xhr, status, message){
						console.log(xhr);
						console.log(message);
					}
				}
			);			
		},
		dataType:"JSON"
	}); 
	return result;
} 