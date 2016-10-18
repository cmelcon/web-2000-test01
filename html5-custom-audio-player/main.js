var audio = $('audio')[0];
var count = 3;
var speedRates = [
  0.1, 0.25, 0.5, 1, 3, 5, 7
];

loadState();

$('#backward').click(function() {
  if(!audio.paused) {
    audio.currentTime = Math.max(0, audio.currentTime - 5);
  }
});

$('#forward').click(function() {
  if(!audio.paused) {
    audio.currentTime = Math.max(0, audio.currentTime + 5);
  }
});

$('#arrow-down').click(function() {
  if(!audio.paused) {
    count--;
    if(count == - 1) count = 3;
    console.log(speedRates[count]);
    audio.playbackRate = speedRates[count];
  }
});

$('#arrow-up').click(function() {
  if(!audio.paused) {
    count++;
    if(count == 7) count = 3;
    console.log(speedRates[count]);
    audio.playbackRate = speedRates[count];
  }
});

$('#btn').click(function() {
  var address = $('#address').val();
  $('.mainControls').attr('src', address);
});

function saveState(){
  localStorage.setItem('last-played', audio.src);
  localStorage.setItem('last-location', audio.currentTime);
}

setInterval(saveState, 1000);

function loadState(){
 if (!localStorage.getItem("last-played") || !localStorage.getItem("last-location"))
   return;
 audio.src = localStorage.getItem("last-played");
 audio.play()
 .then(()=>audio.currentTime = localStorage.getItem("last-location"))
 .then(()=>audio.pause());
 //audio.pause();
}
