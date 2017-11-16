$(document).ready(function() {
$('#calendar').fullCalendar({
    header: {
        left: 'prev,next today',
        center: 'title',
        right: ''
    },
    eventSources: [{
        googleCalendarApiKey: 'AIzaSyA1EmSAhtmmc76bCegYKOfb-ShUFo-kgJg',
        googleCalendarId: 'bxscience.edu_orov21k09sm1sq0558q6julsbc@group.calendar.google.com',        
        className: 'fc-event-email',
        color: 'rgb(68, 68, 68)',
        textColor: "#FAEC29"
    }], 
    selectable: true,
    selectHelper: true,
    editable: false,
    themeSystem: 'bootstrap3'
});
});