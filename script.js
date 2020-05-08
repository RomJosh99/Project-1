
//Form Script
var yourName = "";  
var crushName = "";  

document.getElementById("percentage").innerHTML =
yourName + " " + crushName; 
$("#Btn").on("click" ,function(){
	event.preventDefault();
	var yourName = $("#name").val();  
    var crushName = $("#crush").val();  
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": `https://love-calculator.p.rapidapi.com/getPercentage?fname=${yourName}&sname=${crushName}`,
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "love-calculator.p.rapidapi.com",
			"x-rapidapi-key": "22c1cff26fmshe1d921a4c29167bp177f37jsn2d77eedbed64"
		}
	}
	
	$.ajax(settings).done(function (response) {
		console.log(response);
		document.getElementById("percentage").innerHTML =
        $("#yourName")+" "+$("#crushName");
	});
	


}) 