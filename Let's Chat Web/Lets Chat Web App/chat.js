// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCh6gKL4FhXHpWYW3qRdotWcfEGycgI2hg",
    authDomain: "let-s-chat-web-546d1.firebaseapp.com",
    projectId: "let-s-chat-web-546d1",
    storageBucket: "let-s-chat-web-546d1.appspot.com",
    messagingSenderId: "556198151939",
    appId: "1:556198151939:web:08e7714b0d3a22925bcb36"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
}



