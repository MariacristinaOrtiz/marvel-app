$(document).ready(function(){
  $('#myModal').on('shown.bs.modal', function () {
		$('#myInput').focus()
  });
  var provider = new firebase.auth.GoogleAuthProvider();
  $('#key').on('click', function(){
    firebase.auth().signInWithPopup(provider).then(function(result) {
   // This gives you a Google Access Token. You can use it to access the Google API.
   var token = result.credential.accessToken;
   // The signed-in user info.
   var user = result.user;
   console.log(user);
   console.log($('#k'));
 
   guardarDatos(result.user);
  //   setTimeout(function() {
  //    window.location.href = '../views/home.html';
  //  }, 1000);
   localStorage.userUid = user.uid
   console.log(user.uid);
   
  });
 
  // guardar datos automaticamente
  function guardarDatos(user){
    var usuario = {
      uid:user.uid,
      nombre:user.displayName,
      email:user.email,
      foto :user.photoURL
    }
    firebase.database().ref('marvel-fans/' + user.uid).set(usuario);
    console.log(user.uid);
  }

});
});