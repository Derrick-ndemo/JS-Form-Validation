const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const country = document.getElementById("country");
const zip = document.getElementById("zip");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");
const btn = document.querySelector(".btn");
const paras = document.querySelectorAll("p");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    validate();
});

function validate() {
    // username
    if (username.value.trim() === "") {
        setError(username, "Input cannot be empty");
    } else if (
        username.value.trim().length < 5 ||
        username.value.trim().length > 15
    ) {
        setError(username, "Input must be > 5 and < 15");
    } else {
        setSuccess(username);
    }
    // email
    const emailValue = email.value.trim();
    if (emailValue === "") {
        setError(email, "Email cannot be empty");
    } else if (!isValidEmail(emailValue)) {
        setError(email, "Invalid email format");
    } else {
        setSuccess(email);
    }

    // country
    if (country.value.trim() === "") {
        setError(country, "Country cannot be empty");
    } else {
        setSuccess(country);
    }

    // zip
    const zipValue = zip.value.trim();
    if (zipValue === "") {
        setError(zip, "Zip code cannot be empty");
    } else if (!isValidZip(zipValue)) {
        setError(zip, "Invalid zip code format");
    } else {
        setSuccess(zip);
    }

    // password
    const passwordValue = password.value.trim();
    if (passwordValue === "") {
        setError(password, "Password cannot be empty");
    } else if (passwordValue.length < 6) {
        setError(password, "Password must be at least 6 characters long");
    } else {
        setSuccess(password);
    }

    // confirm password
    const confirmPasswordValue = confirmPassword.value.trim();
    if (confirmPasswordValue === "") {
        setError(confirmPassword, "Confirm Password cannot be empty");
    } else if (confirmPasswordValue !== passwordValue) {
        setError(confirmPassword, "Passwords do not match");
    } else {
        setSuccess(confirmPassword);
    }
}

function isValidEmail(email) {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidZip(zip) {
    const zipRegex = /^\d{5}$/;
    return zipRegex.test(zip);
}

function setError(element, msg) {
    const parent = element.parentElement;
    parent.classList.add("error");

    const paras = parent.querySelectorAll("p");
    paras.forEach((para) => {
        para.textContent = msg;
    });

    parent.querySelector(".fa-thumbs-up").style.visibility = "hidden";
    parent.querySelector(".fa-thumbs-down").style.display = "visible";
}

function setSuccess(element) {
    const parent = element.parentElement;
    parent.classList.add("success");

    parent.querySelector(".fa-thumbs-up").style.visibility = "visible";
    parent.querySelector(".fa-thumbs-down").style.display = "hidden";
}
