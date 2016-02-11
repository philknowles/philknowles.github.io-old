
var seconds = 0;
var minutes = 0;
var hours = 0;
var watch = document.getElementById('stopwatch');
var t;
var start = document.getElementById('start');
var stop = document.getElementById('stop');

function stopWatch() {
    seconds++;
    if(seconds >=60) {
        seconds=0;
        minutes++;
        if(minutes >=60) {
            minutes=0;
            hours++;
        }
    }
    watch.innerHTML = (hours + ":" + minutes + ":" + seconds);

    timer();
}

function timer() {
    t = setTimeout(stopWatch, 1000);
}
    timer();

