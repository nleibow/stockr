var array = []


console.log('connected1');
$(document).ready(function(){
$('#searchbtn').click(function(e){
	var stock = $("#stockLook").val();
	var url = "https://finance.google.com/finance/info?client=ig&q=NSE:" + stock;
	 $.ajax({
            url: url, 
            type: "GET",   
            dataType: 'jsonp',
            cache: false,
            success: function(response){   
            console.log(response);                       
                var bodyRight =(response);
		var answer = bodyRight;
		var trueAnswer = {"Ticker": answer[0].t, "LastPrice": answer[0].l};
		console.log(trueAnswer);
		  $.post('/api', trueAnswer, function(){
		  	console.log('somthing happened it was good');
		  	
		  });
		  // $.get('/api', function(req, res){
		  	var tik =trueAnswer.Ticker;
		  	console.log(tik);
		  	var pric = trueAnswer.LastPrice;
		  	 $('#firstTicker').append(tik);
			$('#firstPrice').append(pric);                   
            }           
        });    
	 // $.get(url, function(req, res){
		// var bodyRight =(req.substr(3));
		// var answer = JSON.parse(bodyRight);
		// var trueAnswer = {"Ticker": answer[0].t, "LastPrice": answer[0].l};
		// console.log(trueAnswer);
		//   $.post('/api', trueAnswer, function(){
		//   	console.log('somthing happened it was good');
		  	
		//   });
		//   // $.get('/api', function(req, res){
		//   	var tik =trueAnswer.Ticker;
		//   	console.log(tik);
		//   	var pric = trueAnswer.LastPrice;
		//   	 $('#firstTicker').append(tik);
		// 	$('#firstPrice').append(pric);
		//   })
		 
	});
});

// $.ajax({
//             url: url, 
//             type: "GET",   
//             dataType: 'jsonp',
//             cache: false,
//             success: function(response){                          
//                 var bodyRight =(req.substr(3));
// 		var answer = JSON.parse(bodyRight);
// 		var trueAnswer = {"Ticker": answer[0].t, "LastPrice": answer[0].l};
// 		console.log(trueAnswer);
// 		  $.post('/api', trueAnswer, function(){
// 		  	console.log('somthing happened it was good');
		  	
// 		  });
// 		  // $.get('/api', function(req, res){
// 		  	var tik =trueAnswer.Ticker;
// 		  	console.log(tik);
// 		  	var pric = trueAnswer.LastPrice;
// 		  	 $('#firstTicker').append(tik);
// 			$('#firstPrice').append(pric);                   
//             }           
//         });    




