$(document).ready(function() {
  var containerPelis = $('#container-pelis');
  $('#titulo').click(function() {
    $('#filtros').html('Título <span class="caret"></span>');
    // localStorage.filtro = 'Title';
  });

  $('#estreno').click(function() {
    $('#filtros').html('Año de Estreno <span class="caret"></span>');
    // localStorage.filtro = 'Year';
  });

  $('#director').click(function() {
    $('#filtros').html('Nombre de Director <span class="caret"></span>');
    // localStorage.filtro = 'Director';
  });

  $('#actores').click(function() {
    $('#filtros').html('Actores <span class="caret"></span>');
    // localStorage.filtro = 'Actors';
  });

  // console.log(data[0]['Title']);
  // console.log(data.length);

  // for (var i = 0; i < data.length ; i++) {
  //   if (data[i]['Title'].indexOf('Captain') !== -1) {
  //     console.log(data[i]);
  //   }
  // }

  $('#search').click(function() {
    if ($('#text-search').val().length === 0 || $('#filtros').html() === 'Filtros<span class="caret"></span>') {
      alert('Ingrese búsqueda y/o filtro de búsqueda');
      $('#text-search').val(' ');
    } else {
      // console.log($('#filtros').text());
      buscar();
    }
  });

  function buscar() {
    containerPelis.empty();
    var buscar = $('#text-search').val();
    // console.log(data[0]['Ratings'][1]['Value']);
    if ($('#filtros').html() === 'Título <span class="caret"></span>') {
      for (var i = 0; i < data.length; i++) {
        if (data[i]['Title'].indexOf(buscar) !== -1) {
          var appen = '<div class="row">' +
                       '<div class = "col-xs-6">' +
                          '<img src="_img_peli_" class = "img-pelis">' +
                       '</div>' +
                       '<div class="col-xs-6">' +
                      '<p class="title-pelis">_nombre_pelicula_</p>' +
                      '<p>Año: _ano_</p>' +
                      '<p>Rating: _rating_</p>' +
                      '<p>Duración: _duracion_</p>' +
                      '</div>' +
                    '</div>';
          var appenReplace = appen.replace('_nombre_pelicula_', data[i]['Title']).replace('_img_peli_',data[i]['Poster']).replace('_ano_',data[i]['Year']).replace('_rating_',data[i]['Ratings'][1]['Value']);
          containerPelis.append(appenReplace);          
        }
      }
    }
  }
});

