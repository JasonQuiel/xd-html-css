// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvD1vrBaoUghuGea3x2UyMDFXzeAinxsw",
  authDomain: "test-685ee.firebaseapp.com",
  projectId: "test-685ee",
  storageBucket: "test-685ee.appspot.com",
  messagingSenderId: "209567890273",
  appId: "1:209567890273:web:0392f24b9e807a2129e320"
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