var intervalId = 0;
var clicks = 0;

function start() {
    clicks = 0;
    duration = 1;
    document.getElementById("startText").style.display = "none";
    document.getElementById("startButton").style.display = "none";
    document.getElementById("mainButton").style.display = "block";
    setTimeout(function () {
        document.getElementById("mainButton").style.display = "none";
        document.getElementById("startButton").disabled = true;
        document.getElementById("startButton").style.display = "block";
        setTimeout(function () {
            document.getElementById("startButton").disabled = false;
            document.getElementById("startText").style.display = "inline";
            cps = clicks / duration;
            document.getElementById("startText").innerHTML = "CPS: " + cps.toString();
        }, 1000);
    }, duration * 1000);
}

function addClick() {
    clicks++;
    document.getElementById("clicksText").innerHTML = "Clicks: " + clicks.toString();
}