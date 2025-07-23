document.addEventListener('DOMContentLoaded', function() {

  //mobile bar toogle 
document.querySelector('.mobile-menu').addEventListener('click', function() {
  this.classList.toggle('open');
  document.querySelector('.nav-menu').classList.toggle('open');
});
const navLinks = document.querySelectorAll('.nav-menu li a');

//time display
function updateTime() {
  const now = new Date();
  const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
  const timeString = now.toLocaleTimeString([], options);
  document.querySelector('.time').textContent = `${timeString}  CAT`;
  setTimeout(updateTime, 1000); // Update every second
}
updateTime();
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    document.querySelector('.nav-menu').classList.remove('open');
    document.querySelector('.mobile-menu').classList.remove('open');
  });
});

// photo slideshow
let currentPhoto = 0;
const photos = document.querySelectorAll('#gallery img');
const intervalTime = 3500; 

function showPhoto(index) {
  photos.forEach((photo, i) => {
    if (i === index) {
      photo.style.display = 'flex';
    } else {
      photo.style.display = 'none';
    }
  });
}

function prevPhoto() {
  currentPhoto = (currentPhoto - 1 + photos.length) % photos.length;
  showPhoto(currentPhoto);
}

function nextPhoto() {
  currentPhoto = (currentPhoto + 1) % photos.length;
  showPhoto(currentPhoto);
}

function startSlideshow() {
  setInterval(nextPhoto, intervalTime);
}

document.getElementById('prev').addEventListener('click', prevPhoto);
document.getElementById('next').addEventListener('click', nextPhoto);

showPhoto(currentPhoto);
startSlideshow();
});

function playMusic() {
  // music player
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
