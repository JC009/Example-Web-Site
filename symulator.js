var dice4 = {
  sides: 4,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

var dice6 = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

var dice10 = {
  sides: 10,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

var dice12 = {
  sides: 12,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

var dice20 = {
  sides: 20,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

var dice100 = {
  sides: 100,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



async function printNumber(number) {
  var placeholder = document.getElementById('placeholder');
  placeholder.innerHTML = "...";
  var audio = new Audio('SOUNDS/dice.mp3');
	audio.play();
	await sleep (2800);
  placeholder.innerHTML = number;
}



var button4 = document.getElementById('button4');
var button6 = document.getElementById('button6');
var button10 = document.getElementById('button10');
var button12 = document.getElementById('button12');
var button20 = document.getElementById('button20');
var button100 = document.getElementById('button100');



button4.onclick = function() {
  var result = dice4.roll();
  printNumber(result);
}

button6.onclick = function() {
  var result = dice6.roll();
  printNumber(result);
}

button10.onclick = function() {
  var result = dice10.roll();
  printNumber(result);
}

button12.onclick = function() {
  var result = dice12.roll();
  printNumber(result);
}

button20.onclick = function() {
  var result = dice20.roll();
  printNumber(result);
}

button100.onclick = function() {
  var result = dice100.roll();
  printNumber(result);
};