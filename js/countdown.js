var dday = new Date(2010, 7, 14, 17, 30, 0, 0);
var preWeddingMessage = "Līdz kāzām";
var postWeddingMessage = "Kopā jau";

function updateText() {
    var now = new Date();
    var message = "";
    if (now.getTime() < dday.getTime()) {
        message = preWeddingMessage;
        setTimeout("updateText()", now.getTime() - dday.getTime());
    }
    else {
        message = postWeddingMessage;
    }

    $("#countdownTitle").text(message);
}

function right(input, length) {
    var strlen = input.length;
    return input.substr(strlen - Math.min(strlen, length), length);
}

function updateCountdown() {
    var now = new Date();

    $("#nYear").text(now.getFullYear());
    $("#nMonth").text(right("0" + (now.getMonth() + 1).toString(), 2));
    $("#nDay").text(right("0" + now.getDate().toString(), 2));
    $("#nHour").text(right("0" + now.getHours(), 2));
    $("#nMinute").text(right("0" + now.getMinutes(), 2));
    $("#nSecond").text(right("0" + now.getSeconds(), 2));

    var diff = dday.getTime() - now.getTime(); // ms

    if (diff < 0) {
        diff = Math.abs(diff);
    }
                
    diff /= 1000; // s
    $("#dSeconds").text(Math.floor(diff % 60));
    diff /= 60;  // min
    $("#dMinutes").text(Math.floor(diff % 60));
    diff /= 60; // h
    $("#dHours").text(Math.floor(diff % 24));
    diff /= 24;  // days

    var days = diff % 365;
    $("#dDays").text(Math.floor(days));

    diff /= 365; // years
    $("#dYears").text(Math.floor(diff));

    setTimeout("updateCountdown()", 1000);
}

$(document).ready(function () {
    updateCountdown();
    updateText();
});