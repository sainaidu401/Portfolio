function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validateSignUpInputCredentials() {
    let username = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm_password").value;

    // Defining error variables with a default value
    let nameErr = emailErr = passwordErr = confirmPasswordErr = true;

    // Validate name
    if (username === "") {
        printError("nameErr", "Please enter your name");
    } else {
        const regex = /^[a-zA-Z\s]+$/;
        if (regex.test(username) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // Validate email address
    if (email === "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        const regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    // Validate password
    if (password === "") {
        printError("passwordErr", "Please enter your password");
    } else {
        // Regular expression for password validation
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (regex.test(password) === false) {
            printError("passwordErr", "Please enter a valid password");
        } else {
            printError("passwordErr", "");
            passwordErr = false;
        }
    }

    // Validate confirm password
    if (confirmPassword === "") {
        printError("confirmPasswordErr", "Please confirm your password");
    } else {
        if (password !== confirmPassword) {
            printError("confirmPasswordErr", "Passwords do not match");
        } else {
            printError("confirmPasswordErr", "");
            confirmPasswordErr = false;
        }
    }

    // Prevent the form from being submitted if there are any errors
    return !(nameErr || emailErr || passwordErr || confirmPasswordErr);
}

function printError(elementId, hintMsg) {
    document.getElementById(elementId).innerHTML = hintMsg;
}

function printError(elementId, message) {
    document.getElementById(elementId).innerText = message;
}

function validateLoginInputCredentials() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    let emailErr = true;
    let passwordErr = true;

    // Validate email address
    if (email === "") {
        printError("emailErr", "Please enter your email address");
    } else {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    // Validate password
    if (password === "") {
        printError("passwordErr", "Please enter your password");
    } else {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (regex.test(password) === false) {
            printError("passwordErr", "Please enter a valid password");
        } else {
            printError("passwordErr", "");
            passwordErr = false;
        }
    }

    if (emailErr || passwordErr) {
        return false;
    } else {
        return true;
    }
}
