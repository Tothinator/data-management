// Set local variables up in order to store and display them on HMTL (if we need them)

// Initialize Firebase
var config = {
apiKey: "AIzaSyDkOO3pjuDJWsFMA-kJ-x9UO3o-LSH5_Is",
authDomain: "data-management-activity.firebaseapp.com",
databaseURL: "https://data-management-activity.firebaseio.com",
projectId: "data-management-activity",
storageBucket: "data-management-activity.appspot.com",
messagingSenderId: "479009294520"
};

firebase.initializeApp(config);

var database = firebase.database();

// How do we want to store our data in the database? In a list?

// Function for whenever value changes in database or connected to
    // update database values
    // calculate Months worked and total billed
        // Find function for todays date
        // Find function (or make one) to find Math.floor() of todays date - start date
    // update HTML

// Submit new info button function
$("#add-employee-btn").on("click", function(event) {

    event.preventDefault();

    // save all fields as variables
    var name = $("#employee-name-input").val().trim();
    var role = $("#role-input").val().trim();
    var startDate = $("#start-input").val().trim();
    var monthlyRate = $("#rate-input").val().trim();

    // set these variables in the database (this will trigger initial function)
    database.ref().push({
        name: name,
        role: role,
        startDate: startDate,
        monthlyRate: monthlyRate
    });

    // clear input boxes
    $("#employee-name-input").val("");
    $("#role-input").val("");
    $("#start-input").val("");
    $("#rate-input").val("");

}); 


// Anything else?
    // Check to see if identical employee is already in database