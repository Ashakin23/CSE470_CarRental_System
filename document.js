document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const forgotPasswordLink = document.getElementById("forgot-password-link");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "admin" && password === "123") {
            alert("Login successful!");
            // You can redirect the user to another page or perform further actions here.
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });

    forgotPasswordLink.addEventListener("click", function (event) {
        event.preventDefault();
        // Implement the logic for the "Forgot Password?" functionality here
        alert("Forgot Password functionality coming soon!");
    });
});
