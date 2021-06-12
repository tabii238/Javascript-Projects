
function function_1() { // function that includes assigning two variables and utilizes document.getElementById method
    var str= "Saturday, June 12th";
    var res= str.fontcolor("blue");
    document.getElementById("blue_text").innerHTML=res;
}

function function_2() { // function that uses the += operator 
    var forecast = "Cloudy, 66 degrees,";
    forecast += " 100% chance of rain at 6pm.";
    document.getElementById("Weather").innerHTML = forecast;
}