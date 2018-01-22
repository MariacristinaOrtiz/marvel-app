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
  // AÑADE lista2  a la vista PERFIL de Max
  firebase.database().ref('usuarios/' + localStorage.userUid + '/lista/2').on('value', function(snapshot) {
    var lista2 = snapshot.val();
    console.log(snapshot);
    console.log(lista2);
    // AÑADIR LISTA
    $('#content-list').append('<div  id = "list1" class="list container-fluid"><div class = "row"><p class="col-xs-6 title-list">' + lista2.title + '  (' + lista2.year + ')' + '</p><p class="col-xs-6 text-right"><button id = "btn-remove1" class="btn btn-eliminar btn-xs"><span class="glyphicon glyphicon-trash"aria-hidden="true"></span></button><button type="button" id = "btn-estado1" class="btn btn-primary btn-color btn-xs">' + 'Pendiente' + '</button></p></div><div class = "row"><figure class="col-xs-4"><img width = "105px" height = "90px" class= "img-responsive" src="' + lista2.poster + '" alt=""></figure><p class="col-xs-8 plot">' + lista2.plot + '</p></div></div>');
    // CAmbiar el botón de visto a pendiente y viceversa
    console.log($('#btn-estado1'));
    var $buttonEstado = $('#btn-estado1');
    var $buttonRemove = $('#btn-remove1');
    $buttonEstado.on('click', function() {
      if ($buttonEstado.text() === 'Pendiente') {
        $buttonEstado.text('Visto');
        console.log($buttonEstado.text());
        // Guardar en firebase
        firebase.database().ref('usuarios/' + localStorage.userUid + '/lista/2').update({
          Estado: $buttonEstado.text(),
        });
      } else {
        $buttonEstado.text('Pendiente');
        firebase.database().ref('usuarios/' + localStorage.userUid + '/lista/2').update({
          Estado: $buttonEstado.text(),
        });
      }
    });
    // Extraer la información del estado del buttonEstado
    firebase.database().ref('usuarios/' + localStorage.userUid + '/lista/2').on('value', function(snapshot) {
      var listaUno = snapshot.val();
      $buttonEstado.text(lista2.Estado);
    });
    // Eliminar
    $buttonRemove.on('click', function() {
      $('#list1').remove();
      // firebase.database().ref('usuarios/shCJTaLhHQWpO9PDXKqqeqc5ZkC3/listaUno' /* + localStorage.userUid '/' + localStorage.user.listaUno*/).remove();
    });
  });
  // AÑADE lista4  a la vista PERFIL de Max
  firebase.database().ref('usuarios/' + localStorage.userUid + '/lista/4' /* + localStorage.userUid '/' + localStorage.user.listaUno*/).on('value', function(snapshot) {
    var lista4 = snapshot.val();
    console.log(snapshot);
    console.log(lista4);
    // AÑADIR LISTA
    $('#content-list').append('<div id ="list" class="list container-fluid"><div class = "row"><p class="col-xs-6 title-list">' + lista4.title + '  (' + lista4.year + ')' + '</p><p class="col-xs-6 text-right"><button id = "btn-remove" class="btn btn-eliminar btn-xs"><span class="glyphicon glyphicon-trash"aria-hidden="true"></span></button><button type="button"id = "btn-estado2" class="btn btn-primary btn-color btn-xs">' + 'Pendiente' + '</button></p></div><div class = "row"><figure class="col-xs-4"><img  class= "img-responsive" src="' + lista4.poster + '" alt=""></figure><p class="col-xs-8 plot">' + lista4.plot + '</p></div></div>');
    // CAmbiar el botón de visto a pendiente y viceversa
    var $buttonEstado = $('#btn-estado2');
    var $buttonRemove = $('#btn-remove');
    $buttonEstado.on('click', function() {
      if ($buttonEstado.text() === 'Pendiente') {
        $buttonEstado.text('Visto');
        console.log($buttonEstado.text());
        // Guardar en firebase
        firebase.database().ref('usuarios/' + localStorage.userUid + '/lista/4'/* + localStorage.userUid '/' + localStorage.user.listaUno*/).update({
          Estado: $buttonEstado.text(),
        });
      } else {
        $buttonEstado.text('Pendiente');
        $buttonEstado.addClass('Pendiente');
        firebase.database().ref('usuarios/' + localStorage.userUid + '/lista/4' /* + localStorage.userUid*/).update({
          Estado: $buttonEstado.text(),
        });
      }
    });
    // Extraer la información del estado del buttonEstado
    firebase.database().ref('usuarios/' + localStorage.userUid + '/lista/4' /* + localStorage.userUid '/' */).on('value', function(snapshot) {
      var listaDos = snapshot.val();
      $buttonEstado.text(lista4.Estado);
    });
    // Eliminar
    $buttonRemove.on('click', function() {
      $('#list').remove();
    });
  });
  // ------ Fin de agregar listaDos------------
  // ListaTres
  // AÑADE listaUno  a la vista PERFIL de Max
  firebase.database().ref('usuarios/' + localStorage.userUid + '/lista/6' /* + localStorage.userUid '/' + localStorage.user.listaUno*/).on('value', function(snapshot) {
    var lista1 = snapshot.val();
    console.log(snapshot);
    console.log(lista6);
    // AÑADIR LISTA
    $('#content-list').append('<div  id = "list6" class="list container-fluid"><div class = "row"><p class="col-xs-6 title-list">' + lista6.title + '  (' + lista6.year + ')' + '</p><p class="col-xs-6 text-right"><button id = "btn-remove2" class="btn btn-eliminar btn-xs"><span class="glyphicon glyphicon-trash"aria-hidden="true"></span></button><button type="button" id = "btn-estado3" class="btn btn-primary btn-color btn-xs">' + 'Pendiente' + '</button></p></div><div class = "row"><figure class="col-xs-4"><img width = "105px" height = "90px" class= "img-responsive" src="' + lista6.poster + '" alt=""></figure><p class="col-xs-8 plot">' + lista6.plot + '</p></div></div>');
    // CAmbiar el botón de visto a pendiente y viceversa
    console.log($('#btn-estado3'));
    var $buttonEstado = $('#btn-estado3');
    var $buttonRemove = $('#btn-remove2');
    $buttonEstado.on('click', function() {
      if ($buttonEstado.text() === 'Pendiente') {
        $buttonEstado.text('Visto');
        console.log($buttonEstado.text());
        // Guardar en firebase
        firebase.database().ref('usuarios/' + localStorage.userUid + '/lista/6' /* + localStorage.userUid '/' + localStorage.user.listaUno*/).update({
          Estado: $buttonEstado.text(),
        });
      } else {
        $buttonEstado.text('Pendiente');
        firebase.database().ref('usuarios/' + localStorage.userUid + '/lista/6' /* + localStorage.userUid '/' + localStorage.user.listaUno*/).update({
          Estado: $buttonEstado.text(),
        });
      }
    });
    // Extraer la información del estado del buttonEstado
    firebase.database().ref('usuarios/' + localStorage.userUid + '/lista/6' /* + localStorage.userUid '/' + localStorage.user.listaUno*/).on('value', function(snapshot) {
      var lista1 = snapshot.val();
      $buttonEstado.text(lista6.Estado);
    });
    // Eliminar
    $buttonRemove.on('click', function() {
      $('#list6').remove();
      // firebase.database().ref('usuarios/shCJTaLhHQWpO9PDXKqqeqc5ZkC3/listaUno' /* + localStorage.userUid '/' + localStorage.user.listaUno*/).remove();
    });
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
  // CALIFICACIONES Y COMENTARIOS
  $('#ratings').on('click', function() {
    $('#ratings-child').toggleClass('hidden');
    $('#ratings div:first-child').toggleClass('hidden');
    firebase.database().ref('usuarios/' + localStorage.userUid + '/lista/2' /* + localStorage.userUid '/' + localStorage.user.listaUno*/).on('value', function(snapshot) {
      var lista2 = snapshot.val();
      $('#ratings-child').append('<div class ="container content-ratings"><figure class="col-xs-3"><img width="50px" height ="60px" class= "img-responsive" src="' + lista2.poster + '" alt=""></figure><p class="col-xs-9 title-ratings "><strong>' + lista2.title + '  (' + lista2.year + ')' + '</strong><p   class="col-xs-9"><span class="glyphicon glyphicon-star" aria-hidden="true"></span><span>' + lista2.ratings + '</span></p><p class=" coment plot col-xs-12">' + 'Hey! aquí irá la colección de tus comentarios y calificaciones, estamos trabajando para que puedas usar esta funcionalidad que te da Marvel fans :)!!' + '</p></div>');
    });
  });
  // Redireccion de vistas
    $('#usuario-nav').on('click', function(){
      window.location.href = '../index.html';
    })

});
