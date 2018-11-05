$(document).ready(function() {
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
});
