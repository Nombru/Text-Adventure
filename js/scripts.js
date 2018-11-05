// biz logic
var kyleInput;

function kyleCorrect(){
  $("#magicalKyle").hide();
  $("#gate").show();
}

function kyleIncorrect(){
  $("#magicalKyle").hide();
  $("#death2").show();
}

// user logic
$(document).ready(function() {
  $("#wakeUp, #looseRocks, #magicalKyle, #death1, #death2, #death3, #gate, #skylightPage").hide();

// Move from start page to first part of adventure

  $("#startButton").click(function() {
    console.log("start button on")
    $("#start").hide();
    $("#wakeUp").show();
  });

// Click on trapdoor button and died
  $("#trapDoor").click(function() {
    console.log("trap door button")
    $("#wakeUp").hide();
    $("#death1").show();
  });
// Click on button for ornate door
  $("#kyleDoor").click(function() {
    console.log("ornate door button to Kyle")
    $("#wakeUp").hide();
    $("#magicalKyle").show();
  });

// Click on button for rubbleDoor
  $("#rubbleDoor").click(function() {
    console.log("rubble door")
    $("#wakeUp").hide();
    $("#looseRocks").show();
  });

//Submit Answer to Kyle's Riddle
$(".kyleForm").submit(function(event) {
    event.preventDefault();

    kyleInput = $("input#day").val();
    console.log(kyleInput);

    if (kyleInput === "wednesday" || kyleInput === "Wednesday"){
      return kyleCorrect();
    } else {
      return kyleIncorrect();
    }

  });

//Gate button 1 leads to death3
  $("#gateButton1").click(function() {
    console.log("death 3")
    $("#gate").hide();
    $("#death3").show();
  });

  $("#gateButton2").click(function() {
    console.log("go to skylight")
    $("#gate").hide();
    $("#skylightPage").show();
  });

});
