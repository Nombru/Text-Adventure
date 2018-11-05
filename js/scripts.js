// biz logic
var kyleInput;

function kyleCorrect(){
  $("#magicalKyle").hide();
  $("#gate").show();
}

function kyleIncorrect(){
  $("#magicalKyle").hide();
  $("#dead2").show();
}

// user logic
$(document).ready(function() {
  $("#wakeUp, #looseRocks, #magicalKyle, #death1, #death2, #gate").hide();

// Move from start page to first part of adventure

  $("#startButton").click(function() {
    console.log("start button on")
    $("#start").hide();
    $("#wakeUp").show();
  });

// Click on trapdoor button and died
  $("#trapDoor").click(function() {
    console.log("trap door button")
    $("#wakeUp, #looseRocks, #magicalKyle, #death2, #gate").hide();
    $("#death1").show();
  });
// Click on button for ornate door
  $("#kyleDoor").click(function() {
    console.log("ornate door button to Kyle")
    $("#wakeUp, #death1, #looseRocks").hide();
    $("#magicalKyle").show();
  });

// Click on button for rubbleDoor
  $("#rubbleDoor").click(function() {
    console.log("rubble door")
    $("#wakeUp, #death1, #magicalKyle").hide();
    $("#looseRocks").show();
  });

//Submit Answer to Kyle's Riddle
$(".kyleForm").submit(function(event) {
    event.preventDefault();

    kyleInput = $("input#day").val();
    console.log(kyleInput);

    if (kyleInput = "wednesday"){
      return kyleCorrect();
    } else {
      return kyleIncorrect();
    }

  });
});
