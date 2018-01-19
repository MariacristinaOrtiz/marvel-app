$(document).ready(function() {
  $nameList = $('#your-list');
  $buttonEdit = $('#button-edit');
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
  });
  // AÑADE listaUno  a la vista PERFIL de Max
  firebase.database().ref('usuarios/shCJTaLhHQWpO9PDXKqqeqc5ZkC3/listaUno' /* + localStorage.userUid '/' + localStorage.user.listaUno*/).on('value', function(snapshot) {
    var listaUno = snapshot.val();
    console.log(snapshot);
    console.log(listaUno);
    // AÑADIR LISTA
    $('#content-list').append('<div class="list row"><p class="col-xs-6">' + listaUno.title + '(' + listaUno.year + ')' + '</p><p class="col-xs-6 text-right"><button class="btn btn-editar btn-xs"><span class="glyphicon glyphicon-trash"aria-hidden="true"></span></button><button type="button" class="btn btn-primary btn-color btn-xs">' + 'Visto' + '</button></p><figure class="col-xs-12"><img class= "img-responsive" src="' + listaUno.poster + '" alt=""></figure></div>');
  });
  // EVENTO CLICK para editar nombre de lista
  $buttonEdit.on('click', function() {
    $nameList.attr('contenteditable', true);
    $nameList.focus();
  });
  // GUARDAR EL NOMBRE DE LA LISTA
  console.log($nameList);
  $nameList.html(localStorage.getItem('$nameList'));
  console.log(localStorage.getItem('$nameList'));
  $nameList.on('blur', function() {
    localStorage.setItem('$nameList', $nameList.html());
  });
  // AÑADIR LISTA





});
