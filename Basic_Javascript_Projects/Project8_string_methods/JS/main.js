function string_concat() { // concat() method example (joining multiple strings together)
    var string1 = "Today is ";
    var string2 = "Tuesday, June 15, ";
    var string3 = 2021;
    var today = string1.concat(string2, string3); 
    document.getElementById("date").innerHTML= today;
}

function slice_Method() { // slice() method example (extracts a section of a string)
    var Sentence = "Tomorrow is Wednesday, June 16th";
    var Section = Sentence.slice(11,21);
    document.getElementById("Slice").innerHTML = Section;
}

function Uppercase_Function() { // converts string to all uppercase
    var sentence = "it is 2:15 pm.";
    var res =sentence.toUpperCase();
    document.getElementById("toUppercase").innerHTML = res;
}

function search_Function() { // this will search for a string and display the location of its match
    var str = "It will probably rain today."
    var x = str.search("today");
    document.getElementById("search").innerHTML = x;
}

function convert_Function() { // this will convert a number to a string
    var a=2021;
    document.getElementById("convert").innerHTML = a.toString();
}

function precision_Function() { // formats number to a specified length 
    var num = 98056.798473098;
    document.getElementById("format").innerHTML = num.toPrecision(5);
}

function toFixed_Function() { // this method will round the number to the specified length
    var x = 6.39847; 
    var y = x.toFixed(1);
    document.getElementById("fixed").innerHTML = y;
}

function valueOf_Function() { // displays the primitive value of a string
    var a = "It is 3 pm";
    var z = a.valueOf();
    document.getElementById("value").innerHTML = z;
}