function validatePassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    return true;
}

function validateForm() {
    var isPasswordValid = validatePassword();
    if (!isPasswordValid) {
        return false;
    }

    var username = document.getElementById("username").value;
    let codeweb = Math.trunc(Math.random() * 9000) + 1000;
    let userinput = parseInt(prompt("Please enter the following code to sign up successfully:\n" + codeweb), 10);
    while (codeweb !== userinput) {
        codeweb = Math.trunc(Math.random() * 9000) + 1000;
        userinput = parseInt(prompt("Try again:\n" + codeweb), 10);
    }
    alert("Congratulations " + username + "!\nYou signed up successfully, so you will be redirected to the login page.");

    // Redirect to another website (replace "header.html" with the desired URL)
    window.location.href = "home.html";
    return false; // Prevent default form submission
}

