$(document).ready(function() {

// global variables
var targetNumber = Math.floor((Math.random() * 120) + 19);
var currentScore = 0
var redValue = Math.floor((Math.random() * 12) + 1);
var yellowValue = Math.floor((Math.random() * 12) + 1);
var blueValue = Math.floor((Math.random() * 12) + 1);
var greenValue = Math.floor((Math.random() * 12) + 1);

//assign random values to crystals and target#
$('#targetNumber').text(targetNumber);
$('#crystal-red').val(redValue);
$('#crystal-yellow').val(yellowValue);
$('#crystal-blue').val(blueValue);
$('#crystal-green').val(greenValue);

//add on click events to buttons and add to currentScore


//victory and losing conditions


//add victory/loss to counters


//restart game


});