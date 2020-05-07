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

function myFunction() {
	document.getElementById("demo").innerHTML = "13%";
  }

 function checkforblank( {
	 var errormessage = "";
	 if (document.getElementById('fname').value == ""){
		 errormessage += "enter your first name \n"
		 document.getElementById('fname').style.borderColor=
		 return false;
	 }
    }