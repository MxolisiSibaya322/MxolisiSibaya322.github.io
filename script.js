

function playMusic() {
  let mySong = document.getElementById("mySongs");
  let stop1 = document.getElementById("stop1");
  let stop2 = document.getElementById("stop2");
  let icon = document.getElementById("audio1");
  let my2Song = document.getElementById("mySong");
  let icon2 = document.getElementById("audio2");
  icon.onclick = function () {
    if (mySong.paused) {
      mySong.play();
      icon.innerHTML = "Pause &#9208";
    } else {
      mySong.pause();
      icon.innerHTML = "play &#9658";
    }
  };
  stop1.onclick = function () {
    mySong.pause();
    mySong.currentTime = 0;
    icon.innerHTML = "play &#9658";
  };
  stop2.onclick = function () {
    my2Song.pause();
    my2Song.currentTime = 0;
    icon2.innerHTML = "play &#9658";
  };
  icon2.onclick = function () {
    if (my2Song.paused) {
      my2Song.play();
      icon2.innerHTML = "Pause &#9208";
    } else {
      my2Song.pause();
      icon2.innerHTML = "play &#9658";
    }
  };
}

function openInNewTab(route){
  window.open(route, '_blank').focus();
}
