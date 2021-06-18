function Call_Loop() { // creating a function with a while loop
    var a = 0;
    while (a < 15) {
        console.log(a); // the full loop will not display in the browser, only the end result will be displayed
        a = a + 5;
        document.getElementById("Loop").innerHTML = a; 
    }
}

function Str_Length() { // string length example
    var str = "Mississippi";
    var n = str.length;
    document.getElementById("string").innerHTML = n; // returns the number of characters in the word
}

var Instruments = ["Cello", "Clarinet", "Harmonica", "Harp", "Saxophone", "Xylophone", "Mandolin"]; // creating a for loop
var Content = "";
var Y;
function my_for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content; // this will display each instrument within the variable
}

function array_Function() { 
    var summer = []; // creating an array, the four elements are listed below:
    summer[0] = "June";
    summer[1] = "July";
    summer[2] = "August";
    summer [3] = "September";
    document.getElementById("Array").innerHTML = "The third month of summer is " +
        summer[2] + "."; // this will display a string including the 3rd element in the array 
}

function constant_function() { 
    const book = {type: "Fiction", subject:"Historical", location: "25" } // creating an object with the const keyword, then adding properties with values
    book.subject = "Crime/Mystery"; // changing the value of the subject property
    book.location = "30"; // changing the value of the location property
    book.author = "Agatha Christie" // adding another propery and assigning its value
    document.getElementById("Constant").innerHTML = "Within the " + book.type + " section, books by " + book.author +
        " can be found on aisle " + book.location; // displaying  a string that includes the changed property value and the new one
}

var x = 100; // assigning a value to x
function let_2() {
    return x;
    }
document.getElementById("Let_1").innerHTML = x; // output should be 100

    { 
        let x=50;  // changing the value 
        function let1() {
            return x;
        }    
        document.getElementById("Let_2").innerHTML = x;    
    }

var a = math_function(56, 12); // function is called, and the return value will end up in a

function math_function(b, d) {
    return b * d;
}
document.getElementById("Return").innerHTML = a; // displaying result in <p> element

let tv = { // creating an object; its properties are listed below
    brand: "Vizio ",
    screen: "50-inch ",
    price: "$300 ",
    description : function() { // this is the method
        return "They bought a " + tv.screen + tv.brand + " for " + tv.price;   
        }
};
document.getElementById("tv_Object").innerHTML = tv.description(); //displays string including the object/properties

var text = ""; // break example; "jumps out" of a loop
var i;
for (i = 0; i < 10; i++) {
    if ( i === 3) { break; }
    text += "The number is " + i + "<br>";
}
document.getElementById("break").innerHTML = text;

var result = ""; 
var j;
for (j = 0; j < 10; j ++) { //continue example; "jumps over" one iteration in the loop
    if (j === 7) { continue; }
    result += "The number is " + j + "<br>";
}
document.getElementById("continue").innerHTML = result;
