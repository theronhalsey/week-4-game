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

    console.log(redValue);
    console.log(yellowValue);
    console.log(blueValue);
    console.log(greenValue);

    //add on click events to buttons and add to currentScore
    $("#crystal-red").on("click", function () {
        currentScore = currentScore + parseInt($('#crystal-red').val());
        console.log(currentScore);
        console.log(redValue);
        console.log(yellowValue);
        console.log(blueValue);
        console.log(greenValue);
        $('#currentScore').text(currentScore);
    });

    $("#crystal-yellow").on("click", function () {
        currentScore = currentScore + parseInt($('#crystal-yellow').val());
        console.log(currentScore);
        console.log(redValue);
        console.log(yellowValue);
        console.log(blueValue);
        console.log(greenValue);
        $('#currentScore').text(currentScore);
    });

    $("#crystal-blue").on("click", function () {
        currentScore = currentScore + parseInt($('#crystal-blue').val());
        console.log(currentScore);
        console.log(redValue);
        console.log(yellowValue);
        console.log(blueValue);
        console.log(greenValue);
        $('#currentScore').text(currentScore);
    });

    $("#crystal-green").on("click", function () {
        currentScore = currentScore + parseInt($('#crystal-green').val());
        console.log(currentScore);
        console.log(redValue);
        console.log(yellowValue);
        console.log(blueValue);
        console.log(greenValue);
        $('#currentScore').text(currentScore);
    });

    //victory and losing conditions/counters
    $("button").on("click", function () {
        if (targetNumber === currentScore) {
            var ching = new Audio('../sounds/audio_file.mp3');
            ching.play();
            winCount = winCount++;
            $("#winCount").text(winCount);
            console.log(winCount)
        }
    });


    //restart game


});