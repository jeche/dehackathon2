function get_cycle_list(minu, maxi){
	console.log("get_cycle_list");
	var ac;
	var j = 1;
	
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
							zip:"23510",
							limit:200,
							radius:20
					},
					success:function(data){
						
						var lowPrice = 1000000;
						var highPrice = 0;
						var h = 0, l = 0;
						var newGuy;
						var resultArray = new Array();
						for(i = 0; i < data.result.length; i++){
							var item = $.ajax("https://apis.traderonline.com/v1.0.0-beta/cycles/" + data.result[i].id, {
								type:"GET",
								headers: {"Authorization" : "Bearer " + ac},
								success:function(data){
									
									newGuy = {"description":data.result.description,
												  "year":data.result.year,
												  "makeDisplayName":data.result.makeDisplayName,
												  "price":data.result.price,
												  "photos":data.result.photos,
												  "mileage":data.result.mileage,
												  "primaryColor":data.result.primaryColor,
												  "url":data.url
												  
												  
									};
																		
								},
								
								dataType:"JSON",
								
							});
							
							
							item.success(function(item){
									
									var itemResult = item.result;
									if(itemResult.photos.length > 0){
										resultArray.push(itemResult);
										var bikeArray = JSON.parse(localStorage.getItem("bikeArray"));
										bikeArray.push(itemResult);
										localStorage.setItem("bikeArray", JSON.stringify(bikeArray));
									}							
									
									
								});
							
						}
						
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
	
} 