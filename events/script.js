import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9ji9L5DKWN3OlsDoFlNRycMs9ic5TDmY",
  authDomain: "fitnambi-website.firebaseapp.com",
  projectId: "fitnambi-website",
  storageBucket: "fitnambi-website.appspot.com",
  messagingSenderId: "700355737269",
  appId: "1:700355737269:web:a8c514584397915667f0fc",
  measurementId: "G-XRE26HT193"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get a reference to the Firestore service
const db = getFirestore(app);

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
  
    try {
      // Add a new document with a generated ID to the 'messages' collection
      const docRef = await addDoc(collection(db, 'interested'), {
        name: name,
        email: email,
        number: number,
        timestamp: new Date(),
      });
      
    //   console.log("Document written with ID: ", docRef.id); // Debugging line
  
      // Clear form fields after successful submission
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('number').value = '';
  
      alert('Your message has been submitted successfully!');
    } catch (error) {
      console.error('Error writing to Firestore', error);
      alert('There was an error submitting your message. Please try again.');
    }
});
