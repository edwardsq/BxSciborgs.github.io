$(document).ready(function() {
  $('#calendar').fullCalendar({
    editable: false, // Don't allow editing of events
    handleWindowResize: true,
    googleCalendarApiKey: 'AIzaSyBEP5YFCokRXgTKElHoCzq49Mj4zlpb98M',
    events: {
        googleCalendarId: 'bxscience.edu_orov21k09sm1sq0558q6julsbc@group.calendar.google.com'
    }
    })
});