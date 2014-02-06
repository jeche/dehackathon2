function get_cycle_list(minu, maxi){
	var ac;
	var result;
	$.ajax("https://apis.traderonline.com/vlatest/token", {
		type:"POST",
		data: {
				client_id: secret_things.client_id,
				client_secret:secret_things.client_secret,
				grant_type:secret_things.grant_type},
		success:function(data) {
			console.log(data);
			ac = data.access_token;
			$.ajax("https://apis.traderonline.com/vlatest/cycles", {
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
							$.ajax("https://apis.traderonline.com/vlatest/cycles/" + data.result[i].id, {
								type:"GET",
								headers: {"Authorization" : "Bearer " + ac},
								success:function(data){
									
								},
								dataType:"JSON"	
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