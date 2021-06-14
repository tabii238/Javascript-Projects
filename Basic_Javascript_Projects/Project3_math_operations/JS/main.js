function myFunction(a, b) {
    var sum=(a + b); // addition function
    document.getElementById("add").innerHTML=sum;
}

function subtractFunction(x, y) { // subtraction function
    var difference=(x - y);
    document.getElementById("subtract").innerHTML=difference;
}

function multiplyFunction(c, d) { // multiplication function
    var product=(c * d);
    document.getElementById("multiply").innerHTML=product;
}

function divideFunction(e, f) { // division function
    var quotient=(e / f);
    document.getElementById("divide").innerHTML=quotient;
}

function operationsFunction(g, h, i, j, k) { // multiple operations function
    var result=(g + h * i / j - k);
    document.getElementById("multiple_operations").innerHTML=result;
}

function modulusFunction(l, m) { // modulus function (remainder)
    var remainder=(l % m);
    document.getElementById("modulus").innerHTML=remainder;
}

function negationFunction(n) { // negation function
    var negation=(-n);
    document.getElementById("negation").innerHTML=negation;

}

var o = 7; // increment operation
o++;    
document.write("The result of the increment operation when applied to the number 7 = " + o);

var p = 10; // decrement operation
p--;
document.write(". The result of the decrement operation when applied to the number 10 = " + p);

window.alert(Math.random() * 50); // random number window alert
