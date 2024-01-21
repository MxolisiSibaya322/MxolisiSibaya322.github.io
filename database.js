document.addEventListener('DOMContentLoaded', function() {
    hideLoadingOverlay()
    const firebaseConfig = {
        apiKey: "AIzaSyArLH_GYyAQTwsEA3vJwldOUvTUbUUZ3UY",
        authDomain: "personal-website-8a5e8.firebaseapp.com",
        projectId: "personal-website-8a5e8",
        storageBucket: "personal-website-8a5e8.appspot.com",
        messagingSenderId: "179188612553",
        appId: "1:179188612553:web:5cbef48153988879f6fc18"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      // Get a reference to the Firestore database
      var firestore = firebase.firestore();
    
      // Event listener for the form submission
      document.querySelector('.contact-form').addEventListener('submit', function (e) {
        e.preventDefault();
    
        // Get form values
        var fullName = document.getElementById('full-name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;
    
        // Use the email as the document ID in Firestore
        console.log(email);
        var contactRef = firestore.collection('contacts').doc(email.replace(/[.#$/[\] ]/g, "_"));
    
        // Store data in Firestore
        contactRef.set({
          fullName: fullName,
          email: email,
          message: message
        })
        .then(function() {
          // Optional: You can reset the form after successful submission
          document.querySelector('.contact-form').reset();
    
          // Add any additional logic here, e.g., show a confirmation message
          alert('Message to Mxolisi sent successfully!');
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
      });
  });

  function hideLoadingOverlay() {
    // Hide the loading overlay
    document.getElementById('loading-overlay').style.display = 'none';
  }
