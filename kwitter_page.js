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

   document.getElementById('user_name').innerHTML='hola'+user_name+'bienvenido a la sala:'+room_name;

   function send() {
  msg=document.getElementById('msg').value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
  });
  document.getElementById('msg').value='';
   }