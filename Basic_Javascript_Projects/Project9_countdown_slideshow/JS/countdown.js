// function for countdown/timer
function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1; // countdown -1 each time 
        timer.innerHTML = seconds;
        setTimeout(tick, 1000); // makes the progam pause for 1000 milliseconds (1 second)
    if(seconds == -1) {
        alert("Time's up!"); // message to display when timer is done
    }
        }
    tick();
}