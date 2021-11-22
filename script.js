function revealMusic() {
  let page = document.getElementById("musicTab");
  let button = document.getElementById("musicPlay");
  let counter = true;

  page.style.display = "block";

  button.onclick = function () {
     if(counter){
    page.style.display = "block";
    counter= false
   }else{
    page.style.display = "none";
    counter= true;
   }
  };

  let mySong = document.getElementById("mySongs");
  let icon = document.getElementById("play");
  let my2Song = document.getElementById("mySong");
  let icon2 = document.getElementById("play2");
  icon.onclick = function () {
    if (mySong.paused) {
      mySong.play();
      icon.src = "media/Pause.png";
    } else {
      mySong.pause();
      icon.src = "media/play.png";
    }
  };

  icon2.onclick = function () {
    if (my2Song.paused) {
      my2Song.play();
      icon2.src = "media/Pause.png";
    } else {
      my2Song.pause();
      icon2.src = "media/play.png";
    }
  };
}
function openInNewTab(){
  window.open("media/MxolisiCV.pdf", '_blank').focus();
}
