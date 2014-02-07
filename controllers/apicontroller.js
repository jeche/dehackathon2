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
							limit:10,
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
									}
									
									if (resultArray.length > 2 && j === 1) {
										 j = 0;
										var item1 = document.getElementById("item1");
										item1.textContent = resultArray[0].makeDisplayName;
										var item2 = document.getElementById("item2");
										item2.textContent = resultArray[1].makeDisplayName;
										
										var price1 = document.getElementById("price1");
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
										info2.textContent = resultArray[1].description;					
										
									}
									
								});
							
						}
						var lowPrice = 1000000;
						var highPrice = 0;
						var h = 0, l = 0;
						
						
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