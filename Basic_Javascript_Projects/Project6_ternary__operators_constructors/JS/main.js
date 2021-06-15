// ternary operation practice 

function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

// object constructor practice

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

// object constructor utilizing "this" and "new" keywords:

function Dog(Name, Breed, Age, Color) {
    this.Dog_Name = Name;
    this.Dog_Breed = Breed;
    this.Dog_Age = Age;
    this.Dog_Color = Color;
}

var Kira = new Dog("Piper", "Spaniel", 2, "Black and White");
var Taryn = new Dog("Callie", "Huskie", 4, "White");

// displaying Kira's dog breed and name in a sentence:

function dogFunction() {
    document.getElementById("New_and_This").innerHTML =
    "Kira has a " + Kira.Dog_Breed + " named " + Kira.Dog_Name;
}

// constructor function for Movie objects:

function Movie(Name, Year, Director, Genre) {
    this.Movie_Name = Name;
    this.Movie_Year = Year;
    this.Movie_Director = Director;
    this.Movie_Genre = Genre;
}

// creating a Movie object:

var y = new Movie("Moonrise Kingdom", 2012, "Wes Anderson", "Comedy/Drama");

// displaying new movie details:

function movieFunction() {
    document.getElementById("Object_Constructor").innerHTML = 
    "We watched " + y.Movie_Name + ", a " + y.Movie_Genre + " film made by " + y.Movie_Director + " in " + y.Movie_Year + ".";
} 

// nested function that doubles a recipe whose base is 4 servings

function recipe_Function () {
    document.getElementById("Nested_Function").innerHTML = Base();
    function Base() {
        var Servings = 4;
        function Double_Recipe() {Servings += 4;} // this is the nested function
        Double_Recipe();
        return Servings;
    }
}