
const firebaseConfig = {
      apiKey: "AIzaSyCf5Ljg-P1MxekWsNPLSvwYWvjEbnLxFSo",
      authDomain: "let-chat-web-app-db3ab.firebaseapp.com",
      databaseURL: "https://let-chat-web-app-db3ab-default-rtdb.firebaseio.com",
      projectId: "let-chat-web-app-db3ab",
      storageBucket: "let-chat-web-app-db3ab.appspot.com",
      messagingSenderId: "239158929529",
      appId: "1:239158929529:web:b279ee6e5f28284c110ca8"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    
    function addUser()
    {
        user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
    }