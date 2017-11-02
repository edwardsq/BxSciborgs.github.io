$.fn.getFormData = function() {
  var fields = this.find('[name]');
  var result = {};
  $.each(fields, function (i, el) {
    result[el.name] = el.value;
  });
  return result;
};
var config = {
apiKey: "AIzaSyCmxZbtAWv6JqgM2NqtSqQsm67BFcHoPfY",
authDomain: "sciborgs-scouting-app.firebaseapp.com",
databaseURL: "https://sciborgs-scouting-app.firebaseio.com",
projectId: "sciborgs-scouting-app",
storageBucket: "sciborgs-scouting-app.appspot.com",
messagingSenderId: "372162650684"
};
  var fb = firebase.initializeApp(config);
  var user_id;
  $('.submit').on('click', function (e) {
    e.preventDefault();
    var updates = {};
    user_id = user_id ? user_id : fb.database().ref().child('user_data').push().key;
    updates[user_id] = $('form').getFormData();
    var path = 'Competitions/' + document.getElementById("activityCatagory").value + '/Teams/' + document.getElementById("teamnumber").value;
    fb.database().ref().child(path).update(updates);
  });
