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
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);  

 