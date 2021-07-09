// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyDFy-f5lRe4-aIJeZuOdLPkrFK7fFsBEY4",
authDomain: "project-3ff36.firebaseapp.com",
databaseURL: "https://project-3ff36-default-rtdb.firebaseio.com",
projectId: "project-3ff36",
storageBucket: "project-3ff36.appspot.com",
messagingSenderId: "365778773130",
appId: "1:365778773130:web:9949ff680faf5cde243973"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom()
{
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
});
localStorage.setItem("room_name", room_name);
window.location = "glitter_page.html";
}
function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
Room_names = childKey;
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
});
});
} 
getData(); 
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "glitter_page.html";
}
function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace = ("glitter.html");
}