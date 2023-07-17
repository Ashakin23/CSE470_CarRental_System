// script.js
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the values entered by the user
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform login validation
    if (username === "admin" && password === "password") {
        // Successful login
        alert("successful!"); // login success 
        // Redirect to another page or perform other actions
    } else {
        // Failed login
        alert("Invalid username OR password");
    }
});

