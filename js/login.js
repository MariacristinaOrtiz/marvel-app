$(document).ready(function(){
  $('#myModal').on('shown.bs.modal', function () {
		$('#myInput').focus()
  })

  var provider = new firebase.auth.GoogleAuthProvider();
  $('#login').click(function(){
    firebase.auth().signInWithPopup(provider).then(function(result) {
      console.log(result.user);
      guardarDatos(result.user);      
    });
  })
  // guardar datos automaticamente
 function guardarDatos(user){
  var usuario = {
    uid:user.uid,
    nombre:user.displayName,
    email:user.email,
    foto :user.photoURL,
  }
  firebase.database().ref('usuarios/' + user.uid).set(usuario);
  console.log(user.uid);
}
});