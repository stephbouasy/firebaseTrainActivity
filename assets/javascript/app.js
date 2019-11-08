var config = {
    apiKey: "AIzaSyAFGtroTJeBHou6TsdXGMwpu1xJNjgkusA",
    authDomain: "timesheet-group-9b389.firebaseapp.com",
    databaseURL: "https://timesheet-group-9b389.firebaseio.com",
    projectId: "timesheet-group-9b389",
    storageBucket: "timesheet-group-9b389.appspot.com",
    messagingSenderId: "713780339725",
    appId: "1:713780339725:web:71cd7bc9b71fb72daa2144"
};

// Initialize Firebase
firebase.initializeApp(config);
var database = firebase.database();

//global variable
var name = "";
var role = "";
var startDate = "";
var worked = "";

$("#submit").on("click", function () {
    event.preventDefault();

    name = $("#name").val().trim();
    role = $("#role").val().trim();
    startDate = $("#start-date").val().trim();
    worked = $("#worked").val().trim();


    database.ref().push({
        name: name,
        role: role,
        startDate: startDate,
        worked: worked,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
});


//grab data from 
database.ref().on("child_added", function (childSnapshot) {
    console.log(childSnapshot);
    //display in row
    $("#displayTable").append("<tr>" +
        "<td>" + childSnapshot.val().name +
        "<td>" + childSnapshot.val().role +
        "<td>" + childSnapshot.val().startDate +
        "<td>" + childSnapshot.val().worked +
        "<tr>");

}, function (error) {
    console.log("error" + error.code);
});