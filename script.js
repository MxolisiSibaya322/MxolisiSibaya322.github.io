document.addEventListener('DOMContentLoaded', function() {
 // Navbar shrink on scroll
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) nav.classList.add('shrink');
    else nav.classList.remove('shrink');
  });

  // Scroll reveal animation
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('section, .tab, .hero, .education, .music, .projects, .details')
    .forEach(el => observer.observe(el));
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

// Chatbot functionality
document.addEventListener('DOMContentLoaded', () => {
  const chatBox = document.getElementById('chatBox');
  const openChat = document.getElementById('openChat');
  const closeChat = document.getElementById('closeChat');
  const chatBody = document.getElementById('chatBody');
  const userInput = document.getElementById('userInput');
  const sendBtn = document.getElementById('sendBtn');

  openChat.addEventListener('click', () => {
    chatBox.style.display = 'flex';
  });

  closeChat.addEventListener('click', () => {
    chatBox.style.display = 'none';
  });

    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', e => {
        if (e.key === 'Enter') sendMessage();
    });

    async function sendMessage() {
        const text = userInput.value.trim();
        if (!text) return;
        console.log("User message:", text);
        

        userInput.disabled = true;
        sendBtn.disabled = true;

        const userMsg = document.createElement('div');
        userMsg.className = 'user-message';
        userMsg.textContent = text;
        chatBody.appendChild(userMsg);
        userInput.value = '';
        chatBody.scrollTop = chatBody.scrollHeight;
        const botMsg = document.createElement('div');
        botMsg.className = 'bot-message';
        const loadingImg = document.createElement('img');
        loadingImg.src = 'media/bot-loading.gif';
        loadingImg.alt = 'Loading...';
        loadingImg.style.width = '50px';
        loadingImg.style.height = 'auto';
        botMsg.appendChild(loadingImg);
        chatBody.appendChild(botMsg);
        chatBody.scrollTop = chatBody.scrollHeight;

        try {
            const response = await fetch('https://mxolisi-digital-twin.onrender.com/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: text })
            });

            const textResp = await response.text();
            console.log("Response text:", textResp);

  
            if (!response.ok) {
                console.error(`Chat service returned HTTP ${response.status}`, textResp);
                throw new Error(`Chat service HTTP ${response.status}`);
            }


            let data;
            try {
                data = JSON.parse(textResp);
            } catch (e) {
                try {
                    data = JSON.parse(JSON.parse(textResp));
                } catch (e2) {
                    console.error('Failed to parse bot response:', textResp, e2);
                    data = null;
                }
            }

            const answer = (data && (data.reply || data.answer)) || "Bot did not return a reply.";

            botMsg.innerHTML = '';
            botMsg.textContent = answer;
            chatBody.scrollTop = chatBody.scrollHeight;

        } catch (err) {
            botMsg.innerHTML = '';
            botMsg.textContent = "Bot is unreachable at the moment, try again later";
            chatBody.scrollTop = chatBody.scrollHeight;
            console.error('Error fetching bot response:', err);
        } finally {
            userInput.disabled = false;
            sendBtn.disabled = false;
            userInput.focus();
        }
    };
});
