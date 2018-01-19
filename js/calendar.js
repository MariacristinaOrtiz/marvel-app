$(document).ready(function() {
  moment.locale('es');
  var calHeight = 500;
  $('#calendar').fullCalendar({
    header: {
               left: 'prev,next today',
               center: 'title',
               right: 'month,basicWeek,basicDay'
           },
    editable: true,

    weekMode: 'liquid',
    height:calHeight,
    contentHeight:calHeight,
    events: [
                  {
                      title: 'Black Panther',
                      start: '2018-02-16',
                      allDay: true,
                      url: 'https://www.youtube.com/watch?v=fsT5SyBLlIg'
                  },
                  {
                      title: 'Jessica Jones Netflix 2°Season',
                      start: '2018-03-08',
                      allDay: true,
                      url: 'https://www.youtube.com/watch?v=Wq7-ANZ_0e0'
                  },
                  {
                      title: 'Avengers: Infinity War',
                      start: '2018-05-04',
                      allDay: true,
                      url: 'https://www.youtube.com/watch?v=6ZfuNTqbHE8'
                  },
                  {
                      title: 'Ant-Man annd the Wasp',
                      start: '2018-07-06',
                      allDay: true,
                      url: 'https://www.youtube.com/watch?v=I3WHi5J1FUg'
                  },
                  {
                      title: 'Venom',
                      start: '2018-10-05',
                      allDay: true,
                      url: 'https://www.youtube.com/watch?v=8P0aaIOnYiE'
                  },
                  {
                      title: 'Captain Marvel',
                      start: '2019-03-08',
                      allDay: true,
                      url: 'https://www.youtube.com/watch?v=lokJkv32EUA'
                  },
              ]

});

});
