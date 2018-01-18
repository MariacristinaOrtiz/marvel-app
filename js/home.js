$(document).ready(function() {
  $('#titulo').click(function() {
    $('#filtros').html('Título <span class="caret"></span>');
    localStorage.filtro = 'Title';
  });

  $('#estreno').click(function() {
    $('#filtros').html('Año de Estreno <span class="caret"></span>');
    localStorage.filtro = 'Year';
  });

  $('#director').click(function() {
    $('#filtros').html('Nombre de Director <span class="caret"></span>');
    localStorage.filtro = 'Director';
  });

  $('#actores').click(function() {
    $('#filtros').html('Actores <span class="caret"></span>');
    localStorage.filtro = 'Actors';
  });

  console.log(data[0]['Title']);
  console.log(data.length);

  for (var i = 0; i < data.length ; i++) {
    if (data[i]['Title'].indexOf('Thor') !== -1 ) {
      console.log(data[i]);
    }
  }
});

