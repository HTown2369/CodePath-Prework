const clueHoldTime = 1000;
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000;

var pattern = [2, 2, 3, 4, 1, 3, 1, 4];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;

function startGame() {
  progress = 0;
  gamePlaying = true;
  document.getElementById("start-Btn").classList.add("hidden");
  document.getElementById("stop-Btn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("stop-Btn").classList.add("hidden");
  document.getElementById("start-Btn").classList.remove("hidden");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function lightButton(btn) {
  document.getElementById("square" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("square" + btn).classList.remove("lit");
}

function playClueSequence() {
  context.resume();
  let delay = nextClueWaitTime; //set delay to initial wait time
  guessCounter = 0;
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Game Over. You won!")
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  if(btn == pattern[guessCounter]) {
    // If values are same then we have reached end of current clue sequence
    if(guessCounter == progress) {
      // If progress is also at last value of pattern[], then we win
      if(progress == pattern.length - 1) {
        winGame();
      }
      // Otherwise we start next clue sequence
      else {
        progress++;
        playClueSequence();
      }
    }
    // Otherwise we read next guess b/c clue sequence isn't done
    else {
      guessCounter++;
    }
  }
  // If you make an incorrect guess you lose
  else {
    loseGame();
  }
}

const freqMap = {
  1: 281.6,
  2: 330.6,
  3: 385,
  4: 475.2,
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
