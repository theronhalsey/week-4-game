$(document).ready(function () {

    // global variables
    var targetNumber = Math.floor((Math.random() * 120) + 19);
    var currentScore = 0
    var redValue = Math.floor((Math.random() * 12) + 1);
    var yellowValue = Math.floor((Math.random() * 12) + 1);
    var blueValue = Math.floor((Math.random() * 12) + 1);
    var greenValue = Math.floor((Math.random() * 12) + 1);
    var winCount = 0
    var lossCount = 0

    //assign random values to crystals and target#
    $('#targetNumber').text(targetNumber);
    $('#crystal-red').val(redValue);
    $('#crystal-yellow').val(yellowValue);
    $('#crystal-blue').val(blueValue);
    $('#crystal-green').val(greenValue);

    //add on click events to buttons and add to currentScore
    $("#crystal-red").on("click", function () {
        currentScore = currentScore + parseInt($('#crystal-red').val());
        $('#currentScore').text(currentScore);
    });

    $("#crystal-yellow").on("click", function () {
        currentScore = currentScore + parseInt($('#crystal-yellow').val());
        $('#currentScore').text(currentScore);
    });

    $("#crystal-blue").on("click", function () {
        currentScore = currentScore + parseInt($('#crystal-blue').val());
        $('#currentScore').text(currentScore);
    });

    $("#crystal-green").on("click", function () {
        currentScore = currentScore + parseInt($('#crystal-green').val());
        $('#currentScore').text(currentScore);
    });

    //victory and losing conditions/counters
    $("button").on("click", function () {
        if (targetNumber === currentScore) {
            document.getElementById('ching').play();
            winCount = winCount + 1;
            $("#winCount").text(winCount);
            targetNumber = Math.floor((Math.random() * 120) + 19);
            $('#targetNumber').text(targetNumber);
            currentScore = 0;
            $('#currentScore').text(currentScore);
        }
    });

    $("button").on("click", function () {
        if (targetNumber < currentScore) {
            document.getElementById('aww').play();
            lossCount = lossCount + 1;
            $("#lossCount").text(lossCount);
            targetNumber = Math.floor((Math.random() * 120) + 19);
            $('#targetNumber').text(targetNumber);
            currentScore = 0;
            $('#currentScore').text(currentScore);
        }
    });

});