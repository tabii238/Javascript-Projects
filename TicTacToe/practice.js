myFunction = function() {
    return "This is my function"
}
// rewrite using an arrow function, taking this from three lines to one line of code:
// the arrow function allows for the removal of the keyword "function".
// It also lets you use () removing the need for curly braces
// If the function has only one statement and the statement returns a value, you can remove the brackets and return keyword

myFunction = () => "This is my function" // this function will also return the string

// passing in a parameter:
var car;
car = (val) => "These are my favorite car brands " + val; // here the arrow function takes the values as val fom the car variable in innerHTML
document.getElementById('displayCar').innerHTML = car("Honda, Ford, and Nissan");

// .some() method:
var ages = [2, 10, 14, 21];

// using the arrow functin to pass in a parameter of age:
checkAge = (age) => age >= 14;

function myFunction() {
    // use the .some to iterate through the ages and display the result:
    document,getElementById('displayAge').innerHTML = ages.some(checkAge);
}

