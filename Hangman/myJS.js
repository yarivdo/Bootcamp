var originalText;
var convertedText;
var numberOfErrors = 0;


$(document).ready(startHere);

function startHere() {
    $("#txtMessage").html("");
    drawHangMan(numberOfErrors);


}

function convertChallenge() {
    grabText = $("#txtChallenge").val();
    originalText = grabText.toUpperCase(); // CAPITALIZE the word as capturing keydown is done via CAPITAL for soe reason..
    console.log(originalText);
    
    $("#txtChallenge").hide();
    $("#btnSubmit").hide();
    
    convertedText = "";
    var strLength = originalText.length;

    for (i = 0; i < strLength; i++) {
        console.log(originalText[i]);
        convertedText += "*";
    }

    $("#txtOutput").html(convertedText);

    // Now let's move to the next function and wait for the user's input
    opponentTurn();

}

function opponentTurn() {

    var keyPressed = "";

    //This is how we capture the user's keypress
    $("html").keydown(function (e) {
        keyPressed = String.fromCharCode(e.which);
        checkThisLetter(keyPressed);
    });
}

function checkThisLetter(keyLetter) {
    console.log("Key pressed=" + keyLetter);
    var updatedOutputString = "";

    for (i = 0; i < originalText.length; i++) {
        if (convertedText[i] == "*") { // This is where we check ONLY spaces in the word whch were not found already
            if (originalText[i] == keyLetter) {
                updatedOutputString += keyLetter;
            } else {
                updatedOutputString += "*";
            }
        }

        if (convertedText[i] != "*") {
            updatedOutputString += convertedText[i];
        }

    }

    // To check if the key pressed was not in the word we can simply
    // compare the updatedString to the convertedText...
    // if by the end of the process they are similar --> then it means
    // that no chage has been made, as no new leter was found
    if (updatedOutputString == convertedText) {
        numberOfErrors += 1;
        drawHangMan(numberOfErrors);
        console.log("number of errors=" + numberOfErrors);
        if (numberOfErrors == 6) {
            $("#txtMessage").html("GAME OVER");
        }
       
    }

    // Now re-print the converted text
    convertedText = updatedOutputString;
    $("#txtOutput").html(convertedText);

    // Check if opponet completed his finding the word
    if (convertedText == originalText) {
        $("#txtOutput").html(originalText);
        alert("Well Done");
    }

}

function drawHangMan(errorStage) {
    var can = document.getElementById('canvas1');
    var ctx = can.getContext('2d');
    var img = new Image();
    img.onload = function () {
        ctx.drawImage(img, 0, 0);
    }
    if (errorStage == 0) {
        img.src = "images/90px-Hangman-0.png";
    }
    if (errorStage == 1) {
        img.src = "images/90px-Hangman-1.png";
    }
    if (errorStage == 2) {
        img.src = "images/90px-Hangman-2.png";
    }
    if (errorStage == 3) {
        img.src = "images/90px-Hangman-3.png";
    }
    if (errorStage == 4) {
        img.src = "images/90px-Hangman-4.png";
    }
    if (errorStage == 5) {
        img.src = "images/90px-Hangman-5.png";
    }
    if (errorStage == 6) {
        img.src = "images/90px-Hangman-6.png";
        $("#txtMessage").html("GAME OVER");
    }
    
     
}
