function my_Dictionary() {
    var Car = {
        Make: "Suburu",
        Model: "WRX",
        Year: 2011,
        Color: "Silver",
        Miles: "52,000"
    };
    delete Car.Color;
    document.getElementById("Dictionary").innerHTML = Car.Color;
}