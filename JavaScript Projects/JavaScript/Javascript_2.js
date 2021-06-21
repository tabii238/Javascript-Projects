function validateForm() {
    var a = document.forms["myForm"] ["fname"].value;
    if (a == "") {
        alert("Please provide a first name");
        return false;
    }
    var b = document.forms["myForm"] ["lname"].value;
    if (b == "") {
        alert("Please provide a last name");
        return false;
    }
    var c = document.forms["myForm"] ["day"].value;
    if (c == "") {
        alert("Please provide a preferred day");
        return false;
    }
    var d = document.forms["myForm"] ["time"].value;
    if (d == "") {
        alert("Please provide a preferred time of day");
        return false;
    }
}
