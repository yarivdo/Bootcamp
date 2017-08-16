// Global Variables
var digitA = 0;
var digitB = 0;
var digitC = 0;
var digitD = 0;
var digitE = 0;

var start = false;


// -----Start the App ---------
$(document).ready(startHere);

function startHere() {

    $(function () {
        $(".dial").knob();
    });
    // Define the buttons' actions
    $('#btnStart').on('click', startTimer);
    $("#btnStop").on('click', stopTimer);
    $('#btnReset').on('click', resetTimer);

    // This is the timer which sets in place updating the digits
    // as long as the boolean START is true
    var clockTicking = window.setInterval(function () {
        if (start == true) {
            digitA++;
            if (digitA == 10) {
                digitB++;
                digitA = 0;
                if (digitB == 10) {
                    digitC++;
                    digitB = 0;
                    if (digitC == 6) {
                        digitD++;
                        digitC = 0;
                        if (digitD == 10) {
                            digitE++;
                            digitD = 0;

                        }
                    }
                }
            }
            var digitString = digitE + digitD + ":" + digitC + digitB + ":" + digitA;
            $('#digits').html(digitString);

            $('#knobA').val(digitA).trigger('change');
            $('#knobB').val(digitB).trigger('change');
            $('#knobC').val(digitC).trigger('change');
            $('#knobD').val(digitD).trigger('change');
            $('#knobE').val(digitE).trigger('change');

        }
    }, 100);


}


function startTimer() {

    start = true;

}

function stopTimer() {

    start = false;

}

function resetTimer() {

    $('#digits').html('0:00:0');
    digitA = digitB = digitC = digitD = digitE = 0;
    $('#knobA').val(digitA).trigger('change');
    $('#knobB').val(digitB).trigger('change');
    $('#knobC').val(digitC).trigger('change');
    $('#knobD').val(digitD).trigger('change');
    $('#knobE').val(digitE).trigger('change');
    start = false;


}
