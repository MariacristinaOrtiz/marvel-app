$(document).ready(function() {
  var containerPelis = $('#container-pelis');
  $('#titulo').click(function() {
    $('#filtros').html('Título <span class="caret"></span>');
  });

  $('#estreno').click(function() {
    $('#filtros').html('Año de Estreno <span class="caret"></span>');
  });

  $('#director').click(function() {
    $('#filtros').html('Nombre de Director <span class="caret"></span>');
  });

  $('#actores').click(function() {
    $('#filtros').html('Actores <span class="caret"></span>');
  });

  $('#search').click(function() {
    if ($('#text-search').val().length === 0 || $('#filtros').html() === 'Filtros<span class="caret"></span>') {
      alert('Ingrese búsqueda y/o filtro de búsqueda');
      $('#text-search').val(' ');
    } else {
      buscar();
    }
  });

  function buscar() {
    containerPelis.empty();
    var buscar = $('#text-search').val();
    // console.log(data[0]['Ratings'][1]['Value']);
    if ($('#filtros').html() === 'Título <span class="caret"></span>') {
      var j = true;
      for (var i = 0; i < data.length; i++) {
        if (data[i]['Title'].indexOf(buscar) !== -1) {
          j = false;
          var appen = '<div class="row">' +
                       '<div class="col-xs-12 center">' +
                         '<img src="_img_peli_" class = "img-pelis" alt="_num_"  data-toggle="modal" data-target="#click-pelicula">' +
                      '</div>' +
                    '</div>';
          var appenReplace = appen.replace('_nombre_pelicula_', data[i]['Title']).replace('_img_peli_',data[i]['Poster']).replace('_num_', i);
          containerPelis.append(appenReplace);          
        }
      }

      if (j) {
        alert('Pelicula no encontrada');
        $('#text-search').val(' ');
      }

      $('.img-pelis').each(function(index) {
        $('.img-pelis').eq(index).click(function() {
          var altAtribute = $('.img-pelis').eq(index).attr('alt');
          $('#titulo-peli').text(data[altAtribute]['Title']);
          $('#ano').text('Año : ' + data[altAtribute]['Year']);
          $('#duracion').text('Duración : ' + data[altAtribute]['Runtime']);
          $('#director').text('Director : ' + data[altAtribute]['Director']);
          $('#actor').text('Actores : ' + data[altAtribute]['Actors']);
        });
      });
    } else {
      var z = true;
      console.log(data[0]['Actors'].length);
      for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i]['Actors'].length ; j++) {
          if (data[i]['Actors'][j].indexOf(buscar) !== -1) {
            z = false;
            var appen = '<div class="row">' +
            '<div class="col-xs-12 center">' +
              '<img src="_img_peli_" class = "img-pelis" alt="_num_"  data-toggle="modal" data-target="#click-pelicula">' +
           '</div>' +
         '</div>';
            var appenReplace = appen.replace('_nombre_pelicula_', data[i]['Title']).replace('_img_peli_',data[i]['Poster']).replace('_num_', i);
            containerPelis.append(appenReplace);       
          }
        }
      }

      if (z) {
        alert('Pelicula no encontrada');
        $('#text-search').val(' ');
      }

      $('.img-pelis').each(function(index) {
        $('.img-pelis').eq(index).click(function() {
          var altAtribute = $('.img-pelis').eq(index).attr('alt');
          $('#titulo-peli').text(data[altAtribute]['Title']);
          $('#ano').text('Año : ' + data[altAtribute]['Year']);
          $('#duracion').text('Duración : ' + data[altAtribute]['Runtime']);
          $('#director').text('Director : ' + data[altAtribute]['Director']);
          $('#actor').text('Actores : ' + data[altAtribute]['Actors']);
        });
      });
    }
  }
});

