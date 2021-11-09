//firebase 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQgNRny9YAGXjkx32oDfQ_iJMJoRPMkfk",
  authDomain: "testing-d2b9b.firebaseapp.com",
  databaseURL: "https://testing-d2b9b-default-rtdb.firebaseio.com",
  projectId: "testing-d2b9b",
  storageBucket: "testing-d2b9b.appspot.com",
  messagingSenderId: "1057898864139",
  appId: "1:1057898864139:web:ebd4042dcea95b45b6310e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);






// Side Navigation Function
$('.canvas-toggle').hide();

function sideNav() {

  if ($(window).width() <= 1133) {
     $('.sidebar').hide();
        } else {
          $('.sidebar').show();
        }
}

$('.canvas-toggle').click(function() {
  });

$(window).resize(function() {

  sideNav();

});
