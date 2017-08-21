var _charachters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " ", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var myKey = ["z", "y", "x", "w", "v", "u", "t", "s", "r", "q", "p", "o", "n", "m", "l", "k", "j", "i", "h", "g", "f", "e", "d", "c", "b", "a", " ", "0", "9", "8", "7", "6", "5", "4", "3", "2", "1"];

$(document).ready(startHere);

function startHere() {
    $('#btnEncrypt').on("click", encryptMessage);
    $('#btnDecrypt').on("click", decryptMessage);

}


function encryptMessage() {
    var original = $('#txtToEncrypt').val();
    var outputMessage = "";

    for (i = 0; i < original.length; i++) {
        var position = _charachters.indexOf(original[i]);
        if (position == -1) { // for some reason, this is the result we get if position is undefined
            outputMessage += original[i];
        } else {
            outputMessage += myKey[position];
        }
        
    }
    $('#txtOutput').val(outputMessage);
}


//In the Decryption part we reverse the charachters/key
function decryptMessage() {
    var original = $('#txtToEncrypt').val();
    var outputMessage = "";

    for (i = 0; i < original.length; i++) {
        var position = myKey.indexOf(original[i]);
        if (position == -1) { // for some reason, this is the result we get if position is undefined
            outputMessage += original[i];
        } else {
            outputMessage += _charachters[position];  
        }
        
    }
    $('#txtOutput').val(outputMessage);
}
