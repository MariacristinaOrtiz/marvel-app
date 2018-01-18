$(document).ready(function() {
  moment.locale('es');
  $('#calendar').fullCalendar({
    editable: true,
    weekMode: 'liquid',
    url:'#',
    events: [
                  {
                      title: 'Pam Birthday',
                      start: '2018- 01-12',
                      allDay: true
                  },

              ]
});


});
