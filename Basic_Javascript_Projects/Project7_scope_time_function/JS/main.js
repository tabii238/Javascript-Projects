// example of a global variable:

var a = 12;
var b = 34;

function Multiply() {
    var result = (a * b); // this is a local variable, within a function
    document.getElementById("Multiply").innerHTML = result;

}
function Subtract() { // using the global variables stated above again in a new function
    var result = (b - a); 
    document.getElementById("Subtract").innerHTML = result;
}

function Divide(c, d) { // using local variables (assigned within the function)
    var c = 400;
    var d = 5;
    var result = (400 / 5);
    document.getElementById("Divide").innerHTML = result;
}

function Add() { // attempting to use the local variables from the previous functions/utilizing the console.log() method to debug
    var result=(c + d);
    document.getElementById("Add").innerHTML = result;
    console.log(c + d);  
}

function AM_Message() { //time function with if statement (will only print a message if it is morning)
    if (new Date().getHours() < 12) {
        document.getElementById("Message").innerHTML = "Good Morning!";
    }
}

var Max_Age = 5; // another if statement
var Violet_Age = 2;
if (Max_Age > Violet_Age) {
    document.write("Max is older than Violet");
}

function booking() { // my function with if/else statements
    Nights = document.getElementById("Nights").value;
    if (Nights > 1) {
        Message = "We have condos available!";
    }
    else {
        Message = "Sorry, there is a 2-night minimum to book";
    }
    document.getElementById("How_many_nights?").innerHTML = Message;
}

function Time_function() { // time function from course
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}