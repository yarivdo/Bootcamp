
//Some global variables
var message = 0;
reply = 0;
var msgRoomOne = [];
var replyRoomOne = [];

//Populate the messages for room one
msgRoomOne.push("You are sitting in a dark room. It is quiet. Very quiet. You have a torch in one hand an a hammer in the other one...");
replyRoomOne.push("Turn the torch on");

msgRoomOne.push("You shine around with your torch, and reaslize you are inside your living room. You notice that the switch light is within your hands reach");
replyRoomOne.push("Turn the light on");

msgRoomOne.push("The room is now flooded with light. This is when you first notice two hungry-looking Zombies in the far corner to your left. To the right - you see the door");
replyRoomOne.push("Run for the door");

msgRoomOne.push("You run as fast as you can. But ALAS ! the door is blocked by some fallen debries made of broken wood and chairs");
replyRoomOne.push("Smash debries");

msgRoomOne.push("You have smashed all the debries away. Finally the door is visible. From behind you you hear the growling sound of the Zombies getting closer and closer");
replyRoomOne.push("Open the door");

msgRoomOne.push("You have opened the door and crossed to the next room. You immediately close and lock the door behind you. The Zombies don't sount too happy. But finally you can can catch your breath...");


//This is where the "action" starts once the page has been fully loaded
$(document).ready(startHere);

function startHere() {
    updateMessage(message);


}

function updateMessage(thisMessage) {
    $('#txtMessage').html(msgRoomOne[thisMessage]);
    $('#usrTxt').val('');
    
}

function chkResponse() {
    
    var thisResponse = $('#usrTxt').val();
    if (thisResponse == replyRoomOne[reply]) {
        message +=1;
        reply +=1;
        updateMessage(message);
        
    }
}
