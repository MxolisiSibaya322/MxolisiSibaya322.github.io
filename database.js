document.addEventListener('DOMContentLoaded', function() {
    // hideLoadingOverlay();
    const firebaseConfig = {
        apiKey: "AIzaSyArLH_GYyAQTwsEA3vJwldOUvTUbUUZ3UY",
        authDomain: "personal-website-8a5e8.firebaseapp.com",
        projectId: "personal-website-8a5e8",
        storageBucket: "personal-website-8a5e8.appspot.com",
        messagingSenderId: "179188612553",
        appId: "1:179188612553:web:5cbef48153988879f6fc18"
      };
      firebase.initializeApp(firebaseConfig);

      
      let firestore = firebase.firestore();
    
      
      document.querySelector('.contact-form').addEventListener('submit', function (e) {
        e.preventDefault();
    
        
        let fullName = document.getElementById('full-name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;
    
        
        console.log(email);
        // email.replace(/[.#$/[\] ]/g, "_")
        let contactRef = firestore.collection('contacts').doc();
    
        
        contactRef.set({
          fullName: fullName,
          email: email,
          message: message
        })
        .then(function() {
          
          document.querySelector('.contact-form').reset();
    
          
          alert('Message to Mxolisi sent successfully!');
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
      });
  });

  function hideLoadingOverlay() {
   
    document.getElementById('loading-overlay').style.display = 'none';
  }

  window.addEventListener("load", function () {
    // hideLoadingOverlay();
  });

