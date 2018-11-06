// biz logic

Player.prototype.attemptCount = function(){
  return this.attempt += 1;
}

var userName;
var kyleInput;
var rockInput;

function Player (name){
    this.name = name;
    this.attempt = 0;
}


var user = new Player(name);


function kyleCorrect(){
  $("#magicalKyle").hide();
  $("#gate").show();
}

function kyleIncorrect(){
  $("#magicalKyle").hide();
  $("#death5").show();
}

function rockCorrect(){
  $("#looseRocks").hide();
  $("#tunnel").show();
}

function rockIncorrect1(){
  $("#looseRocks").hide();
  $("#death3").show();
}

function rockIncorrect2(){
  $("#looseRocks").hide();
  $("#death4").show();
}

function resetFields() {
  $("input#day").val("");
  $("input[name=rock]").prop('checked', false);
}


// user logic
$(document).ready(function() {

  $(".scorePadding, #start, #wakeUp, #looseRocks, #magicalKyle, #death1, #death3, #death4, #death5, #death6, #death7, #gate, #skylightPage, #youEscape, #tunnel").hide();

  $("#welcomePage").click(function() {
    user.name = prompt("What's your name?","your name here");
    $(".welcomePageClass").hide();
    $("#start").show();
    $(".userInfo").text(" " + user.name);
    $(".userTry").text(" " + user.attempt);
    $(".scorePadding").show();
    console.log(user);
  });

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

//gate button 2 leads to skylight
  $("#gateButton2").click(function() {
    console.log("go to skylight")
    $("#gate").hide();
    $("#skylightPage").show();
  });

// Escape option 1 leads to success
$("#skylightButton1").click(function() {
  console.log("go to escape, you win!")
  $("#skylightPage").hide();
  $("#youEscape").show();
});

//Escape option 2 leads to death
$("#skylightButton2").click(function() {
  console.log("go to death7")
  $("#skylightPage").hide();
  $("#death7").show();
});

//Smell what the rock is cooking.. its a tunnel
$("#rockSubmit").click(function(event) {
    event.preventDefault();

    rockInput = $("input:radio[name=rock]:checked").val();
    console.log(rockInput);

    if (rockInput === "rock2"){
      return rockCorrect();
    } else if (rockInput === "rock1") {
      return rockIncorrect1();
    } else {
      return rockIncorrect2();
    }

  });

  $("#tunnelButton1").click(function() {
    console.log("go to skylight")
    $("#tunnel").hide();
    $("#skylightPage").show();
  });

  $("#tunnelButton2").click(function() {
    console.log("go to death page")
    $("#tunnel").hide();
    $("#death6").show();
  });


  $(".newGame").click(function() {
    console.log("new game?")
    user.attemptCount();

    $(".userTry").text(" " + user.attempt);

    $("#wakeUp, #looseRocks, #magicalKyle, #death1, #death3, #death4, #death5, #death6, #death7, #gate, #skylightPage, #youEscape, #tunnel").hide();
    $("#start").show();



    resetFields();


  });



});
