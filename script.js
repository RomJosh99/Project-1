var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://love-calculator.p.rapidapi.com/getPercentage?fname=Mike&sname=Amiri",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "love-calculator.p.rapidapi.com",
		"x-rapidapi-key": "22c1cff26fmshe1d921a4c29167bp177f37jsn2d77eedbed64"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});



 
//Form Script
var yourName = "Mike";  
var cushName = 'Amiri';  

document.getElementById("13%").innerHTML =
yourName + " " + crushName; 
//Submit Button --- Find love!<3