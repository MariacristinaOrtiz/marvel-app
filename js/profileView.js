$(document).ready(function() {
  $nameList = $('#your-list');
  console.log(localStorage.userUid);
  firebase.database().ref('usuarios/shCJTaLhHQWpO9PDXKqqeqc5ZkC3' /* + localStorage.userUid*/).on('value', function(snapshot) {
    var user = snapshot.val();
    console.log(snapshot);
    console.log(user);
    $('#username p:first-child').hide();
    $('#username').prepend('<p class="visible-xs-inline-block">' + user.nombre + '</p>');
    $('#username-home strong:first-child').text(user.nombre);
    $('#email-home h6:first-child').text(user.email);
    $('#img-profile').attr('src', user.foto);

  })

  console.log($nameList);
  $nameList.html(localStorage.getItem('$nameList'));
  console.log(localStorage.getItem('$nameList'));
  $nameList.on('blur', function(){
    localStorage.setItem('$nameList', $nameList.html());
  })




});
