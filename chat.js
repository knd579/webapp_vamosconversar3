// Configuração do Firebase de seu aplicativo
//ADICIONE OS LINKS DO FIREBASE AQUI
const firebaseConfig = {
    apiKey: "AIzaSyD3uGT1rMI6VKbvJlBizrXfgYVJVchF6b0",
    authDomain: "chat-64ae6.firebaseapp.com",
    databaseURL: "https://chat-64ae6-default-rtdb.firebaseio.com",
    projectId: "chat-64ae6",
    storageBucket: "chat-64ae6.appspot.com",
    messagingSenderId: "657582083770",
    appId: "1:657582083770:web:8f7f235d43c5f70be4fc83"
  };


// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    Armazene o nome de usuário em localStorage
    Programe window.location para que o usuário possa navegar até a página chat_room.html.
    */
    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
}



