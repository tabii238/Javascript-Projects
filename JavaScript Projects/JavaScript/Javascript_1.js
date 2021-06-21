// example of a switch statement (a type of conditional statement)
function places_function() {
    var place_output;
    var places = document.getElementById("place_input").value;
    var place_string = " is a great place to visit!";
    switch(places) {
        case "Germany":
            place_output = "Germany" + place_string;
        break;
        case "Ireland":
            place_output = "Ireland" + place_string;
        break;
        case "Finland":
            place_output = "Finland" + place_string;
        break;
        case "Norway":
            place_output = "Norway" + place_string;
        break;
        case "Sweden":
            place_output = "Sweden" + place_string;
        break;
        case "France":
            place_output = "France" + place_string;
        break;
        default:
        place_output = "Please enter a destination exactly as written on the above list";
    }
document.getElementById("Output").innerHTML = place_output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML= "It is 8:41 pm";
}

var canvas = 
document.getElementById("my_canvas");
var ctx = canvas.getContext("2d");
var my_gradient = ctx.createLinearGradient(0, 0, 170, 0);
my_gradient.addColorStop(0, "pink");
my_gradient.addColorStop(0.5, "yellow");
my_gradient.addColorStop(1, "white");
ctx.fillStyle = my_gradient;
ctx.fillRect(0, 0, 400, 400);
ctx.font = "35px Courier New";
ctx.strokeText("Today is June 17th",10,50);


