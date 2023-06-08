function log_out(){
    localStorage.removeItem('user_name');
    window.location='index.html'    
  }


var firebaseConfig = {
  apiKey: "AIzaSyCusLazNL9PNavkVndayd5PivlmQIkVW84",
  authDomain: "chat-2cdf8.firebaseapp.com",
  databaseURL: "https://chat-2cdf8-default-rtdb.firebaseio.com",
  projectId: "chat-2cdf8",
  storageBucket: "chat-2cdf8.appspot.com",
  messagingSenderId: "642846350330",
  appId: "1:642846350330:web:3a4df23c93534a9272a243"
}

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);  

 user_name=localStorage.getItem('user_name');

 room_name=localStorage.getItem('room_name');

 document.getElementById('user_name').innerHTML='hola'+user_name;

 function add_room() {
  room_name=document.getElementById('room_name').value;
  firebase.database().ref('/').child(room_name).update({
    purpouse:'adding room name'
  });
  localStorage.setItem('room_name',room_name);
  window.location.replace('kwitter_page.html');
 }

 function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
  Room_names = childKey;
console.log('room_name-'+Room_names);
row="<div class='room_name' id="+ Room_names +" onclick= 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
document.getElementById('output').innerHTML+=row;

  });});}
  getData();

  function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
  }
  
