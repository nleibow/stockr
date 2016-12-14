


console.log('connected1');
$(document).ready(function(){
$('#searchbtn').click(function(e){
	console.log("its running");
	var stock = $("#stockLook").val();
	var url = "http://finance.google.com/finance/info?client=ig&q=NSE:" + stock;
	 $.get(url, function(req, res){
		var bodyRight =(req.substr(3));
		var answer = JSON.parse(bodyRight);
		var trueAnswer = {"Ticker": answer[0].t, "Last Price": answer[0].l};
		console.log(trueAnswer);
		 e.preventDefault();
		 // $.post(__dirname + '/stockr', trueAnswer, function(){
		 // 	console.log('somthing happened it was good');
		 // });
		 
	});
});});
