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

let dbRef = firebase.database().ref('prices') //references prices collection
ref.on('value', getPrice)


/*
function getPrice(dbRef) {
let price = dbRef.val()
let keys = object.keys(price)
for (let i = 0; i < keys.length; i++) {
  let k = keys[i]
  let price = price[k].price

let li = createElement('li', price)
li.parent('priceList')
}
}
*/

/* nope...
dbRef.on("value", function(snapshot) {
  snapshot.forEach(function(e) {
    document.querySelector('priceList').innerHTML +=
  let $p = document.createElement('p')
  $p.innerHTML = snapshot.key + " - " + snap.val()
  }
*/




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